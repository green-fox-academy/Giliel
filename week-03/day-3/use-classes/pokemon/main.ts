'use strict';
import { Pokemon } from './Pokemon';

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
function initializePokemon(): Pokemon[] {
  return [
    new Pokemon('Pikachu', 'electric', 'water'),
    new Pokemon('Bulbasaur', 'grass', 'water'),
    new Pokemon('Charizard', 'fire', 'grass'),
    new Pokemon('Squirtle', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire')
  ];
}

// A wild pokemon appeared!
let wildPokemon: Pokemon = new Pokemon('Oddish', 'grass', 'water');

// Which pokemon should Ash use?
function chooseEffective(arrayOfPokemons: Pokemon[], otherPokemon: Pokemon) {

  // find that pokemon effective against the other pokemon AND the other pokemon not effective against it (best choice)
  for (let i: number = 0; i < arrayOfPokemons.length; i++) {
    if (arrayOfPokemons[i].isEffectiveAgainst(otherPokemon) && !otherPokemon.isEffectiveAgainst(arrayOfPokemons[i])) {
      return arrayOfPokemons[i].name;
    }
  }

  // find that pokemon the other pokemon not effective against
  for (let i: number = 0; i < arrayOfPokemons.length; i++) {
    if (!otherPokemon.isEffectiveAgainst(arrayOfPokemons[i])) {
      return arrayOfPokemons[i].name;
    }
  }

  // the other pokemon effective against all pokemons in the array
  // find that pokemon effective against the other pokemon
  for (let i: number = 0; i < arrayOfPokemons.length; i++) {
    if (arrayOfPokemons[i].isEffectiveAgainst(otherPokemon)) {
      return arrayOfPokemons[i].name;
    }
  }

  return arrayOfPokemons[0].name;
}

// Implement the following `chooseEffective` function which will choose the most effective pokemon for Ash
if (pokemonOfAsh[0]) {
console.log(`I choose you, ${chooseEffective(pokemonOfAsh, wildPokemon)}!`);
} else {
  console.log('I left my pokeballs at home!');
}