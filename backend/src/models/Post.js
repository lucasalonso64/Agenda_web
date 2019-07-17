const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
    cidade: String,

}, {
    timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);