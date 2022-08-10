const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log('express server started!'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
    // res.end();
});