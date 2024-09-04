const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Carrega variáveis de ambiente
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
const decupagemRoutes = require("./routes/decupagemRoutes");
app.use("/api/decupagem", decupagemRoutes);

// Inicializa o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));