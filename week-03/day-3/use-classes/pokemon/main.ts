'use strict';
import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
function initializePokemon(): Pokemon[] {
  return [
    new Pokemon('Bulbasaur', 'grass', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'grass'),
    new Pokemon('Squirtle', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire')
  ];
}

// A wild pokemon appeared!
let wildPokemon: Pokemon = new Pokemon('Oddish', 'grass', 'water');

// Which pokemon should Ash use?
function chooseEffective(pokemonOfAsh: Pokemon[], wildPokemon: Pokemon) {

  // find which pokemon effective against the wild pokemon (best choice)
  for (let i: number = 0; i < pokemonOfAsh.length; i++) {
    if (pokemonOfAsh[i].isEffectiveAgainst(wildPokemon)) {
      return pokemonOfAsh[i].name;

    // find the pokemon which is NOT the same type as the wild pokemon (2nd best choice)
    } else if ((i === (pokemonOfAsh.length - 1))) {

      for (let j: number = 0; j < pokemonOfAsh.length; j++) {
        if (!pokemonOfAsh[j].isTypeMatch(wildPokemon)) {
          return pokemonOfAsh[j].name;

        } else if (j === (pokemonOfAsh.length - 1)) {
          return pokemonOfAsh[0].name;
        }
      }
    }
  }
}

// Implement the following `chooseEffective` function which will choose the most effective pokemon for Ash
console.log(`I choose you, ${chooseEffective(pokemonOfAsh, wildPokemon)}!`);
