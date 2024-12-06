const { Router } = require('express');

const { getFuncionarios, getFuncionarioPorId, atualizarFuncionario, deletarFuncionario, adicionarFuncionario } = require('../controllers/funcionarioController');
const {verificaJWT} = require('../controllers/segurancaController');

const rotasFuncionarios = new Router();

rotasFuncionarios.route('/funcionarios')
   .get(verificaJWT, getFuncionarios)
   .put(verificaJWT, atualizarFuncionario)
   .post(verificaJWT, adicionarFuncionario);     

rotasFuncionarios.route('/funcionarios/:id')
   .get(verificaJWT, getFuncionarioPorId)      
   .delete(verificaJWT, deletarFuncionario);    

module.exports = { rotasFuncionarios };
