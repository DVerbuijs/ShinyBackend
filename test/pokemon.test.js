const assert = require('assert');
const{Pokemon} = require("../data/pokemon");
let testPokemon = new Pokemon(1,"bulbasaur","Gen1");

describe("Testing Pokemon.js", () => {
   
    it('Test dexnumber', () => {
        assert.equal(testPokemon.dexNumber,1);
    });
    
    it('Test Name', () => {
        assert.equal(testPokemon.name,"bulbasaur");
    });

    it('Test Gen', () => {
        assert.equal(testPokemon.gen,"Gen1");
    });


});