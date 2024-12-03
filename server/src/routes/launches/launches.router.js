const express = require('express')
const {httpGetAllLaunches, httpAddNewLaunch, httpsAbortLaunch} = require('./launches.controler')

const launchesRouter = express.Router()

launchesRouter.get('/', httpGetAllLaunches)
launchesRouter.post('/', httpAddNewLaunch)
launchesRouter.delete('/:id', httpsAbortLaunch)

module.exports = launchesRouter