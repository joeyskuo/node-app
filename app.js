const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

app.use((req, res, next) => {
    res.send('Express Server Running');
});

app.listen(3000);
