const { Router } = require('express');

const { getFuncionarios, getFuncionarioPorId, atualizarFuncionario, deletarFuncionario, adicionarFuncionario } = require('../controllers/funcionarioController');

const rotasFuncionarios = new Router();

rotasFuncionarios.route('/funcionarios')
   .get(getFuncionarios)
   .put(atualizarFuncionario)
   .post(adicionarFuncionario);     

rotasFuncionarios.route('/funcionarios/:id')
   .get(getFuncionarioPorId)      
   .delete(deletarFuncionario);    

module.exports = { rotasFuncionarios };
