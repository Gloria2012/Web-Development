const express = require('express');
const router = express.Router();
//const app = express();

router.get('/', (req, res) => {
    res.send('All DOGS')
})

router.get('/:id', (req, res) => {
    res.send('Viewing one DOG')
})

router.get('/:id/edit', (req, res) => {
    res.send('EDITING ONE DOG')
})

module.exports=router;