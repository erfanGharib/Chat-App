const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(process.env.DBURL, (err, db) => {
  if (err) throw err;
  const dbo = db.db('chatappdb');

  dbo.createCollection('confirmEmail', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['email', 'code'],
        properties: {
          email: {
            bsonType: 'string'
          },
          code: {
            bsonType: 'string'
          }
        }
      }
    }
  });
  
  db.close();
})