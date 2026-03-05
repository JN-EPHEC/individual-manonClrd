/**
 * Calcule le prix d'une livraison en fonction de la distance,
 *      du poids et du mode d'expédition.
 *
 * @remarks
 * Cette fonction suit les règles métier suivantes :
 * 1. Coût de base (selon la distance) :
 *      - De 0 à 50 km inclus : 10€
 *      - De 51 à 500 km inclus : 25€
 *      - Plus de 500 km : 50€
 *      - Erreur : Une distance négative doit lever une exception.
 *
 * 2. Majoration (selon le poids) :
 *      - Moins de 10 kg : Aucune majoration.
 *      - De 10 à 50 kg inclus : Majoration de 50% sur le coût de base.
 *      - Plus de 50 kg : Livraison impossible (lever une exception).
 *      - Erreur : Un poids négatif ou nul doit lever une exception.
 *
 * 3. Option Express :
 *      - Si le type est 'express', le coût total (après majoration poids)
 *            est multiplié par 2.
 *
 * @param {number} distance - La distance en kilomètres (entier positif).
 * @param {number} weight - Le poids du colis en kilogrammes (entier positif).
 * @param {'standard' | 'express'} type - Le mode de livraison souhaité.
 *
 * @returns {number} Le prix final de la livraison.
 *
 * @throws {Error} "Invalid distance" si la distance est négative.
 * @throws {Error} "Invalid weight" si le poids est <= 0 ou > 50.
 *
 * @example
 * // Cas standard
 * calculateShipping(10, 5, 'standard'); // 10 (Base 10 + 0%)
 *
 * @example
 * // Cas avec majoration poids
 * calculateShipping(100, 20, 'standard'); // 37.5 (Base 25 + 50% = 37.5)
 *
 * @example
 * // Cas express
 * calculateShipping(10, 5, 'express'); // 20 ( (10 + 0%) * 2 )
 */
export function calculateShipping(
  distance: number,
  weight: number,
  type: "standard" | "express",
): number {
  // 1. Validation des entrées
  if (distance < 0) {
    throw new Error("Invalid distance");
  }

  if (weight <= 0 || weight > 50) {
    throw new Error("Invalid weight");
  }

  // 2. Calcul du coût de base (selon distance)
  let price = 0;

  if (distance <= 50) {
    price = 10;
  } else if (distance <= 500) {
    price = 25;
  } else {
    price = 50;
  }

  // 3. Application de la majoration (selon poids)
  if (weight >= 10) {
    price = price * 1.5; // +50%
  }

  // 4. Application du multiplicateur (selon type)
  if (type === "express") {
    price = price * 2;
  }

  return price;
}

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
});
