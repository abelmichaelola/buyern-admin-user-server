import createError from 'http-errors';
import { Router } from 'express';
import express, { json, urlencoded } from 'express';
import * as path from 'path';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/UsersRoute.js";
import userRouter from "./routes/UserRoute.js";
dotenv.config();
var app = express();

mongoose.connect("mongodb://localhost:C2y6yDjf5%2FR%2Bob0N8A7Cgv30VRDJIWEHLM%2B4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw%2FJw%3D%3D@localhost:10255/admin", {
  ssl: true,
  sslValidate: false
}).then((result) => {
  console.log('====================================');
  console.log("connected to db");
  console.log('====================================');
})

// host = "mongodb://localhost:10255/cm?ssl=true"
// user = "localhost"
// password = "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw=="
// pymodm.connection.connect(host, username = user, password = password)
  .catch((err) => {
    console.log('====================================');
    console.log(err);
    console.log('====================================');
  });
// view engine setup
app.set('views', path.join('./views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join('./public')));


app.use('/', indexRouter);

app.use('/users', usersRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
  // res.render('error');
});

export default app;
