import express from 'express';
import clientRouter from './routes/clientsRoutes.js';
import chauffeurRouter from './routes/chauffeurRoute.js';
import adminRouter from './routes/adminRoute.js';

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Middleware pour loguer chaque requête
app.use((req, res, next) => {
  console.log(`Requête reçue: ${req.method} ${req.url}`);
  next(); // Passe à la prochaine fonction middleware
});

// Utiliser les routeurs pour gérer les différentes ressources
app.use('/api/clients', clientRouter); // Routes liées aux clients
app.use('/api/chauffeurs', chauffeurRouter); // Routes liées aux chauffeurs
app.use('/api/admins', adminRouter); // Routes liées aux admins

// Route de bienvenue
app.get('/api', (req, res) => {
  console.log('Accès à la route de bienvenue /api');
  res.send('Bienvenue sur l’API de taxigab.');
});

// Exporter l'application Express
export default app;

// Démarrer le serveur sur un port spécifique
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Le serveur fonctionne sur le port ${port}`);
});
