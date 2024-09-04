const express = require("express");
const router = express.Router();
const decupagemController = require("../controllers/decupagemController");

// Define as rotas para as operações CRUD
router.post("/", decupagemController.criarDecupagem);
router.get('/', decupagemController.getTodasDecupagens);
router.get('/:id', decupagemController.getDecupagemPorId);
router.put('/:id', decupagemController.atualizarDecupagem);
router.delete('/:id', decupagemController.excluirDecupagem);
// Adicione outras rotas (GET, PUT, DELETE)

module.exports = router;