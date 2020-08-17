const express = require('express');
const http = require('http');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use('/dishes', dishRouter);

app.use((req, res, next) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an expres');
})
const server = http.createServer(app);
const PORT = 3000;
const hostname = 'localhost';
server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});