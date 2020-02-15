const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const handlebars = require('express-handlebars');
const session = require('express-session');

// Express Server
const app = express();

// Handlebars
app.engine('hbs', handlebars({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

// Routes
const mainRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');

// Middleware
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'secret', resave: false, saveUninitialized: false}));

// Routes
app.use(mainRoutes);
app.use(authRoutes);

// Server Start
app.listen(3000);
