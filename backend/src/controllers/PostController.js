const Post = require('../models/Post');

module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt');

        return res.json(posts);

    },

    async store(req, res) {
        //console.log(req.body);
        const { nome, email, telefone, cidade } = req.body;
        const post = await Post.create({
            nome,
            email,
            telefone,
            cidade,
        });

        req.io.emit('post', post);


        return res.json(post);

    }
};