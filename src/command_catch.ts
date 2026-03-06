import type { State } from "./state.js"
import { Pokemon } from "./pokeapi.js";

export async function commandCatch(state: State, ...args: string[]) {
  console.log(`Throwing a Pokeball at ${args[0]}...`);
  const encounteredPokemon: Pokemon = (await state.PokeAPI_Obj.fetchPokemon(args[0]))
  const catchRate = encounteredPokemon.base_experience
  let prob = 0;
  switch (true) {
    case catchRate < 30:
      prob = 90;
      break
    case catchRate < 150:
      prob = 60;
      break
    case catchRate < 250:
      prob = 40;
      break
    default:
      prob = 20;
      break
  }
  let catchAttempt = Math.floor(Math.random() * 100)
  let caughtBool: boolean = catchAttempt <= prob
  if (caughtBool) {
    console.log(`${encounteredPokemon.name} was caught!`)
    state.pokemonCaught[encounteredPokemon.name] = encounteredPokemon;
    console.log("You may now inspect it with the inspect command.")
  } else {
    console.log(`${encounteredPokemon.name} escaped!`)
  }

}
