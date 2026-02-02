export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
      try { 
        const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
        const r = await fetch(url);
        if (!r.ok) {
          throw new Error(`Response: ${r.status}`);
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
  count: number
  next: string | undefined;
  previous: string | undefined;
  results: Location[]
};

export type Location = {
  name: string;
  url: string;
};

