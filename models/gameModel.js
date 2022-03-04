/**
 * Archivo donde se encuentra el esquema del juego
 * 
 * @author Ricardo Ortega
 * @version 1.0.0
 * @since 03/02/2022
 * 
 */


/**
 * Modulos de dependencias
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


/**
 * Creacion del esquema del juego
 */
const gameSchema = new Schema(
  {
    id: {
      type: String,
      // unique: true,
    },
    type: {
      type: String,
      trim: true,
    },
    players: [
      {
        name: {
          type: String,
          trim: true,
        },
        bet: {
          type: String,
        }
      }
    ],
    inProgress: {
      type: Boolean,
      default: false
    },
    winner: [
      {
        id: {
          type: String,
          default: '',
        },
        name: {
          type: String,
          trim: true,
          default: '',
        }
      }
    ]
  },
  { timestamps: true }
);

/**
 * Exportacion del esquema
 */
module.exports = player = mongoose.model("game", gameSchema);
