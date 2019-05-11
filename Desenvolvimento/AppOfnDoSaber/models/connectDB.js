//Import the mongodb module
var MongoClient = require('mongodb').MongoClient;



exports.connectDB = function(dbUrl, dbName, app){
    MongoClient.connect(dbUrl, {
        useNewUrlParser: true
    }, function (err, db) {
        if (err) throw err;
        app.locals.dbo = db.db(dbName);
    });
};

