const mapArrToString = require("./mapArrToString");

describe("mapArrToString", () => {
    test("numbers", () => {
        expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
    });

    test("all", () => {
        expect(
            mapArrToString([1, 2, null, undefined, "sdafds", false, 3])
        ).toEqual(["1", "2", "3"]);
    });
    test("empty", () => {
        expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
    });
    test("!numbers", () => {
        expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
    });
});
