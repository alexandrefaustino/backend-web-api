const model = require('../models/domainModel');

const existDomain = async (request, response, next) => {
  const { name } = request.body;

  const result = await model.searchDomain(name);

  console.log("Resultado: ", result);

  if (result) return response.status(422).json('URL already exists');

  next();
}

module.exports =  existDomain;