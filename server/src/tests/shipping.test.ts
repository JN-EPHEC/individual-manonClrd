/*import { calculateShipping } from ""


const distanceCases = [
  // [dist, poids, type, attendu, description]
  [0, 5, "standard", 10, "Distance 0 km"],
  [1, 5, "standard", 10, "Distance 1 km"],
  [50, 5, "standard", 10, "Distance 50 km"],
  [51, 5, "standard", 25, "Distance 51 km"],
  [80, 5, "standard", 25, "Distance 80 km"],
  [81, 5, "standard", 25, "Distance 81 km"],
  [500, 5, "standard", 25, "Distance 500 km"],
  [501, 5, "standard", 50, "Distance 501 km"],

  // Poids
  [10, 10, "standard", 15, "Poids 10 kg"],
  [11, 11, "standard", 15, "Poids 11 kg"],
  [20, 20, "standard", 15, "Poids 20 kg"],
  [21, 21, "standard", 15, "Poids 21 kg"],

  // Express
  [10, 5, "express", 20, "Express sans majoration"],
  [100, 20, "express", 75, "Express avec majoration"],

  // Erreurs
  [-1, 5, "standard", "Error", "Invalid distance"],
  [10, 0, "standard", "Error", "Invalid weight"],
  [10, 51, "standard", "Error", "Invalid weight"],
];  



describe("Shipping Calculator - Tests Fonctionnels", () => {
  test.each(distanceCases)(
    "Distance %d, Poids %d, Type %s → %s (%s)",
    (distance, weight, type, expected, description) => {
      if (expected === "Error") {
        expect(() => calculateShipping(distance, weight, type)).toThrow();
      } else {
        expect(calculateShipping(distance, weight, type)).toBe(expected);
      }
    }
  );
});*/