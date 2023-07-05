const { query } = require('express');
const { MongoClient } = require('mongodb');

const queryMongo = async (type, query = {}) => {
    let returnedDocuments = null;
    let options = {};
    try {
        const url = 'mongodb://localhost:27017';
        const client = new MongoClient(url);
        const database = client.db('swapi');
        const collection = database.collection(type);
        switch (type) {
            case ('films'):
                console.log(query);
                returnedDocuments = await collection.find(query).toArray();
                console.log(returnedDocuments);
                break;
            case ('planets'):
                // options = {};
                returnedDocuments = await collection.find(query, options).toArray();
                console.log(returnedDocuments);
                break;
            case ('films_planets'):
                // options = {};
                returnedDocuments = await collection.find(query, options).toArray();
                break;
            case ('characters'):
                // options = {};
                returnedDocuments = await collection.find(query, options).toArray();
                break;
            case ('films_characters'):
                // options = {};
                returnedDocuments = await collection.find(query, options).toArray();
                break;
            default:
                throw new Error('Invalid query type');
        }
        await client.close();
        return returnedDocuments;
    } catch (err) {
        if (client) {
            await client.close();
        }
        throw err;
    }
}



module.exports = queryMongo;

