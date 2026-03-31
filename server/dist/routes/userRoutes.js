import { Router } from 'express';
import * as userController from "../controllers/userController.js";
import { checkIdParam } from "../middlewares/checkIdParam.js";
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
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crée un nouvel utilisateur
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               prenom:
 *                 type: string
 *               nom:
 *                 type: string
 *     responses:
 *       201:
 *         description: Utilisateur créé
 *       400:
 *         description: Champs manquants
 */
// récupère tous les utilisateurs
router.get("/", userController.getAllUsers);
// ajoute utilisateur avec POST
router.post('/', userController.createUser);
// supprime utilisateur
router.delete("/:id", checkIdParam, userController.deleteUser);
export default router;
//# sourceMappingURL=userRoutes.js.map