const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Express Server
const app = express();

// Routes
const mainRoutes = require('./routes/admin');

// Middleware
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(mainRoutes);

// Server Start
app.listen(3000);
