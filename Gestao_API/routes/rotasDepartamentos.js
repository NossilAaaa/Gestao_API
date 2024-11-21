const { Router } = require('express');

const {addDepartamento,
    updateDepartamento,
    deleteDepartamento,
    getDepartamentoPorId,
    getDepartamentos} = require('../controllers/departamentoController')

    const rotasDepartamentos = new Router();

rotasDepartamentos.route('/departamentos')
   .get(getDepartamentos)
   .put(updateDepartamento) 
   .post(addDepartamento);         


rotasDepartamentos.route('/departamentos/:id')
   .get(getDepartamentoPorId)             
   .delete(deleteDepartamento);    

module.exports = { rotasDepartamentos };