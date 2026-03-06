import type { State } from "./state.js"

export async function commandPokedex(state: State) {
  console.log('Your Pokedex:')
  for (const [key, value] of Object.entries(state.pokemonCaught)) {
    console.log(`-${key}`)
  }
}
