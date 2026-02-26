import type { State } from "./state.js";
import { PokeAPI } from "./pokeapi.js";


export async function commandMap(state: State) {
  const listLocations = (await state.PokeAPI_Obj.fetchLocations(state.nextLocationsURL))
  state.prevLocationsURL = listLocations.previous;
  state.nextLocationsURL = listLocations.next;
  let results = listLocations.results;
  for (let i = 0; i <20; i++) { 
    console.log(results[i].name)
  }
  
}
export async function commandMapBack(state: State) {
  const listLocations = (await state.PokeAPI_Obj.fetchLocations(state.prevLocationsURL))
  state.prevLocationsURL = listLocations.previous;
  state.nextLocationsURL = listLocations.next;
  
  let results = listLocations.results;
  for (let i = 0; i <20; i++) { 
    console.log(results[i].name)
  }
  
}
