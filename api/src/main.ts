import { getReasonPhrase } from 'http-status-codes';
import express from 'express';
import logger from 'morgan';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import cookieParser from 'cookie-parser';
import http from 'http';
import cors from 'cors';
import { initSocket } from './routes/socket/index.js';
import { ServerOptions } from 'https';
import setting from './global/setting.js';
import authRouter from './routes/auth.js';
import { parseForm } from './middleware/parseForm.js';

(function () {
    const app = express();
    const httpServer = http.createServer(app as ServerOptions);
    
    httpServer.listen(process.env.PORT, () => {
        console.log('server started at port', process.env.PORT);
    });
    initSocket(httpServer);
    
    app.use(cors({
        origin: setting.origin,
        credentials: true,
        allowedHeaders: 'Content-Type, *'
    }));
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(parseForm.bind({
        expectedMimeTypes: [],
        uploadPath: 'rooms'
    }));
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/auth', authRouter);
    app.use('/*', (req, res, next) => {
        next(getReasonPhrase(404));
    });
    app.use((err, req, res, next) => {
        res.locals.message = err.message;
        res.locals.error   = req.app.get('env') === 'development' ? err : {};
        res.status(err.status || 500);
        res.json({ error: err });
    });
})();