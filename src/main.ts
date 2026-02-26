import { startREPL } from "./repl.js";
import { initState } from "./state.js";

function main() {
  startREPL(initState(300000));
}

main();
