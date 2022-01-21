const mongoose = require("../../database/config");

const ArtistaSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        foto: String,
        instrumento: String,
        dataNasc: {
            type: Date,
            default: Date.now,
            required: true
        },
        estado: String,
        cidade: String,
        descricao: String,
        popularidade: {
            type: Number,
            default: 0
        },
        rede_insta: String,
        rede_face: String,
        rede_twitter: String,
    }, {
        timestamps: true
    }
);

const Artista =  mongoose.model('Artista', ArtistaSchema);

module.exports = Artista;