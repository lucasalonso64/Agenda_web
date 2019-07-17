const express = require('express');
const multer = require('multer');
const PostController = require('./controllers/PostController');

const routes = new express.Router();
const upload = multer();

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single(), PostController.store);


module.exports = routes;