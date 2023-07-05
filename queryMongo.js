const { query } = require('express');
const { MongoClient } = require('mongodb');

const queryMongo = async (type, id=null) => {
    try {
        const url = 'mongodb://localhost:27017';
        const client = new MongoClient(url);
        const database = client.db('swapi');
        const planets = database.collection(type);
        let returnedDocuments = null;
        
        switch(type) {
            case('planets'):
                let query = {};
                let options = {};
                returnedDocuments = planets.find(query, options).toArray();
                break;
            default:
                throw new Error('Invalid query type');
        }

    } catch (err) {
        if(client) {
            await client.close();
        }
        throw err;
    } finally {
        if( client ) {
            await client.close();
        }
    }
}

module.exports = queryMongo;