"use strict";
// This module connects and disconnects from mongo
// mongo docs: http://mongodb.github.io/node-mongodb-native/3.1/quick-start/quick-start/
//https://github.com/idanGeula7/StudentsAndCourses/blob/master/src/dbOperations.js
const config = require("./config");
const MongoClient = require("mongodb").MongoClient;
let client, db, collection;



let connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(config.Mongo.mongoUrl, {
            useNewUrlParser: true
        }, (err, clientInstance) => {
            if (err) {
                console.log("failed to connect MongoDB");
                reject(err);
            } else {
                client = clientInstance;
                db = client.db(config.Mongo.dbName);
                collection = db.collection(config.Mongo.collectionName);
                console.log("Connected successfully to MongoDB");
                resolve();
            }
        });
    });
};

let disconnect = () => {
    client.close();
    console.log("MongoDB disconnected");
};

module.exports = {
    connect,
    disconnect
};