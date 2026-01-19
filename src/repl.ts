import { createInterface, type Interface } from "node:readline"
import { getCommands } from "./commands.js"
import type { State } from "./state.js"

export function startREPL(state: State): void {
  state.readline.prompt();
  state.readline.on('line', (line: string) => {
    if (line in state.commands) {
      //input[line].callback(input)
      state.commands[line].callback(state)
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

