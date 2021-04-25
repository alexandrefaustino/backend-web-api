const model = require('../models/domainModel');

const createNewDomain = async (name) => await model
  .createNewDomain(name);

const findByDomainId = async (id) => await model
  .findByDomainId(id);

const getAllDomains = async () => {
  const domains = await model.getAllDomains();
  const objectsArrayDomains = { domains : [...domains]};
  return objectsArrayDomains;
}

module.exports = {
  createNewDomain,
  findByDomainId,
  getAllDomains,
}