import Ships from "../facts/ships.js";

test("testing ships 1", () => {
  expect(Ships("Carrier", 3)).toEqual(
  {
    "name": "Carrier",
    "length": 5,
    "coords": [],
    "targets": [ 1, 2, 4, 5 ],
    "hits": 1,
    "sunk": false
  })
});