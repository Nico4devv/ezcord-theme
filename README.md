# ezcord Theme

<p align="center">
  <img src="icon.png" alt="ezcord Theme Icon" width="128" height="128">
</p>

A dark Discord-inspired VS Code theme, specially developed for **ezcord** and **Discord.py** bot development.

## ✨ Features

- 🎨 **Discord Color Palette**: Uses the original Discord colors for a familiar feel
- 🐍 **Python-optimized**: Especially readable for Discord.py and ezcord code
- 🌙 **Dark Mode**: Easy on the eyes during long coding sessions
- 🔍 **Clear Syntax Highlighting**: Each element has its own, easily distinguishable color

## 🎨 Color Scheme

| Element | Color | Hex |
|---------|-------|-----|
| Functions | Discord Blue | `#5865f2` |
| Classes | Discord Green | `#57f287` |
| Keywords | Discord Red | `#ed4245` |
| Strings | Green | `#57f287` |
| Decorators | Pink | `#eb459e` |
| Comments | Gray | `#4e5058` |
| Numbers | Yellow | `#fee75c` |

## 📦 Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "ezcord Theme"
4. Click "Install"
5. Open the Command Palette (Ctrl+Shift+P)
6. Type "Color Theme" and select **ezcord**

## 🚀 Ideal for
- Py-cord
- Discord.py Bots
- ezcord Framework
- Python Development
- JavaScript/TypeScript
- Markdown Documentation
- JSON/YAML Configurations

## 📸 Screenshots

### discord.py Code
```python
import discord
from discord.ext import commands

class MyCog(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
    
    @commands.command()
    async def hello(self, ctx):
        await ctx.send("Hello World!")
```

### py-cord Code
```python
import discord
from discord.ext import commands
from discord.commands import slash_command

class MyCog(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @slash_command()
    async def hello(self, ctx):
        await ctx.respond(f"Hello World!")

def setup(bot):
    bot.add_cog(MyCog(bot))
```

### Terminal
Perfectly tuned terminal colors in Discord style.

## 💡 Tips

- Use the "Bracket Pair Colorizer" extension for even better readability
- Enable "Editor: Bracket Pair Guides" in settings
- Font recommendation: Fira Code with Ligatures

## 🐛 Feedback & Issues

Do you have suggestions or found problems? 
- [GitHub Issues](https://github.com/your-username/ezcord-theme/issues)
- [Rate the Theme](https://marketplace.visualstudio.com/items?itemName=kawi.ezcord-theme&ssr=false#review-details)

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for all changes.

## 📄 License

MIT License - see [LICENSE](LICENSE)

## ❤️ Credits

Developed with 💜 for the ezcord and Discord.py community.

---

**Happy Coding! 🚀**