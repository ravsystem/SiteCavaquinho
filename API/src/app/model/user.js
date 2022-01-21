const mongoose = require("../../database/config");
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
    {
        usuario: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            loadClass: true
        },
        senha: {
            type: String,
            required: true,
            select: false
        },
        CPF: {
            type: Number,
            required: true
        },
        dataNasc: {
            type: Date,
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
        cidade: {
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

UserSchema.pre('save', async function(next){
    const hash =  await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});

const User = mongoose.model('User', UserSchema)
module.exports = User;