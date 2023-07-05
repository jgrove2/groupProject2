const queryMongo = require('./queryMongo.js');
const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/planets', async (req, res) => {
    try {
        let planets = await queryMongo('planets');
        res.send(planets);
    } catch (err) {
        throw err;
    }
})

app.get('/api/planets/:id', async (req, res) => {
    try {
        let planets = await queryMongo('planets', req.params.id);
        console.log(req.params.id);
        res.send(planets);
    } catch (err) {
        throw err;
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})