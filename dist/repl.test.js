import { describe, expect, test } from "vitest";
describe.each([
    {
        input: "well hello there",
        expected: ["Your command was: well"],
    },
    {
        input: "Hello there",
        expected: ["Your command was: hello"],
    },
    {
        input: "POKEMON was underrated",
        expected: ["Your command was: pokemon"],
    }
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        let actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
