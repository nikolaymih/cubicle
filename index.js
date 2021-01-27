const express = require('express');
const config = require('./config/config');

const app = express();

app.listen(config['PORT'], () => console.log(`The server is running on port ${config['PORT']}`));