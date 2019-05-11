//Import the mongoose module
var mongoose = require('mongoose');


class ConnectDB {
    constructor(nameDB) {
        //Set up default mongoose connection
        var mongoDB = 'mongodb://127.0.0.1/' + nameDB;
        mongoose.connect(mongoDB, { useNewUrlParser: true });
        //Get the default connection
        this.db = mongoose.connection;
        //Bind connection to error event (to get notification of connection errors)
        this.db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    }
}

module.exports = new mongoose.model('UserModel', UserSchema );