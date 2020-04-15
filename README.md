# Gamber GameHub
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

### To-do List
- Delete button feature
- Add new game shortcut from UI
- Change games' order from UI
- Close Gamber when launching game
- Customize the default electron's menu

### Licensing
This project is licensed under MIT, please check LICENSE file.

### Credits
- [Electron](https://github.com/electron/electron) (c) 2013-2020 GitHub Inc
- [Nunjucks](https://github.com/mozilla/nunjucks) (c) 2012-2015, James Long
- [SimpleBar](https://github.com/Grsmto/simplebar) (c) 2015 Jonathan Nicol

All third party licenses above can be found in `3rdpartylicenses` folder.