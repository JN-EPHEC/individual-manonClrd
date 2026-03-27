export function validateUserRegistration(age, role, email) {
    // Validation âge
    if (typeof age !== "number" || isNaN(age)) {
        return false;
    }
    if (age > 120) {
        throw new Error("Âge invalide");
    }
    // Validation rôle
    const validRoles = ["admin", "user", "stagiaire"];
    if (!validRoles.includes(role)) {
        throw new Error("Rôle invalide");
    }
    // Validation email
    if (!email.includes("@") || !email.includes(".")) {
        return false;
    }
    // Règle métier âge
    if (age < 18) {
        return role === "stagiaire";
    }
    return true;
}
//# sourceMappingURL=userValidator.js.map