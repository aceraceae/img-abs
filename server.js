"use strict";

const express = require('express');
const path = require('path');


const app = express();

app.use(express.static(path.resolve(__dirname)));



app.get('/', (req, res) => {
    res.writeHead(200, {"Content-Type": "text/json"});
    res.end('Hello world');
});

app.get('/imagesearch/:term', (req, res) => {
    const resp = Object.assign(req.params, req.query);
    res.json(resp);
});


const port = process.env.PORT || 8080;
app.listen(port, () =>   {
	console.log(`Node.js listening on port ${port}...`);
});
