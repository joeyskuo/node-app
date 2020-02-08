const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const mainRoutes = require('./routes/admin');
app.use(bodyParser.urlencoded());

// Routes
app.use(mainRoutes);

app.listen(3000);
