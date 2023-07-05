const { query } = require('express');
const { MongoClient } = require('mongodb');

const queryMongo = async (type, _id = null) => {
    let returnedDocuments = null;
    try {
        const url = 'mongodb://localhost:27017';
        const client = new MongoClient(url);
        const database = client.db('swapi');
        const collection = database.collection(type);
        switch (type) {
            case ('planets'):
                let query = (_id === null) ? {} : { id: parseInt(_id) };
                let options = {};
                console.log(query);
                returnedDocuments = await collection.find(query, options).toArray();
                console.log(returnedDocuments);
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