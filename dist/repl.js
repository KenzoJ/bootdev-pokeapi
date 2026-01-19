export function startREPL(state) {
    state.readline.prompt();
    state.readline.on('line', (line) => {
        if (line in state.commands) {
            //input[line].callback(input)
            state.commands[line].callback(state);
            state.readline.prompt();
        }
        else {
            console.log("Unknown command");
            state.readline.prompt();
        }
    });
}
export function cleanInput(input) {
    return input.toLowerCase().trim().split(/\s+/);
}
