const Decupagem = require("../models/Decupagem");

// Cria uma nova decupagem
exports.criarDecupagem = async (req, res) => {
  try {
    const novaDecupagem = await Decupagem.create(req.body);
    res.status(201).json(novaDecupagem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



// Implemente outros métodos do controlador (listar, atualizar, deletar)
