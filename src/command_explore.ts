import type { State } from "./state.js"
import type { Location } from "./pokeapi.ts"

export async function commandExplore(state: State, ...args: string[]) {
  const data: Location = await state.PokeAPI_Obj.fetchLocation(args[0])
  console.log(`Exploring ${args} `)
  for (let i = 0; i < data.pokemon_encounters.length; i++) {
    console.log(data.pokemon_encounters[i].pokemon.name)
  }
}
