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

// Obtém todas as decupagens
exports.getTodasDecupagens = async (req, res) => {
  try {
    const decupagens = await Decupagem.findAll();
    res.status(200).json(decupagens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtém uma decupagem por ID
exports.getDecupagemPorId = async (req, res) => {
  try {
    const decupagem = await Decupagem.findByPk(req.params.id);
    if (!decupagem) {
      return res.status(404).json({ message: 'Decupagem não encontrada' });
    }
    res.status(200).json(decupagem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualiza uma decupagem
exports.atualizarDecupagem = async (req, res) => {
  try {
    const decupagem = await Decupagem.findByPk(req.params.id);
    if (!decupagem) {
      return res.status(404).json({ message: 'Decupagem não encontrada' });
    }
    await decupagem.update(req.body);
    res.status(200).json(decupagem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Implemente outros métodos do controlador (listar, atualizar, deletar)
