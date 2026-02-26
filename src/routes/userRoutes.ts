import { Router } from 'express';
import User from '../models/User';
import * as userController from "../controllers/userController";


const router = Router();

// retourne tous les utilisateurs

/**
 * @swagger
 * /api/users:
 *  get:
 *      summary: Récupère la liste des utilisateurs
 *      tags: [Users]
 *      responses:
 *          200:
 *             description: Succès
 */

// récupère tous les utilisateurs
router.get("/", userController.getAllUsers);

// ajoute utilisateur avec POST
router.post('/', userController.createUser);


// supprime utilisateur
router.delete('/:id', userController.deleteUser);

export default router;
