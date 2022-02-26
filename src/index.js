'use strict'
require('dotenv').config();

const app = require('./app');
require('./config/connection');

const port = process.env.PORT || 3800;

app.listen(port, () => {
    console.log('API running on port ' + port);
});