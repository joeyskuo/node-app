const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

// Express Server
const app = express();

// Routes
const mainRoutes = require('./routes/admin');

// Middleware
app.use(bodyParser.urlencoded());

// Routes
app.use(mainRoutes);

// Server Start
app.listen(3000);
