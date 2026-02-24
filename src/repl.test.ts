import { startREPL } from "./repl.js";
import { describe, expect, test} from "vitest";
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

async function fetchLocationsTest(pageURL?: string) {
  let locations = new PokeAPI();
  return locations.fetchLocations(pageURL);
}


  describe('PokeAPI tests', () => {
    test('PokeAPI fetches location JSON', async () => {
      const data = await fetchLocationsTest();
      expect(data.count).toBeGreaterThan(10)
    });
})

