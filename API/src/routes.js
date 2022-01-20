const express = require("express");

const PessoaController = require("./app/controller/pessoaController");

const routes = express.Router();


routes.get("/pessoas", PessoaController.index);

routes.post("/pessoas", PessoaController.store);

module.exports = routes;