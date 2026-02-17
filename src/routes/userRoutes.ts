import { Router } from 'express';
import User from '../models/User';

const router = Router();

// GET /api/users → renvoie tous les utilisateurs
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/users → ajoute un utilisateur
router.post('/', async (req, res) => {
    try {
        const user = await User.create({
            nom: req.body.nom,
            prenom: req.body.prenom
        });

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
