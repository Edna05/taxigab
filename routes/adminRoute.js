import express from 'express';
import { 
    adminConnexion, 
    consulterListeChauffeurs, 
    consulterListeTaxis, 
    detailTaxiById, 
    ajouterTaxi, 
    desactiverTaxi, 
    mettreAjourTaxi, 
    creerNotification 
} from '../controllers/adminController.js';

const adminRouter = express.Router();

// Connexion d'un admin
adminRouter.post('/connexion', adminConnexion);

// Gestion des chauffeurs
adminRouter.get('/chauffeurs', consulterListeChauffeurs);

// Récupération des taxis
adminRouter.get('/taxis', consulterListeTaxis);

// Détails d'un taxi
adminRouter.get('/taxi/:id', detailTaxiById);

// Ajout d'un taxi
adminRouter.post('/taxi',  ajouterTaxi);

// Désactivation d'un taxi
adminRouter.put('/taxi/:id/desactiver',  desactiverTaxi);

// Mise à jour d'un taxi
adminRouter.put('/taxi/:id', mettreAjourTaxi);

// Création d'une notification
adminRouter.post('/notification', creerNotification);

export default adminRouter;
