const express = require('express');
const app = express();

app.get('/api/v1/pets', (req, res) => {
    res.send('get all pets')
    
})

app.get('/api/v1/pets/:name', (req, res) => {
    res.send('get pet by name')
    
})

app.get('/api/v1/pets/owner', (req, res) => {
    res.send('get pet by owner name')
    
})

app.listen(8080)