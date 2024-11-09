import express from 'express';
import { 
    chauffeurConnexion, 
    consulterProfilChauffeur, 
    consulterEvaluations, 
    consulterListeCourse, 
    accepterCourse, 
    courseIndisponible, 
    envoyerPosition, 
    consulterHistoriqueCourses, 
    consulterNotificationsChauffeur 
} from '../controllers/chauffeurController.js';

const chauffeurRouter = express.Router();

chauffeurRouter.post('/connexion', chauffeurConnexion);

// Consulte le profil
chauffeurRouter.get('/profil', consulterProfilChauffeur);

// Liste des évaluations
chauffeurRouter.get('/evaluations',  consulterEvaluations);

// Liste des demandes de course
chauffeurRouter.get('/demandes', consulterListeCourse);

// Acceptation d'une course
chauffeurRouter.put('/course/:id/accepter',  accepterCourse);

// Indisponible pour une course
chauffeurRouter.put('/course/:id/indisponible', courseIndisponible);

// Envoi de localisation
chauffeurRouter.post('/position', envoyerPosition);

// Historique des courses
chauffeurRouter.get('/historique-courses',  consulterHistoriqueCourses);

// Récupération des notifications pour un chauffeur
chauffeurRouter.get('/notifications',  consulterNotificationsChauffeur);

export default chauffeurRouter;
