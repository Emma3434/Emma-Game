const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    // basic pages
    .get('/', (req, res) => res.render('pages/basic/index'))
    .get('/dashboard', (req, res) => res.render('pages/basic/dashboard'))
    .get('/signup', (req, res) => res.render('pages/basic/signup'))
    // discussion pages
    /*
    .get('/discussion', (req, res) => res.render('pages/discussion'))
    .get('/dashboard', (req, res) => res.render('pages/dashboard'))
    .get('/dashboard', (req, res) => res.render('pages/dashboard'))
    .get('/dashboard', (req, res) => res.render('pages/dashboard'))
    .get('/dashboard', (req, res) => res.render('pages/dashboard'))*/
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
