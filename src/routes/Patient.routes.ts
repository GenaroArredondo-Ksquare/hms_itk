import { Router } from "express";
import repository from "../repository";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { isAuthorized } from "../middlewares/isAuthorized";
import * as admin from 'firebase-admin';

const router = Router();

const { patientRepo } = repository;

router.get('/:id', isAuthenticated, isAuthorized({
    roles: ['admin'],
    allowSamerUser: true
}), patientRepo.getPatientById);

//router.delete('/:id', async (req:Request, res:Response) => {set is_active to false})
//To do try catch an error if the user tries to create an user with an admin role

export default router;