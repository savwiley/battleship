import gameboard from "../facts/gameboard.js";

test("board test 1", () => {
  expect(gameboard("Carrier", "place", "3", "B")).toEqual(
    {
      ship: "Carrier",
      action: "place",
      x: "3",
      y: "B"
    }
  )
})