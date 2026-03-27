export function errorHandler(err, req, res) {
    console.error(err);
    const status = err.status || 500;
    const message = err.message || "Erreur niveau serveur.";
    //next()
    return res.status(status).json(message);
}
//# sourceMappingURL=errorHandler.js.map