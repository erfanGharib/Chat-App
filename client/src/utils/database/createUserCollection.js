const MongoClient = require('mongodb').MongoClient;
const { dburl } = require('../../../config.json');

MongoClient.connect(process.env.DBURL, (err, db) => {
    if (err) throw err;
    const dbo = db.db('chatappdb');

    dbo.createCollection('users', {
        validator: {
            $jsonSchema: {
                bsonType: 'object',
                // required: ['Contacts', 'Profile', 'Setting'],
                properties: {
                    Contacts: {
                        bsonType: 'object',
                        required: ['contactEmail'],
                        properties: {
                            contactEmail: {
                                bsonType: 'string'
                            }
                        }
                    },
                    Profile: {
                        bsonType: 'object',
                        required: ['email', 'name', 'confirmCode'],
                        properties: {
                            email: {
                                bsonType: 'string'
                            },
                            name: {
                                bsonType: 'string'
                            },
                            bio: {
                                bsonType: 'string'
                            },
                            images: {
                                bsonType: 'array'
                            },
                            confirmCode: {
                                bsonType: 'string'
                            }
                        }
                    },
                    Setting: {
                        bsonType: 'object',
                        properties: {
                            darkMode: {
                                bsonType: 'bool'
                            },
                            notification: {
                                bsonType: 'bool'
                            },
                            languge: {
                                bsonType: 'string'
                            }
                        }
                    }
                }
            }
        }
    });
    db.close();
})