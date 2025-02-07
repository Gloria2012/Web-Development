const express = require('express');
const router = express.Router();
/*
router.get('/shelters', (req, res) => {
    res.send('All Shelters')
})

router.post('/shelters', (req, res) => {
    res.send('Creating Shelters')
})

router.get('/shelters/:id', (req, res) => {
    res.send('Viewing one shelter')
})

router.get('/shelters/:id/edit', (req, res) => {
    res.send('EDITING ONE SHELTER')
})
*/

router.get('/', (req, res) => {
    res.send('All Shelters')
})

router.post('/', (req, res) => {
    res.send('Creating Shelters')
})

router.get('/:id', (req, res) => {
    res.send('Viewing one shelter')
})

router.get('/:id/edit', (req, res) => {
    res.send('EDITING ONE SHELTER')
})

module.exports =router;