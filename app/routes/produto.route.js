module.exports = app => {
    const produtos = require("../controllers/produto.controller.js");
  
    var router = require("express").Router();
  
    // Criar novo Produto
    router.post("/", produtos.create);
  
    // Recuperar todos Produtos
    router.get("/", produtos.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Recuperar um Produto pelo id
    router.get("/:id", produtos.findOne);
  
    // Atualizar um Produto pelo id
    router.put("/:id", produtos.update);
  
    // Deletar um produto pelo ID
    router.delete("/:id", produtos.delete);
  
    // Deletar todos os produtos no banco de dados
    router.delete("/", produtos.deleteAll);
  
    app.use('/api/produtos', router);
  };