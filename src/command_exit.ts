import { exit } from "process";
import type { State } from "./state.js"

export async function commandExit(state: State) {
  console.log("Closing the Pokedex... Goodbye!");
 state.readline.close() 
  exit(0);
};
