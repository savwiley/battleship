import gameboard from "../facts/gameboard.js";

test("board test up/down", () => {
  expect(gameboard("Carrier", "place", "A1")).toEqual(
    {
      "name": "Carrier",
      "length": 5,
      "coords": [ "A1", "A2", "A3", "A4", "A5" ],
      "targets": [ 1, 2, 3, 4, 5 ],
      "sunk": false
    }
  )
});

test.only("board test left/right", () => {
  expect(gameboard("Carrier", "place", "A1")).toEqual(
    {
      "name": "Carrier",
      "length": 5,
      "coords": [ "A1", "B1", "C1", "D1", "E1" ],
      "targets": [ 1, 2, 3, 4, 5 ],
      "sunk": false
    }
  )
});