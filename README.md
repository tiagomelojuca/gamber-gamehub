# Gamber GameHub
Application for managing game's shortcuts. My desktop was a mess, so I made it for personal use. Made with following technologies: HTML, CSS, JavaScript, Node, Electron, NunJucks, SimpleBar.

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
- Add new shortcut from UI
- Customize the default electron's menu

### Licensing
This project is licensed under MIT, please check LICENSE file.

### Credits
- [Electron](https://github.com/electron/electron) (c) 2013-2020 GitHub Inc (MIT License)
- [Nunjucks](https://github.com/mozilla/nunjucks) (c) 2012-2015, James Long (BSD License)
- [SimpleBar](https://github.com/Grsmto/simplebar) (c) 2015 Jonathan Nicol (MIT License)