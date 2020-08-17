const express = require('express');
const http = require('http');
const app = express();
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));


app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

const PORT = 3000;
const hostname = 'localhost';
server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});