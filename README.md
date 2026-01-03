# ezcord Theme

<p align="center">
  <img src="icon.png" alt="ezcord Theme Icon" width="128" height="128">
</p>

Ein dunkles Discord-inspiriertes VS Code Theme, speziell entwickelt für **ezcord** und **Discord.py** Bot-Entwicklung.

## ✨ Features

- 🎨 **Discord-Farbpalette**: Verwendet die originalen Discord-Farben für ein vertrautes Gefühl
- 🐍 **Python-optimiert**: Besonders gut lesbar für Discord.py und ezcord Code
- 🌙 **Dunkler Modus**: Schont die Augen bei langen Coding-Sessions
- 🔍 **Klare Syntax-Hervorhebung**: Jedes Element hat seine eigene, gut unterscheidbare Farbe

## 🎨 Farbschema

| Element | Farbe | Hex |
|---------|-------|-----|
| Funktionen | Discord Blau | `#5865f2` |
| Klassen | Discord Grün | `#57f287` |
| Keywords | Discord Rot | `#ed4245` |
| Strings | Grün | `#57f287` |
| Decorators | Pink | `#eb459e` |
| Kommentare | Grau | `#4e5058` |
| Zahlen | Gelb | `#fee75c` |

## 📦 Installation

1. Öffne VS Code
2. Gehe zu Extensions (Ctrl+Shift+X)
3. Suche nach "ezcord Theme"
4. Klicke auf "Install"
5. Öffne die Command Palette (Ctrl+Shift+P)
6. Tippe "Color Theme" und wähle **ezcord**

## 🚀 Ideal für
- Py-cord
- Discord.py Bots
- ezcord Framework
- Python Entwicklung
- JavaScript/TypeScript
- Markdown Dokumentation
- JSON/YAML Konfigurationen



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


### Terminal
Perfekt abgestimmte Terminal-Farben im Discord-Stil.

## 💡 Tipps

- Verwende die Extension "Bracket Pair Colorizer" für noch bessere Lesbarkeit
- Aktiviere "Editor: Bracket Pair Guides" in den Einstellungen
- Font-Empfehlung: Fira Code mit Ligatures

## 🐛 Feedback & Probleme

Hast du Vorschläge oder Probleme gefunden? 
- [GitHub Issues](https://github.com/dein-username/ezcord-theme/issues)
- [Bewerte das Theme](https://marketplace.visualstudio.com/items?itemName=kawi.ezcord-theme&ssr=false#review-details)

## 📝 Changelog

Siehe [CHANGELOG.md](CHANGELOG.md) für alle Änderungen.

## 📄 Lizenz

MIT License - siehe [LICENSE](LICENSE)

## ❤️ Credits

Entwickelt mit 💜 für die ezcord und Discord.py Community.

---

**Viel Spaß beim Coden! 🚀**
```