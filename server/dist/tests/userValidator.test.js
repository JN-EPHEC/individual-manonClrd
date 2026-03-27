import { validateUserRegistration } from "../utils/userValidator";
describe("validateUserRegistration", () => {
    test("cas valide standard", () => {
        expect(validateUserRegistration(25, "user", "test@mail.com")).toBe(true);
    });
    test("mineur refusé", () => {
        expect(validateUserRegistration(17, "user", "test@mail.com")).toBe(false);
    });
    test("mineur stagiaire accepté", () => {
        expect(validateUserRegistration(17, "stagiaire", "test@mail.com")).toBe(true);
    });
    test("âge > 120 → erreur", () => {
        expect(() => validateUserRegistration(130, "user", "test@mail.com")).toThrow("Âge invalide");
    });
    test("rôle invalide → erreur", () => {
        expect(() => validateUserRegistration(25, "manager", "test@mail.com")).toThrow("Rôle invalide");
    });
    test("email invalide", () => {
        expect(validateUserRegistration(25, "user", "testmail.com")).toBe(false);
    });
    test("âge invalide (NaN)", () => {
        expect(validateUserRegistration(NaN, "user", "test@mail.com")).toBe(false);
    });
    test("limite basse âge = 18", () => {
        expect(validateUserRegistration(18, "user", "test@mail.com")).toBe(true);
    });
    test("limite haute âge = 120", () => {
        expect(validateUserRegistration(120, "admin", "test@mail.com")).toBe(true);
    });
    test("stagiaire mais email invalide", () => {
        expect(validateUserRegistration(17, "stagiaire", "testmailcom")).toBe(false);
    });
});
//# sourceMappingURL=userValidator.test.js.map