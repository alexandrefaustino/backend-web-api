const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017/PagesManager';
const DB_NAME = 'PagesManager';

const connection = () => {
  return MongoClient
    .connect(MONGO_DB_URL, {
      urlNewParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = connection;
