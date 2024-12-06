const { Router } = require('express');

const { rotasFuncionarios } = require('./rotasFuncionarios');
const { rotasDepartamentos } = require('./rotasDepartamentos');
const { login } = require('../controllers/segurancaController');

const rotas = new Router();

rotas.use(rotasFuncionarios);
rotas.use(rotasDepartamentos);

rotas.route("/login")
   .post(login)  

module.exports = rotas;