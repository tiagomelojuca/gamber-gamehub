const games = require('./game-list.json');
const { ipcRenderer } = require('electron');
var i;

// Delete Icons
const deleteIcons = document.getElementsByClassName('delete-icon');
for(i = 0; i < deleteIcons.length; i++) {

    deleteIcons[i].addEventListener('mouseover', function() {
        deleteButtonHovering = true;
        document.getElementById('PlayTrickster').classList.toggle('noactive'); // abstrair
    });

    deleteIcons[i].addEventListener('mouseout', function() {
        deleteButtonHovering = false;
        document.getElementById('PlayTrickster').classList.toggle('noactive'); // abstrair
    });

    deleteIcons[i].addEventListener('mouseup', function() {
        alert('Deletou');
    });

}

// Game Buttons
var gameButtonsId = [];
const gameButtons = document.getElementsByClassName('game-button');
for(i = 0; i < gameButtons.length; i++) { gameButtonsId[i] = gameButtons[i].id };

function execAssignedPath(index) {
    if(!deleteButtonHovering) {
        const executablePath = games.find(x => x.gameName === gameButtonsId[index]).gamePath;
        if(executablePath === "") {
            alert('ERROR: No game path found.');
            return;
        }
        ipcRenderer.send('execGame', executablePath);
    }
}

for(i = 0; i < gameButtonsId.length; i++) {
    document.getElementById(gameButtonsId[i]).addEventListener('mouseup', execAssignedPath.bind(null, i))
}