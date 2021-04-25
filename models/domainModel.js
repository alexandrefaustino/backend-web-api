const { ObjectId } = require('bson');
const connection = require('./connection');
const DOMAINS = 'domains';
const createNewDomain = async (name) => {
  await connection()
  .then((db) => db.collection(DOMAINS)
    .insertOne({domain: `domain.com/${name}`}));  
  return {
    message:`This page is for ${name}`
  }
}   
    
const getAllDomains = async () => await connection()
  .then((db) => db.collection(DOMAINS)
  .find().toArray());

const findByDomainId = async (id) => await connection()
  .then((db) => db.collection(DOMAINS)
  .findOne(ObjectId(id)));

const searchDomain = async (name) => await connection()
.then((db) => db.collection(DOMAINS)
  .findOne({domain: `domain.com/${name}`}));

module.exports = {
  createNewDomain,
  getAllDomains,
  findByDomainId,
  searchDomain,
};
