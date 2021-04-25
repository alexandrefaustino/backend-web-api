const express = require('express');

const app = express();

app.use(express.json());

const domainController = require('./controller/domainController');

const PORT = 3000;

app.use('/', domainController);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));