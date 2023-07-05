const { query } = require('express');
const { MongoClient } = require('mongodb');

const queryMongo = async (type, id=null) => {
    let returnedDocuments = null;
    try {
        const url = 'mongodb://localhost:27017';
        const client = new MongoClient(url);
        const database = client.db('swapi');
        const collection = database.collection(type);
        
        switch(type) {
            case('planets'):
                let query = {};
                let options = {};
                returnedDocuments = await collection.find(query, options).toArray();
                break;
            default:
                throw new Error('Invalid query type');
        }
        await client.close();
        return returnedDocuments;
    } catch (err) {
        if(client) {
            await client.close();
        }
        throw err;
    }
}

module.exports = queryMongo;