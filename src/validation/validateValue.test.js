const validateValue = require("./validateValue");

describe("Validation value", () => {
    test("good value", () => {
        expect(validateValue(50)).toBe(true);
    });
    test("good === min", () => {
        expect(validateValue(0)).toBe(true);
    });
    test("good === max", () => {
        expect(validateValue(100)).toBe(true);
    });
    test("wrong < min", () => {
        expect(validateValue(-1)).toBe(false);
    });
    test("wrong > max", () => {
        expect(validateValue(101)).toBe(false);
    });
});
