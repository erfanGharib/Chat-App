import express from 'express';
const indexRouter = express.Router();

indexRouter.get('/', function (req, res, next) {
    res.json('index');
});

export default indexRouter;
