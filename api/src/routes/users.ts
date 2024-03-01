import express from 'express';
const usersRouter = express.Router();

usersRouter.get('/', function (req, res, next) {
    res.json('respond with a resource');
});

export default usersRouter;