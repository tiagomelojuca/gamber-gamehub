# 🎮 Gamber GameHub
Electron application for managing games' shortcuts. My desktop was a mess, so I made it for my own personal use.<br>
Created with following technologies: HTML, CSS, JavaScript, Node, Electron, NunJucks, SimpleBar.

### Getting Started
Create a file `game-list.json` inside the `src` folder. Must be something like this:<br><br>
`[`<br>
&nbsp;&nbsp;&nbsp;&nbsp;`{ "gameName": "Game 1", "gameIcon": "png-file-name", "gamePath": "path\\to\\game.exe" },`<br>
&nbsp;&nbsp;&nbsp;&nbsp;`{ "gameName": "Game 2", "gameIcon": "png-file-name", "gamePath": "path\\to\\game.exe" },`<br>
&nbsp;&nbsp;&nbsp;&nbsp;`{ "gameName": "Game 3", "gameIcon": "png-file-name", "gamePath": "path\\to\\game.exe" }`<br>
`]`<br>
<br>
Games' icons must be `PNG` files, and placed inside `src/icons` folder.

Optionally, you may want customize default styles in `styles-override.css` inside `src` folder. Also, other user configs can be found in `config.json`, inside same folder.

### To-do List
- Delete game shortcut from UI
- Add new game shortcut from UI
- Change games' order from UI

### Licensing
This project is licensed under MIT, please check LICENSE file.

### Credits
- [Electron](https://github.com/electron/electron) (c) 2013-2020 GitHub Inc
- [Nunjucks](https://github.com/mozilla/nunjucks) (c) 2012-2015, James Long
- [SimpleBar](https://github.com/Grsmto/simplebar) (c) 2015 Jonathan Nicol
- [exe-icon-extractor](https://www.npmjs.com/package/@inithink/exe-icon-extractor) (c) 2019 inithink

All third party licenses above can be found in `3rdpartylicenses` folder.