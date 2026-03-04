import type { State } from "./state.js"

export async function startREPL(state: State): Promise<void> {
  state.readline.prompt();
  state.readline.on('line', async (input: string) => {
    let line = cleanInput(input)
    if (line[0] in state.commands) {
      try {
        await state.commands[line[0]].callback(state, ...line.slice(1))
      } catch (e) {
        console.log((e as Error).message);
      }
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
