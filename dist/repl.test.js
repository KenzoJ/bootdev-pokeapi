import { describe, expect, test } from "vitest";
import { PokeAPI } from "./pokeapi.js";
/* describe.each([
  {
    input: "location",
    expected: ["0"],
  },
])("Input($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    let answer: string = "0";

    for (const i in expected) {
      expect(answer[i]).toBe(expected[i]);
    }
  });
}); */
async function fetchLocationsTest(pageURL) {
    let locations = new PokeAPI();
    return locations.fetchLocations(pageURL);
}
describe('PokeAPI tests', () => {
    test('PokeAPI fetches location JSON', async () => {
        await expect(fetchLocationsTest()).resolves.toEqual([
            {
                "name": "canalave-city-area",
                "url": "https://pokeapi.co/api/v2/location-area/1/",
            },
            {
                "name": "eterna-city-area",
                "url": "https://pokeapi.co/api/v2/location-area/2/",
            },
            {
                "name": "pastoria-city-area",
                "url": "https://pokeapi.co/api/v2/location-area/3/",
            },
            {
                "name": "sunyshore-city-area",
                "url": "https://pokeapi.co/api/v2/location-area/4/",
            },
            {
                "name": "sinnoh-pokemon-league-area",
                "url": "https://pokeapi.co/api/v2/location-area/5/",
            },
            {
                "name": "oreburgh-mine-1f",
                "url": "https://pokeapi.co/api/v2/location-area/6/",
            },
            {
                "name": "oreburgh-mine-b1f",
                "url": "https://pokeapi.co/api/v2/location-area/7/",
            },
            {
                "name": "valley-windworks-area",
                "url": "https://pokeapi.co/api/v2/location-area/8/",
            },
            {
                "name": "eterna-forest-area",
                "url": "https://pokeapi.co/api/v2/location-area/9/",
            },
            {
                "name": "fuego-ironworks-area",
                "url": "https://pokeapi.co/api/v2/location-area/10/",
            },
            {
                "name": "mt-coronet-1f-route-207",
                "url": "https://pokeapi.co/api/v2/location-area/11/",
            },
            {
                "name": "mt-coronet-2f",
                "url": "https://pokeapi.co/api/v2/location-area/12/",
            },
            {
                "name": "mt-coronet-3f",
                "url": "https://pokeapi.co/api/v2/location-area/13/",
            },
            {
                "name": "mt-coronet-exterior-snowfall",
                "url": "https://pokeapi.co/api/v2/location-area/14/",
            },
            {
                "name": "mt-coronet-exterior-blizzard",
                "url": "https://pokeapi.co/api/v2/location-area/15/",
            },
            {
                "name": "mt-coronet-4f",
                "url": "https://pokeapi.co/api/v2/location-area/16/",
            },
            {
                "name": "mt-coronet-4f-small-room",
                "url": "https://pokeapi.co/api/v2/location-area/17/",
            },
            {
                "name": "mt-coronet-5f",
                "url": "https://pokeapi.co/api/v2/location-area/18/",
            },
            {
                "name": "mt-coronet-6f",
                "url": "https://pokeapi.co/api/v2/location-area/19/",
            },
            {
                "name": "mt-coronet-1f-from-exterior",
                "url": "https://pokeapi.co/api/v2/location-area/20/",
            },
        ]);
    });
    test('PokeAPI fails to fetch location JSON', async () => {
        await expect(fetchLocationsTest("testing for failure"))
            .rejects
            .toThrow();
    });
});
