/**
 * Archivo donde se encuentra la ruta para conocer el ganador del juego
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


/* GET Obtener ganador del juego por ID*/
router.get('/:id/winner', gameController.winnerGame)

/**
 * Exportacion de la ruta
 */
module.exports = router;
