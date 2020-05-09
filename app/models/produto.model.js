module.exports = (sequelize, Sequelize) => {
    const Produto = sequelize.define("produto", {
      nome: {
        type: Sequelize.STRING
      },
      precoCusto: {
        type: Sequelize.FLOAT
      },
      precoVenda: {
        type: Sequelize.FLOAT
      }
    });
  
    return Produto;
  };