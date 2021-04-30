import checkCoord from "../facts/checkCoord.js";

//checks for e.targets
test("getting a ship", () => {
  expect(checkCoord("Carrier")).toEqual(
    [1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2]
  )
})


test.only("check coord", () => {
  expect(checkCoord("human", "A1")).toBe(false)
})