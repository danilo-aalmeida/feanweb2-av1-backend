const db = require("../models");
const Produto = db.produtos;
const Op = db.Sequelize.Op;

// Criar e salvar novo Produto
exports.create = (req, res) => {
  // Validar requisição
  if (!req.body.nome) {
    res.status(400).send({
      message: "Conteúdo não pode estar vazio!"
    });
    return;
  }

  // Criar Produto
  const produto = {
    nome: req.body.nome,
    precoCusto: req.body.precoCusto
    // precoVenda: req.body.precoVenda
  };

  // Salvar Produto no banco de dados
  Produto.create(produto)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Houve um erro durante a criação do Produto."
      });
    });
};

// Recuperar todos produtos do banco de dados.
exports.findAll = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;
  
    Produto.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro ocorreu durante a recuperação dos Produtos."
        });
      });
};

// Procurar um produto pelo ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Produto.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao recuperar o Produdo de id=" + id
        });
      });
};

// Atualizar um produto pelo ID
exports.update = (req, res) => {
    const id = req.params.id;

    Produto.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Produto foi atualizado com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possivel atualizar o Produto de id=${id}. Talvez o produto não foi localizado ou req.body está vazio!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao atualizar Produto de id=" + id
        });
      });
};

// Deletar um produto pelo ID
exports.delete = (req, res) => {
    const id = req.params.id;

    Produto.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Produto foi excluído com sucesso!"
          });
        } else {
          res.send({
            message: `O Produdo de id=${id} não pode ser deletado. Talvez o Produto não foi encontrado!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao excluir Produto de id=" + id
        });
      });
};

// Deletar todos os produtos no banco de dados
exports.deleteAll = (req, res) => {
    Produto.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Produtos excluídos com sucesso!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Algum erro ocorreu durante a exclusão dos Produtos."
          });
        });
};

// Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//     Produto.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Algum erro ocorreu ao recuperar os produtos."
//       });
//     });
// };