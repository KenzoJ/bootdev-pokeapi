import { getCommands, CLICommand } from "./registry.js"
import { commandExit } from "./command_exit.js"

export function commandHelp(commands: Record<string, CLICommand>) {
  console.log(`Welcome to the Pokedex!`);
  console.log("Usage:\n");
  //is an object
  const allCommands = getCommands();
  for (const key in allCommands) {
    console.log(`${key}: ${allCommands[key].description}`);
  }
  //to get the first you need
  // allCommands[name].name

}
