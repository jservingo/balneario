const express = require('express');
const ClienteController = require('../controllers/ClienteController');
const routes = express.Router();

routes.get('/', (req, res, next) => {
    res.send('hola mundo');
});

routes.get('/api/get/clientes', ClienteController.index);
routes.get ('/api/get/cliente/:id', ClienteController.show) ;
routes.post ('/api/store/cliente', ClienteController.store) ;

module.exports = routes;