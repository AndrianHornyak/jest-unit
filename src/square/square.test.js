const square = require("./square");

describe("Square", () => {
    let mockValue = "";
    beforeEach(() => {});
    beforeAll(() => {});
    test("2", () => {
        // expect(square(2)).toBe(4);
        // expect(square(2)).toBeLessThan(5);
        // expect(square(2)).toBeGreaterThan(3);
        const spyMathPow = jest.spyOn(Math, "pow");
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    });
    test("1", () => {
        const spyMathPow = jest.spyOn(Math, "pow");
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    afterAll(() => {});
});
