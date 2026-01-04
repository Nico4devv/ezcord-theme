const vscode = require('vscode');

let themeStatusBarItem;
let accentStatusBarItem;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  themeStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 101);
  themeStatusBarItem.command = 'ezcord.switchTheme';
  context.subscriptions.push(themeStatusBarItem);

  accentStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  accentStatusBarItem.command = 'ezcord.changeAccent';
  context.subscriptions.push(accentStatusBarItem);

  updateThemeIndicator();
  updateAccentIndicator();

  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration('workbench.colorTheme')) {
        updateThemeIndicator();
      }
      if (e.affectsConfiguration('workbench.colorCustomizations')) {
        updateAccentIndicator();
      }
    })
  );


  context.subscriptions.push(
    vscode.commands.registerCommand('ezcord.switchTheme', async () => {
      const config = vscode.workspace.getConfiguration();
      const currentTheme = config.get('workbench.colorTheme');
      
      const themes = [
        { label: '🎨 Ezcord Dark', value: 'Ezcord Dark' },
        { label: '💡 Ezcord Light', value: 'Ezcord Light' },
        { label: '🔆 Ezcord High Contrast', value: 'Ezcord High Contrast' },
        { label: '🌸 Ezcord Pastel', value: 'Ezcord Pastel' }
      ];
      
      const items = themes.map(theme => ({
        label: theme.label + (theme.value === currentTheme ? ' ✓' : ''),
        value: theme.value,
        description: theme.value === currentTheme ? 'Currently Active' : ''
      }));
      
      const selected = await vscode.window.showQuickPick(items, {
        placeHolder: 'Select an Ezcord Theme'
      });
      
      if (selected) {
        await config.update('workbench.colorTheme', selected.value, vscode.ConfigurationTarget.Global);
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('ezcord.changeAccent', async () => {
      const config = vscode.workspace.getConfiguration();
      
    const accents = [
      { label: '🔵 Blue', color: '#007acc' },
      { label: '💚 Neon', color: '#00ff88' },
      { label: '🌊 Oceanic', color: '#0077be' },
      { label: '🟠 Orange', color: '#ff6600' },
      { label: '🌙 Palenight', color: '#a6accd'},
      { label: '🌿 Plant', color: '#228b22' },
    ];
      
      const accentChoice = await vscode.window.showQuickPick(accents, {
        placeHolder: 'Select Accent Color'
      });
      
      if (accentChoice) {
        const colorCustomizations = {
          'activityBar.foreground': accentChoice.color,
          'activityBar.activeBorder': accentChoice.color,
          'statusBar.foreground': accentChoice.color,
          'editorCursor.foreground': accentChoice.color,
          'focusBorder': accentChoice.color + '60',
          'button.background': accentChoice.color,
          'tab.activeBorder': accentChoice.color
        };
        
        await config.update('workbench.colorCustomizations', colorCustomizations, vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage(`Accent color set to ${accentChoice.label}`);
      }
    })
  );

  themeStatusBarItem.show();
  accentStatusBarItem.show();
}

function updateThemeIndicator() {
  const currentTheme = vscode.workspace.getConfiguration().get('workbench.colorTheme');
  
  let displayName = currentTheme;
  if (typeof currentTheme === 'string') {
    if (currentTheme.includes('Ezcord')) {
      displayName = currentTheme.replace('Ezcord ', '');
    }
  }
  
  themeStatusBarItem.text = `$(paintcan) ${displayName}`;
  themeStatusBarItem.tooltip = `Current Theme: ${currentTheme} (Click to switch)`;
}

function updateAccentIndicator() {
  const customColors = vscode.workspace.getConfiguration().get('workbench.colorCustomizations');
  const accentColor = customColors?.['activityBar.foreground'] || '#00ff88';
  
  accentStatusBarItem.text = `$(symbol-color) Accent`;
  accentStatusBarItem.tooltip = `Current Accent: ${accentColor} (Click to change)`;
}

function deactivate() {
  if (themeStatusBarItem) {
    themeStatusBarItem.dispose();
  }
  if (accentStatusBarItem) {
    accentStatusBarItem.dispose();
  }
}

module.exports = {
  activate,
  deactivate
};
