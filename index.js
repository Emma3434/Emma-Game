const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname, 'views'))
    .use(express.static(path.join(__dirname, 'src')))
    .use(express.static(path.join(__dirname, 'public')))

    // basic pages
    .get('/', (req, res) => res.render('pages/basic/index'))
    .get('/dashboard', (req, res) => res.render('pages/basic/dashboard'))
    .get('/signup', (req, res) => res.render('pages/basic/signup'))
    // discussion pages
    .get('/discussion', (req, res) => res.render('pages/discussion/discussion'))
    .get('/discussion/:discussionId', (req, res) => res.render('pages/discussion/discussion-content'))
    // game pages
    .get('/game/minesweeper', (req, res) => res.render('pages/game/game-minesweeper'))
    .get('/game/canvas', (req, res) => res.render('pages/game/game-canvas'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
