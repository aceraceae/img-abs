"use strict";
require('dotenv').config();

const express = require('express');
const path = require('path');

const api = require('./handle-api');

const app = express();

app.use(express.static(path.resolve(__dirname)));

app.get('/', (req, res) => {
    res.redirect('/imagesearch');
});

app.get('/imagesearch', (req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end('Image Search');
});

app.get('/imagesearch/:term', (req, res) => {
    const query = Object.assign(req.params, req.query);
    api.imageSearch(query.term).then(results => res.json(results));
});


const port = process.env.PORT || 8080;
app.listen(port, () =>   {
	console.log(`Node.js listening on port ${port}...`);
});
