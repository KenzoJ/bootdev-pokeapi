import { Cache } from "./pokecache.ts";
import type { cacheData } from "./pokecache.ts";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor(cacheInterval: number) {
    this.cache = new Cache(cacheInterval);
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    try {
      let cacheData: cacheData | undefined = this.cache.get(pageURL);
      if (cacheData != undefined) {
        return cacheData;
      }
      const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
      const r = await fetch(url);
      if (!r.ok) {
        throw new Error(`Response: ${r.status}`);
      }
      const result = await r.json();
      Cache.add(pageURL, result);
      return result;
    } catch (error: any) {
      console.error(error.message);
      throw error;
    }
  }{
  { import = "lazyvim.plugins.extras.linting.eslint" },
  { import = "lazyvim.plugins.extras.formatting.prettier" },
}

export type ShallowLocations = {
  count: number;
  next: string | undefined;
  previous: string | undefined;
  results: Location[];
};

export type Location = {
  name: string;
  url: string;
};
