'use strict'

const express = require('express')
const cors = require('cors');
const routes = require('./routes');

const app = express()
const limit = '50mb';

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({limit}));

app.get('/', (req, res) => {
    res.send('OK');
});

routes.setRoutes(app);
exports = module.exports = app
