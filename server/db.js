// const mysql = require('mysql');
var MongoClient = require('mongodb').MongoClient;
 
async function main() {
    const uri = "mongodb+srv://erfan:erfan-%Rf25s@cluster0.daeu8.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
	// we'll add code here soon
    try {
        await client.connect();
    
        await listDatabases(client);
     
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);

// MongoClient.connect(uri, (err, db) => {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     connectionLimit: 10,
//     database: 'todo',
//     port: '8889'
// });
// con.connect(err => {
//     if(err) throw err;
//     console.log('connected');
// });


