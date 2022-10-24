global.__basedir = __dirname;
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const MongoClient = require('mongodb').MongoClient;
const initRoute = require('./src/routes');

app
    .use(cors({ origin: "http://localhost:5000" }))
    .use(express.urlencoded({ extended: true }))
    .get('/:url', ({ params }, res) => {
        if (params.url === '' || params.url === 'signin') {
            res.sendFile(__dirname + '/client/build/index.html');
        }
        else res.status(404).sendFile(__dirname + '/client/build/index.html');
    })
    .use(express.static(__dirname + '/client/build'))
    .use(express.json())
    .use('/api', initRoute)
    .listen(PORT, () => console.log(`Listening on ${PORT}`));