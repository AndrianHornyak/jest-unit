const delay = require("./delay.js");

describe("Delay", () => {
    test("Correct value", async () => {
        const sum = await delay(() => 5 + 5);

        expect(sum).toBe(10);
    });
});
