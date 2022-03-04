/**
 * Archivo donde se encuentra la ruta para crear el juego
 * 
 * @author Ricardo Ortega
 * @version 1.0.0
 * @since 03/02/2022
 * 
 */


/**
 * Modulos de dependencias
 */
const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

/* GET Crear juego */
router.get('/createGame', function (req, res, next) {
    res.render('createGame', { title: 'Juego de dados' });
});


/* POST Añadir jugadores al juego. */
router.post('/', gameController.createGame);

/**
 * Exportacion de la ruta
 */
module.exports = router;
