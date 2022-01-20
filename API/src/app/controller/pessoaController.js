const Pessoa = require('../model/pessoaModel');

class PessoaController {
    async store(req, res){
        const data = await Pessoa.create(req.body);
        console.log(data)
        return res.json(data);
    }

    async index(req, res){
        const data = await Pessoa.find({});

        return res.json(data);
    }
}

module.exports = new PessoaController();