/**
 * Archivo donde se encuentra la ruta para iniciar el juego
 * 
 * @author Ricardo Ortega
 * @version 1.0.0
 * @since 03/02/2022
 * 
 */


/**
 * Modulos de dependencias
 */const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

/* GET Iniciar juego */
router.get('/startGame', function (req, res, next) {
    res.render('startGame', { title: 'Juego de dados' });
});


/*POST Añadir la apuesta para cada jugador del juego */
router.post('/', gameController.startGame);

/**
 * Exportacion de la ruta
 */
module.exports = router;
