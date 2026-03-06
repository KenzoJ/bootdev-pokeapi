import { Cache } from "./pokecache.js";
import type { CacheEntry } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache: Cache;

  constructor(cacheInterval: number) {
    this.cache = new Cache(cacheInterval);
  }

  closeCache() {
    this.cache.stopReapLoop();
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
    const cached = this.cache.get<ShallowLocations>(url);

    if (cached) {
      return cached;
    }

    try {
      const r = await fetch(url);
      if (!r.ok) {
        throw new Error(`Response: ${r.status}`);
      }
      const result = await r.json();
      this.cache.add(url, result);

      return result;
    } catch (error: any) {
      console.error(error.message);
      throw error;
    }
  }
  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const cached = this.cache.get<Location>(url);
    if (cached) {
      return cached;
    }
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`${resp.status} ${resp.statusText}`);
      }
      const location: Location = await resp.json();
      this.cache.add(url, location);
      return location;
    } catch (e) {
      throw new Error(
        `Error fetching location '${locationName}': ${(e as Error).message}`,
      );
    }
  }
  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
    const cached = this.cache.get<Pokemon>(url);
    if (cached) {
      return cached;
    }
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`${resp.status} ${resp.statusText}`);
      }
      const pokemon: Pokemon = await resp.json();
      this.cache.add(url, pokemon);
      return pokemon;

    } catch (e) {
      throw new Error(
        `Error fetching rate '${pokemonName}': ${(e as Error).message}`,
      );
    }
  }
}
//
export type ShallowLocations = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  game_index: number;
  id: number;
  location: {
    name: string;
    url: string;
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    version_details: {
      encounter_details: {
        chance: number;
        condition_values: any[];
        max_level: number;
        method: {
          name: string;
          url: string;
        };
        min_level: number;
      }[];
      max_chance: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
};

export type Pokemon = {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: any[]
  forms: any[]
  game_indices: any[]
  held_items: any[]
  location_area_encounters: string
  moves: any[]
  species: any
  sprites: any
  cries: any
  stats: any[]
  types: any[]
  past_types: any[]
  past_abilities: any[]
}
