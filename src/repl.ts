import { stdin, stdout, exit} from "node:process";
import { createInterface } from "node:readline"
import { getCommands } from "./registry.js"

export function startREPL(): void {

  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: 'Pokedex >',
  });

  rl.prompt();

  rl.on('line', (line: string) => {
    const input = getCommands();
    if (line in input) {
      input[line].callback(input)
    } else {
      console.log("Unknown command");
      rl.prompt();
    }

    
  });


}

export function cleanInput(input: string): string[] {
  return input.toLowerCase().trim().split(/\s+/); 
}

