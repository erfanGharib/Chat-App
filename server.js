const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app
    .get('/:url', ({ params }, res) => {
        if (params.url === '' || params.url === 'signin') {
            res.sendFile(__dirname + '/client/build/index.html');
        }
        else res.status(400).sendFile(__dirname + '/client/build/index.html');
    })
    .use(express.static(__dirname + '/client/build'))
    .use(express.json())
    .listen(PORT, () => console.log(`Listening on ${PORT}`));