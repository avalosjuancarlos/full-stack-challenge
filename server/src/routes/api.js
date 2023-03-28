const express = require('express');

const filesRouter = require('./files/files.router');

const api = express.Router();

api.use('/files', filesRouter);

module.exports = api;