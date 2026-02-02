import type { State } from "./state.js"

export async function startREPL(state: State): Promise<void> {
  state.readline.prompt();
  state.readline.on('line', async (input: string) => {
    let line = cleanInput(input)
    if (line[0] in state.commands) {
      await state.commands[line[0]].callback(state)
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

