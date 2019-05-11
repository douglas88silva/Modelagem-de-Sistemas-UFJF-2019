//Import the mongodb module
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    Server = require('mongodb').Server;


class DBObject {

    constructor(host, port) {

        // Connection URL
        this.url = 'mongodb://' + host + ':' + port;
        
        // Create a new MongoClient
        this.mongoClient = new MongoClient(this.url);

        // Use connect method to connect to the Server
        this.mongoClient.connect(function (err) {
            assert.equal(null, err);
            //console.log("Connected correctly to server");          
        });
        
    }

    close() {
        this.mongoClient.close();
    }

    insertOne(dbName, collName, doc) {
        var result;
        this.mongoClient.db(dbName).collection(collName).insertOne(doc, function (err, resultInsertOne) {
            if (err) throw err;
            result = resultInsertOne;
        });
        return result;
    }

    insertMany(dbName, collName, docs) {
        var result;
        this.mongoClient.db(dbName).collection(collName).insertMany(docs, function (err, resultInsertOne) {
            if (err) throw err;
            result = resultInsertOne;
        });
        return result;
    }

    findOne(dbName, collName, query) {
        var result;
        this.mongoClient.db(dbName).collection(collName).findOne(query, function (err, resultFindOne) {
            if (err) throw err;
            result = resultFindOne;
        });
        return result;
    }

    findMany(dbName, collName, query) {
        var result;
        this.mongoClient.db(dbName).collection(collName).find(query).toArray(function (err, resultFind) {
            if (err) throw err;
            result = resultFind;
        });
        return result;
    }

    updateOne(dbName, collName, query) {
        var result;
        this.mongoClient.db(dbName).collection(collName).updateOne(query, function (err, resultUpdateOne) {
            if (err) throw err;
            result = resultUpdateOne;
        });
        return result;
    }

    updateMany(dbName, collName, query) {
        var result;
        this.mongoClient.db(dbName).collection(collName).updateMany(query, function (err, resultUpdateMany) {
            if (err) throw err;
            result = resultUpdateMany;
        });
        return result;
    }

}

module.exports = DBObject;