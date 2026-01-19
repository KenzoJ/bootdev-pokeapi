import type { State } from "./state.js";

export function commandHelp(state: State) {
  console.log(`Welcome to the Pokedex!`);
  console.log("Usage:\n");
  const allCommands = state.commands;
  for (const key in allCommands) {
    console.log(`${key}: ${allCommands[key].description}`);
  }

}
