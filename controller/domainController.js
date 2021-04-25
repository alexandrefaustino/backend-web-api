const express = require('express');

const router = express.Router();

const service = require('../services/domainService');

router.post('/', async (request, response) => {
  const { name } = request.body;

  const domain = await service.createNewDomain(name);

  response.status(200).json(domain);
});

router.get('/', async (_request, response) => {
  response.status(200).json(await service.getAllDomains());
});