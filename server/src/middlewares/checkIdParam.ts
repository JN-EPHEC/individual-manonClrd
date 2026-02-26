import type { Request, Response, NextFunction } from "express";

export const checkIdParam = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    // Vérification de l'ID
    if (!/^\d+$/.test(id)) {
        return res.status(400).json({ error: "ID invalide : un entier est requis" });
    }

    next();
};
