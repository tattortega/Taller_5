/**
 * Archivo donde se encuentran los controladores para las peticiones Rest
 * 
 * @author Ricardo Ortega
 * @version 1.0.0
 * @since 03/02/2022
 * 
 */


/**
 * Modulos de dependencias
 */
const Game = require('../models/gameModel')

/**
 * Controlador para crear un juego
 * @param {*} req Peticion del usuario
 * @param {*} res Respuesta a la peticion
 */
exports.createGame = (req, res) => {
    const { player } = req.body;
    const game = new Game({
        id: req.body.id,
        type: req.body.type,
        players: [{
            name: player[0],
            bet: ""
        }, {
            name: player[1],
            bet: ""
        }, {
            name: player[2],
            bet: ""
        }],
        InProgress: true,
        winner: {
            id: "",
            name: "",
        }
    });

    game.save()
        .then((result) => {
            res.json({
                id: result.id,
                type: result.type,
                players: player
            })
        })
        .catch((err) => { res.json(err) });

};

/**
 * Controlador para agregar la apuesta para cada jugador del juego 
 * @param {*} req Peticion del usuario
 * @param {*} res Respuesta a la peticion
 */
exports.startGame = (req, res) => {
    const { id } = req.body;
    const { playerBet } = req.body;
    Game.findOneAndUpdate({ id: id }, {
        $set: {
            'players.0.bet': playerBet[0],
            'players.1.bet': playerBet[1],
            'players.2.bet': playerBet[2],
            'InProgress': true,
        }
    }
    )
        .then((result) => {
            res.json({
                "idGame": result.id,
                "type": result.type,
                "players": [{
                    "id": result.players[0].id,
                    "name": result.players[0].name,
                    "bet": playerBet[0],
                }, {
                    "id": result.players[1].id,
                    "name": result.players[1].name,
                    "bet": playerBet[1],
                }, {
                    "id": result.players[2].id,
                    "name": result.players[2].name,
                    "bet": playerBet[2],
                }
                ]
            })
        })
        .catch((err) => { res.json(err) });
};

/**
 * Controlador para obtener el estado del juego por ID 
 * @param {*} req Peticion del usuario
 * @param {*} res Respuesta a la peticion
 */
exports.gameStatus = (req, res) => {
    const { id } = req.params;
    Game.findOne({ id: id })
        .then((result) => res.json({
            id: result.id,
            players: {
                "player #1": {
                    id: result.players[0].id,
                    name: result.players[0].name
                },
                "player #2": {
                    id: result.players[1].id,
                    name: result.players[1].name
                },
                "player #3": {
                    id: result.players[2].id,
                    name: result.players[2].name
                }
            },
            InProgress: false,
            winner: {
                id: result.players[0].id,
                name: result.players[0].name
            }
        }))
        .catch((err) => { res.json(err) });
};

/**
 * Controlador para obtener el ganador del juego por ID
 * @param {*} req Peticion del usuario
 * @param {*} res Respuesta a la peticion
 */
exports.winnerGame = (req, res) => {
    const { id } = req.params;
    Game.findOne({ id: id })
        .then((result) => {
            res.json({
                winner: {
                    id: result.players[0].id,
                    name: result.players[0].name,
                }
            })
        })
        .catch((err) => { res.json(err) });
};

