import { createInterface, type Interface } from "node:readline"
import { getCommands } from "./commands.js"
import type { State } from "./state.js"

export function startREPL(state: State): void {
  state.readline.prompt();
  state.readline.on('line', (input: string) => {
    let line = cleanInput(input)
    if (line[0] in state.commands) {
      state.commands[line[0]].callback(state)
      state.readline.prompt();
    } else {
      console.log("Unknown command");
      state.readline.prompt();
    }
  });
}

export function cleanInput(input: string): string[] {
  return input.toLowerCase().trim().split(/\s+/); 
}

