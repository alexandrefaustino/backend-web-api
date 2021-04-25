const express = require('express');

const router = express.Router();

const service = require('../services/domainService');

const existDomain = require('../middlewares/domainMiddleware');

router.post('/', existDomain, async (request, response) => {
  const { name } = request.body;  

 const domain = await service.createNewDomain(name);

  response.status(200).json(domain.message);
});

router.get('/', async (_request, response) => {
  response.status(200).json(await service.getAllDomains());
});

module.exports = router;