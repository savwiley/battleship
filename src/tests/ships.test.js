import Ships from "../facts/ships.js";

test("testing ships", () => {
  expect(Ships("sub", 3)).toEqual({ 
    ship: "sub",
    length: 3,
    hits: 3,
    sunk: true
  })
})