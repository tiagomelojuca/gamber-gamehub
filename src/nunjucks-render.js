const games = require('./game-list.json')
nunjucks.configure('views', { autoescape: true });

var i;
for(i = 0; i < games.length; i++) {
    document.getElementById('games-ul').innerHTML = document.getElementById('games-ul').innerHTML +
        nunjucks.render('game-shortcut.html', games[i]);
};