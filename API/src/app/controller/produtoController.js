const Produto = require('../model/produto');

class ProdutoController {
    async store(req, res){
        const data = await Produto.create(req.body);
        console.log(data)
        return res.json(data);
    }

    async index(req, res){
        const data = await Produto.find({});

        return res.json(data);
    }
}

 
module.exports = new ProdutoController();

