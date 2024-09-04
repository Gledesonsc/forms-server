const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Decupagem = sequelize.define("Decupagem", {
  cartaoIphone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  turno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  programa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cinegrafista: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reporter: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  retranca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  observacao: {
    type: DataTypes.TEXT,
  },
  arquivoPath: {
    type: DataTypes.STRING,
  },
});

module.exports = Decupagem;