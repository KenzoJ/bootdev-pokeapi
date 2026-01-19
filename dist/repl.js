import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline";
import { getCommands } from "./registry.js";
export function startREPL() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: 'Pokedex >',
    });
    rl.prompt();
    rl.on('line', (line) => {
        const input = getCommands();
        if (line in input) {
            input[line].callback(input);
        }
        else {
            console.log("Unknown command");
            rl.prompt();
        }
    });
}
export function cleanInput(input) {
    return input.toLowerCase().trim().split(/\s+/);
}
