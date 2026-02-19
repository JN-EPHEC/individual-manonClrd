import type {Request , Response} from 'express'

export function errorHandler (err: any, req: Request, res: Response) {
    console.error(err);

    const status = 500;
    const message = err.message || "Erreur niveau serveur."

    //next()
    return res.status(status).json(message)
}



