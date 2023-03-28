const express = require('express')

const { httpGetAllFilesData } = require('./files.controller')

const filesRouter = express.Router()

filesRouter.get('/data', httpGetAllFilesData)

module.exports = filesRouter
