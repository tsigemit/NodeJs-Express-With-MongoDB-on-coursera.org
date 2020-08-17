const express = require('express');
const bodyParser = require('body-parser');  

const dishRouter = express.Router();
const dishIdRouter = express.Router();
dishRouter.use(bodyParser.json());


dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the dishes to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        res.end('Deleting all dishes');
    });

dishRouter.route('/:dishId')
    .all(function (req, res, next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })
    .post(function (req, res, next) {
        res.end('POST operation not supported on dish url');
    })

    .get(function (req, res, next) {
        res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
    })

    .put(function (req, res, next) {
        res.write('Updating the dish with id ' + req.params.dishId + '\n');
        res.end('Will update the dish name ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete(function (req, res, next) {
        res.end('Deleting dish: ' + req.params.dishId);
    });


module.exports = dishRouter;

