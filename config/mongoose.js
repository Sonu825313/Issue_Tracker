// importing mongoose library
const mongoose = require('mongoose');

let MongoObj = {};

if(process.env.Pro) {
    MongoObj.useNewUrlParser =  true,
    MongoObj.useUnifiedTopology = true
}

// connecting to localhost/system server
// also tells the name of database which we are connecting to
mongoose.connect(process.env.MongoDB_URL,MongoObj);

//connection between database and mongoose is accessed by below code
const db = mongoose.connection;

// if connection gets error
db.on('error', console.error.bind(console, 'connection error to db:'));

// onces we get access to db or connection between database and mongoose gets established
db.once('open',function(){
    console.log('Successfully connected to database');
});