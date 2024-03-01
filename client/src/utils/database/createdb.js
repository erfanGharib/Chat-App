const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(process.env.DBURL, (err, db) => {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});