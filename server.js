const express = require('express');

const server = express();

const carRouter = require('./api/carRouter');

server.use(express.json());
server.use('/api/cars', carRouter)

module.exports = server