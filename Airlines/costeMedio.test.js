const flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function costeMedio() {
  let costeTotal = 0;
  for (let i = 0; i < 10; i++) {
    costeTotal += flights[i].cost;
  }
  const costeMedioVuelos = costeTotal / 10;
  return costeMedioVuelos;
}

describe("Given the costeMedio function", () => {
  describe("When it receives an array of 3 objects with cost property 300, 400, 500", () => {
    test("Then it should return 400", () => {
      const flights = [{ cost: 300 }, { cost: 400 }, { cost: 500 }];
      const expectedResult = 400;

      const result = costeMedio(flights);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives an array of objects with all cost property 0", () => {
    test("Then it should return 0", () => {
      const flights = [{ cost: 0 }, { cost: 0 }, { cost: 0 }];
      const expectedResult = 0;

      const result = costeMedio(flights);

      expect(result).toBe(expectedResult);
    });
  });
});
