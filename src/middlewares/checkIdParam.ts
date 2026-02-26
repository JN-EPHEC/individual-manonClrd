import { Request, Response, NextFunction } from "express";

export const checkIdParam = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    // Vérifie que l'ID est un entier positif
    if (!/^\d+$/.test(id)) {
        return res.status(400).json({ error: "ID invalide : un entier est requis" });
    }

    next();
};
