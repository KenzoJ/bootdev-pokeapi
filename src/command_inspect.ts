//Add an inspect command. 
//It takes the name of a Pokemon and prints
//the name, height, weight, stats and type(s) of the Pokemon.

import type { State } from "./state.js"
import { Pokemon } from "./pokeapi.js";

export async function commandInspect(state: State, ...args: string[]) {
  if (!(args[0] in state.pokemonCaught)) {
    console.log(`you have not caught ${args[0]}`)
    return
  }
  const mons = state.pokemonCaught[args[0]]
  console.log(`
  Name: ${mons.name}
  Height: ${mons.height}
  Weight: ${mons.weight}
  Stats:
    -hp: ${mons.stats[0].base_stat}
    -attack: ${mons.stats[1].base_stat}
    -defense: ${mons.stats[2].base_stat}
    -special-attack: ${mons.stats[3].base_stat}
    -special-defense: ${mons.stats[4].base_stat}
    -Speed: ${mons.stats[5].base_stat}
  Types:
    -${mons.types[0].type.name}`)
  const secondType = mons.types[1]?.type.name;
  if (secondType) {
    console.log(`  -${secondType}\n`);
  }


}

