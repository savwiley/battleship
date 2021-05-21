import gameboard from "../facts/gameboard.js";

test("board test up/down", () => {
  expect(gameboard("Carrier", "placeV", "A4")).toEqual({
    name: "Carrier",
    length: 5,
    coords: ["A4", "A5", "A6", "A7", "A8"],
    targets: [1, 2, 3, 4, 5],
    sunk: false,
  });
});

test("board test left/right", () => {
  expect(gameboard("Carrier", "placeH", "D1")).toEqual({
    name: "Carrier",
    length: 5,
    coords: ["D1", "E1", "F1", "G1", "H1"],
    targets: [1, 2, 3, 4, 5],
    sunk: false,
  });
});

test.only("off grid test", () => {
  expect(gameboard("human", "Carrier", "placeH", "J9")).toEqual({
    name: "Carrier",
    length: 5,
    coords: [],
    targets: [1, 2, 3, 4, 5],
    sunk: false,
  });
});
