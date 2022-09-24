const express = require('express');
const controller = require("../controllers/pokemonController")
const pokemonRouter = express.Router();

pokemonRouter.post('/byDex',controller.pokemon_byDex);
pokemonRouter.post('/between',controller.pokemon_betweenDex);

module.exports=pokemonRouter;