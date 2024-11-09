import express from 'express';
import { 
    inscriptionClient, 
    clientConnexion, 
    demanderUneCourse, 
    consulterDetailCourse, 
    consulterHistoriqueCoursesClient, 
    annulerCourse, 
    consulterProfilClient, 
    mettreAjourProfil, 
    consulterEvaluationsChauffeur, 
    evaluerCourse, 
    ajouterPaiement, 
    consulterNotificationsClients, 
    motDePasseOublier, 
    reinitialiserMotDePasse 
} from '../controllers/clientController.js';

const clientRouter = express.Router();

// Inscription d'un client
clientRouter.post('/inscription', inscriptionClient);

// Connexion d'un client
clientRouter.post('/connexion', clientConnexion);

// Demande d'une course
clientRouter.post('/course/demander', demanderUneCourse);

// Détails d'une course spécifique
clientRouter.get('/course/:id', consulterDetailCourse);

// Récupération de l'historique des courses pour un client
clientRouter.get('/historique-courses', consulterHistoriqueCoursesClient);

// Annulation d'une course
clientRouter.delete('/course/:id', annulerCourse);

// Récupération du profil
clientRouter.get('/profil', consulterProfilClient);

// Mise à jour du profil
clientRouter.put('/profil', mettreAjourProfil);

// Récupération des évaluations d'un chauffeur
clientRouter.get('/chauffeur/:Id/evaluations', consulterEvaluationsChauffeur);

// Évaluation d'une course
clientRouter.post('/course/:id/evaluer', evaluerCourse);

// Ajout d'un paiement
clientRouter.post('/paiement', ajouterPaiement);

// Récupération des notifications pour un client
clientRouter.get('/notifications', consulterNotificationsClients);

// Mot de passe oublié
clientRouter.post('/mot-de-passe-oublie', motDePasseOublier);

// Réinitialisation du mot de passe
clientRouter.put('/reinitialiser-mot-de-passe', reinitialiserMotDePasse);

export default clientRouter;
