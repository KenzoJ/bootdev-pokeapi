import { describe, expect, test } from "vitest";
import { PokeAPI } from "./pokeapi.js";

async function fetchLocationsTest(pageURL?: string) {
  let locations = new PokeAPI(5000);
  return locations.fetchLocations(pageURL);
}

async function fetchLocationTest(locationUrl: string) {
  let location = new PokeAPI(5000);
  return location.fetchLocation(locationUrl);
}

describe("PokeAPI tests", () => {
  test("PokeAPI fetches location JSON", async () => {
    const data = await fetchLocationsTest();
    expect(data.count).toBeGreaterThan(10);
  });
});


describe("Specific Location tests", () => {
  test("PokeAPI fetches one location JSON", async () => {
    const data = await fetchLocationTest('eterna-city-area');
    expect(data).toBeTypeOf('object')
  });
});

describe("Catch Error Location tests", () => {
  test("PokeAPI fetches one location JSON", async () => {
    await expect(fetchLocationTest('eterna-city-are')).rejects.toThrowError()
  });
});

describe("API Location tests", () => {
  test("What does api find", async () => {
    const data = await fetchLocationTest('eterna-city-area');
    //console.log(JSON.stringify(data.pokemon_encounters, null, 2));
    let answer: string = data.pokemon_encounters[0].pokemon.name
    expect(answer).toBe('psyduck')
  });
});
