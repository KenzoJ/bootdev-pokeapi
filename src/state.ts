import { createInterface, type Interface } from "readline";
import { stdin, stdout, exit } from "node:process";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  PokeAPI_Obj: PokeAPI;
  nextLocationsURL: string | undefined;
  prevLocationsURL: string | undefined;
};

export function initState(interval: number): State {
  const rl: Interface = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > ",
  });

  return {
    readline: rl,
    commands: getCommands(),
    PokeAPI_Obj: new PokeAPI(interval),
    nextLocationsURL: undefined,
    prevLocationsURL: undefined,
  };
}
