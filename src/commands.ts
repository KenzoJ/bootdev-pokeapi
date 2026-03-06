import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandExplore } from "./command_explore.js";
import { commandMap, commandMapBack } from "./command_map.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js"
import type { CLICommand } from "./state.js";


export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays names of 20 locations areas",
      callback: commandMap,
    },
    mapb: {
      name: "map back",
      description: "Displays previous 20 locations areas",
      callback: commandMapBack,
    },
    explore: {
      name: "explore",
      description: "Explore specific areas",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "catch specific pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "inspect specific pokemon",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "see all caught pokemon",
      callback: commandPokedex,
    }
  };
}


