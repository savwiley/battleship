import gameboard from "../facts/gameboard.js";

test("board test 1", () => {
  expect(gameboard("Carrier", "place", "A", "1")).toEqual(
    {
      "name": "Carrier",
      "length": 5,
      "coords": ["A1", "A2", "A3", "A4", "A5" ],
      "targets": [ 1, 2, 3, 4, 5 ],
      "sunk": false
    }
  )
})