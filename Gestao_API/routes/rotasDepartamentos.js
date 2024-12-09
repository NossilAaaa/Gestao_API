const { Router } = require('express');

const {addDepartamento,
    updateDepartamento,
    deleteDepartamento,
    getDepartamentoPorId,
    getDepartamentos} = require('../controllers/departamentoController')

const {verificaJWT} = require('../controllers/segurancaController');

const rotasDepartamentos = new Router();

rotasDepartamentos.route('/departamentos')
   .get( verificaJWT, getDepartamentos)
   .put(verificaJWT, updateDepartamento) 
   .post(verificaJWT, addDepartamento);         


rotasDepartamentos.route('/departamentos/:id')
   .get(verificaJWT, getDepartamentoPorId)             
   .delete(verificaJWT, deleteDepartamento);    

module.exports = { rotasDepartamentos };