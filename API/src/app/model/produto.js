const mongoose = require("../../database/config");

const ProdutoSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        foto: String,
        tipo: String,
        valor: Number,
        estado: String,
        cidade: String,
        descricao: String,
        cor: String,
        categoria: String,
    }, {
        timestamps: true
    }
);

const Produto =  mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;