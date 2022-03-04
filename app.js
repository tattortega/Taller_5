/**
 * Archivo donde se encuentran la raiz de la aplicacion
 * 
 * @author Ricardo Ortega
 * @version 1.0.0
 * @since 03/02/2022
 * 
 */


/**
 * Modulos de dependencias
 */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();

/**
 * Conexion a la base de datos mongodb usando mongoose
 */
const mongodb = 'mongodb://localhost/diceGame';
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

/**
 * Configuracion del motor de vista
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * Middlewares
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Rutas
 */
app.use('/', require('./routes/index'));
app.use('/', require('./routes/createGame'))
app.use('/', require('./routes/startGame'))
app.use('/createGame', require('./routes/createGame'));
app.use('/startGame', require('./routes/startGame'));
app.use('/game', require('./routes/gameStatus'));
app.use('/game', require('./routes/winnerGame'));


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
    res.render('error');
});

module.exports = app;
