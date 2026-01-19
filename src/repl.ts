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
    console.log(`received: ${line}`);
    rl.prompt();
  });


}
