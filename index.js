const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var router = express.Router();

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    // basic pages
    .get('/', (req, res) => res.render('pages/basic/index'))
    .get('/dashboard', (req, res) => res.render('pages/basic/dashboard'))
    .get('/signup', (req, res) => res.render('pages/basic/signup'))
    // discussion pages
    .get('/discussion', (req, res) => res.render('pages/discussion/discussion'))
    .get('/discussion/content', (req, res) => res.render('pages/discussion/discussion-content'))
    // game pages
    .get('/game', (req, res) => res.render('pages/game/game'))
    .get('/canvas', (req, res) => res.render('pages/game/game-canvas'))
    .get('/minesweeper', (req, res) => res.render('pages/game-minesweeper'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
