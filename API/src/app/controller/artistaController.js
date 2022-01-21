const Artista = require('../model/artistas');

class ArtistaController {
    async store(req, res){
        const data = await Artista.create(req.body);
        console.log(data)
        return res.json(data);
    }

    async index(req, res){
        const data = await Artista.find({});

        return res.json(data);
    }
}
 
module.exports = new ArtistaController();