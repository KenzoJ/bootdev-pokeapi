import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline";
export function startREPL() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: 'Pokedex >',
    });
    rl.prompt();
    rl.on('line', (line) => {
        console.log(`received: ${line}`);
        rl.prompt();
    });
}
