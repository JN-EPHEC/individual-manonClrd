import { Router } from 'express';
import User from '../models/User';

const router = Router();

// retourne tous les utilisateurs
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ajoute un utilisateur avec POST
router.post('/', async (req, res) => {
    try {
        const { nom, prenom, email } = req.body;

        // Vérification format email
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return res.status(400).json({ error: "Email invalide" });
        }

        const user = await User.create({ nom, prenom, email });
        res.json(user);

    } catch (err: any) {

        // Erreur email déjà existant
        if (err.name === "SequelizeUniqueConstraintError") {
            return res.status(400).json({ error: "Cet email existe déjà" });
        }

        // Erreur format email Sequelize
        if (err.name === "SequelizeValidationError") {
            return res.status(400).json({ error: "Format email incorrect" });
        }

        res.status(500).json({ error: err.message });
    }
});


// supprime un utilisateur
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
