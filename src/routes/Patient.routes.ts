import { Router } from "express";
import repository from "../repository";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { isAuthorized } from "../middlewares/isAuthorized";

const router = Router();

const { patientRepo } = repository;

router.get('/:id', isAuthenticated, isAuthorized({
    roles: ['admin'],
    allowSamerUser: true
}), patientRepo.getPatientById);

export default router;