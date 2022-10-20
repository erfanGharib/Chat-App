const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const MongoClient = require('mongodb').MongoClient;
// const dbURL = 
const reportbugRouter = require('./api/reportBug');

app
    .use(express.static(__dirname + '/client/build'))
    .use(express.json())
    .use('/api', reportbugRouter)
    
    .get('/:url', ({ params }, res) => {
        if (params.url === '' || params.url === 'signin') {
            res.sendFile(__dirname + '/client/build/index.html');
        }
        else res.status(404).sendFile(__dirname + '/client/build/index.html');
    })

    .listen(PORT, () => console.log(`Listening on ${PORT}`));