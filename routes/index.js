/**
 * Archivo donde se encuentra la ruta del inicio de la pagina
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

/* GET Inicio. */
router.get('/', function (req, res, next) {
  res.render('createGame', { title: 'Juego de dados' });
});



/**
 * Exportacion de la ruta
 */
module.exports = router;
