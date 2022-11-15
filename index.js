const __basedir = __dirname; 
exports.module = __basedir;
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const initRoute = require('./server/src/routes');
const filesRoute = require('./server/src/routes/files');
// const mysql = require('mysql');
// const { Db } = require('mongodb');

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
// });
// db.connect(err => {
//     if(err) throw err;
//     console.log('connected');
// });

app
    // .use(cors({ origin: "http://localhost:" + PORT }))
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .get('/', ({ params, socket }, res) => {
        // console.log(socket.localAddress); // get user ip (localhost: 0:0:0:0:0:0:0:1 || ::1)
        
        /*
         * The goal here is send Constant htmlFile for each route
         * because we are using Client Side Rendering (CSR)
        */
        let status = 200;
        // if (params.url !== '' || params.url !== 'signin') status = 404;
        res.sendFile(__dirname + '/build/index.html');
    })
    // .get('createdb', (req, res) => {
    //     let sql = 'CREATE DATABASE nodemysql';
    //     con.query(sql, (err, result) => {
    //         if (err) throw err;
    //         res.send('database created')
    //     })
    // })
    .use(express.static(__dirname + '/build'))
    .use('/api', initRoute)
    .use(filesRoute)
    .listen(PORT, () => console.log(`Listening on ${PORT}`));