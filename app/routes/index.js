const { Router } = require('express');
const routes = Router();

require('./UserRoutes')(routes);

module.exports = routes;