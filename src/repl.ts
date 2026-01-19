import { stdin, stdout} from "node:process";
import { createInterface } from "node:readline"

export function startREPL(): void {

  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: 'Pokedex >',
  });

  rl.prompt();

  rl.on('line', (line: string) => {
    let inputArray: string[] = cleanInput(line)
    if (inputArray.length === 0) {
      rl.prompt()
    };
    console.log(`Your command was: ${inputArray[0]}`);
    rl.prompt();
  });


}

export function cleanInput(input: string): string[] {
  return input.toLowerCase().trim().split(/\s+/); 
}
