"use strict";
require('dotenv').config();

const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const envs = require('./env-vars');
const router = require('./router');


app.use(express.static(path.resolve(__dirname)));

MongoClient.connect(envs.mongodb_uri, (err, db) => {

    if(err) { console.log(err); }
    else { console.log("Successfully connected to database..."); }

    router(app, db);

});

const port = envs.port || 8080;
app.listen(port, () =>   {
	console.log(`Node.js listening on port ${port}...`);
});
