const mongoose = require("mongoose");

const PessoaSchema = new mongoose.Schema(
    {
        usuario: {
            type: String,
            required: true
        },
        senha: {
            type: String,
            required: true
        },
        CPF: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        CEP: {
            type: Number,
            required: true
        },
        endereco: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        },
        telefone: Number,
        celular: Number

    }, {
        timestamps: true
    }
);

module.exports = mongoose.model("Pessoa", PessoaSchema);