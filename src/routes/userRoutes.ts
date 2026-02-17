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

// DELETE /api/users/:id → supprime un utilisateur
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await User.destroy({ where: { id } });

        if (deleted === 0) {
            return res.status(404).json({ error: "Utilisateur non trouvé" });
        }

        res.json({ message: "Utilisateur supprimé" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
