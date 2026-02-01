//exports a Pokeapi Class
// and types for return area JSON objects

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = `${PokeAPI.baseURL}/location-area`;
    try { 
      const r = await fetch(url);
      if (!r.ok) {
        throw new Error(`Response: ${r.status}`);
      }
      if (pageURL === "testing for failure") {
        throw new Error(`Failure works`)
      }
      const result = await r.json();
      return result;
    } catch (error: any) {
      console.error(error.message)
      throw error;
    }

   }

  //async fetchLocation(locationName: string): Promise<Location> {
    // implement this
  //}
}

export type ShallowLocations = {
  count: number,
  next: string,
  previous: any,
  results: Areas[]
};

export type Location = {
  id: number
  name: string
  game_index: number
  encounter_method_rates: string[]
  location: Location
  names: object[]
  pokemon_encounters: object[] 
};

export type Areas = {
  name: string;
  url: string;
}
