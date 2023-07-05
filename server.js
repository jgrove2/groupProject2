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
});

app.get('/api/planets/:id', async (req, res) => {
    try {
        let planets = await queryMongo('planets', {id: req.params.id});
        res.send(planets);
    } catch (err) {
        throw err;
    }
});

app.get('/api/planets/:id/films', async (req, res) => {
    try {
        let planets = await queryMongo('films_planets', {planet_id: parseInt(req.params.id)});
        res.send(planets);
    } catch (err) {
        throw err;
    }
});

app.get('/api/films/:id/planets', async (req, res) => {
    try {
        let planets = await queryMongo('films_planets', {film_id: parseInt(req.params.id)});
        res.send(planets);
    } catch (err) {
        throw err;
    }
});

app.get('/api/planets/:id/characters', async (req, res) => {
    try {
        let planets = await queryMongo('characters', { homeworld: parseInt(req.params.id) });
        res.send(planets);
    } catch (err) {
        throw err;
    }
});

app.get('/api/characters', async (req, res) => {
    try {
        let characters = await queryMongo('characters');
        res.send(characters);
    } catch (err) {
        throw err;
    }
});

app.get('/api/characters/:id', async (req, res) => {
    try {
        let characters = await queryMongo('characters', { id: parseInt(req.params.id) });
        res.send(characters);
    } catch (err) {
        throw err;
    }
});

app.get('/api/characters/:id/films', async (req, res) => {
    try {
        let characters = await queryMongo('films_characters', { character_id: parseInt(req.params.id) });
        res.send(characters);
    } catch (err) {
        throw err;
    }
});

app.get('/api/films/:id/characters', async (req, res) => {
    try {
        let characters = await queryMongo('films_characters', { film_id: parseInt(req.params.id) });
        res.send(characters);
    } catch (err) {
        throw err;
    }
});
app.get('/api/films', async (req, res) => {
    try {
        let films = await queryMongo('films');
        res.send(films);
    } catch (err) {
        throw err;
    }
})

app.get('/api/films/:id', async (req, res) => {
    try {
        let films = await queryMongo('films', { id: parseInt(req.params.id) });
        console.log(req.params.id);
        res.send(films);
    } catch (err) {
        throw err;
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})