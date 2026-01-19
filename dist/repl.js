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
        let inputArray = cleanInput(line);
        if (inputArray.length === 0) {
            rl.prompt();
        }
        ;
        console.log(`Your command was: ${inputArray[0]}`);
        rl.prompt();
    });
}
export function cleanInput(input) {
    return input.toLowerCase().trim().split(/\s+/);
}
