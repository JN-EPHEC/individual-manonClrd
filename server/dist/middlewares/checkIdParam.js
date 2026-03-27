export const checkIdParam = (req, res, next) => {
    const id = String(req.params);
    // Vérification de l'ID
    if (!/^\d+$/.test(id)) {
        return res.status(400).json({ error: "ID invalide : un entier est requis" });
    }
    next();
};
//# sourceMappingURL=checkIdParam.js.map