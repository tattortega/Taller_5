# Taller 5 

# Ejercicio caso práctico de una página dinámica

## Descripción del proyecto

Juego de dados para multiples jugadores.

Proyecto demo en donde se una una separación de resposabilidades usando los conceptos de:

- Plantilla (vista)
- Logica (controlador)
- Datos (Modelo)

Sistema orientado a REST

-----------------------------------------------
## Instrucciones para ejecutar el proyecto

Despues de clonar el proyecto, lo puede ejecutar con los siguientes comandos:

> npm install -> Instalar modulos de dependencias

> npm run dev -> Modo desarrollo

> npm run start -> Modo estandar

1. Para la creación del juego ingrese en la siguiente ruta y agregue el identificador, tipo de juego y nombre de los jugadores:
> localhost:8080/createGame

2. Para iniciar el juego ingrese en la siguiente ruta y agregue la apuesta para cada jugador:
> localhost:8080/startGame

3. Para conocer el ganador del juego ingrese en la siguiente ruta:
> localhost:8080/game/:id/winner

4. Para conocer el estado del juego ingrese en la siguiente ruta:
> localhost:3000/game/:id

