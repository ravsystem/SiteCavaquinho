const express = require("express");

const artistaController = require("./app/controller/artistaController");

const produtoController = require("./app/controller/produtoController");

const routes = express.Router();


routes.get("/artista", artistaController.index);

routes.post("/artista", artistaController.store);

routes.get("/produto", produtoController.index);

routes.post("/produto", produtoController.store);


module.exports = routes;