import { config } from 'dotenv';
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import cookieParser from 'cookie-parser';

config({ path: path.join(process.cwd(), '.env') });

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(cookieParser());
app.use((req, res, next) => {
    next(createError(404));
});
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    res.status(err.status || 500);
    res.json({ error: err.message });
});

app.listen(process.env.PORT, () => {
    console.log('server started at port', process.env.PORT);
})