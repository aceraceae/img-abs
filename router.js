"use strict";
const api = require('./handle-api');

module.exports = function(app, db) {

    const col = db.collection('search_queries');

    app.get('/', (req, res) => {
        res.redirect('/imagesearch');
    });

    app.get('/imagesearch', (req, res) => {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end('Image Search');
    });

    app.get('/imagesearch/:term', (req, res) => {
        const query = Object.assign(req.params, req.query);
        const now = new Date();

        col.insertOne({term: query.term, date: now, timestamp: now.getTime()}, (err, result) => {
            if(err) { console.log(err); }
        });

        api.imageSearch(query.term, query.offset).then(results => res.json(results));

    });

    app.get('/latest/imagesearch', (req, res) => {

        col.find({}, {"_id": false, "timestamp": false}).sort({"timestamp": -1}).limit(10).toArray((err, results) => {
            if(err) {
                console.log(err);
            }

            if(results[0]) {
                res.json(results);
            } else {
                res.json({ "error": "Nothing found."});
            }
        });
    });


}
