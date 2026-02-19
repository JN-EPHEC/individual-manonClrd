import express from 'express';
import type {Request, Response} from 'express';
import { requestLogger } from'./middlewares/logger';
import userRouter from './routes/userRoutes';
import sequelize from './config/database';
import './models/User';  //charge mon model 
import { errorHandler } from './middlewares/errorHandler';
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import cors from 'cors';



const app = express();
const port = 3000;

app.use(cors()); // Autorise tout le monde (acceptable uniquement en dev)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.use(express.static('public'));  //public = tout ce qui est visible depuis le navigateur
app.use(requestLogger);
app.use('/api/users', userRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Bienvenue sur mon serveur API');
});


// dit bonjour 
function greet(name: string): string {
    return `Hello, ${name}!`;                    
}
let message = greet("Manon");
console.log(message);

interface Etudiant {
    id: number;                         
    nom: string;
    prenom: string;
}

const etudiants: Etudiant[] = [
    {id: 1, nom: "Dupont", prenom: "Jean"},
    {id: 2, nom: "Martin", prenom: "Sophie"},
    {id: 3, nom: "Doe", prenom: "John"}
];

app.get('/api/data', (req: Request, res: Response) => {
    res.json(etudiants);
});

app.get('/api/hello/:name', (req: Request, res: Response) => {
    const name = req.params.name;

    const response = {
        message: `Bonjour ${name}`,
        timestamp: new Date().toISOString()
    };
    res.json(response);
});

// erreur générale
app.use(errorHandler);

//connexion et synchro de la DB
async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Connexion OK');

        await sequelize.sync({ alter: true });
        console.log('DB synchronisée');                                                

        app.listen(port, () => {                                                       
            console.log(`Serveur lancé sur http://localhost:${port}`);
        });

    } catch (error) {
        console.error('Erreur lors du démarrage :', error);
    }
    console.log(await sequelize.getQueryInterface().showAllTables());

}

startServer();
    