import { Router, Request, Response } from 'express';
import * as admin from 'firebase-admin';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { isAuthorized } from '../middlewares/isAuthorized';
import { createUser, getAllUsers, readUser } from '../firebase';

export const UserRouter = Router();

UserRouter.get('/', isAuthenticated, isAuthorized({roles:['admin'], allowSamerUser: true}), async (req:Request, res:Response) => {
    try {
        const listUsers = await getAllUsers();

        res.status(200).send({listUsers});
    }
    catch (error) {
        res.status(400).send({error: "Couldn't retreive Users list"})
    }
})

UserRouter.post('/signup/patient', async (req:Request, res:Response) => {
    const { displayName, email, password } = req.body;

    if(!displayName || !email || !password) {
        return res.status(400).send({error: 'Missing Info for the Patient signup'})
    }

    try {
        const newPatientId = await createUser(displayName, email, password, 'patient');

        res.status(201).send({
            id: newPatientId
        })
    } catch (error) {
        res.status(500).send({
            error: "Something went wrong"
        })
    }
})

UserRouter.post('/signup/doctor', isAuthenticated, isAuthorized({roles: ['admin'], allowSamerUser: false}), async (req:Request, res:Response) => {
    const { displayName, email, password } = req.body;

    if (!displayName || !email || !password) {
        return res.status(400).send({error: 'Missing information'})
    }

    try {
        const newDoctorId = await createUser(displayName, email, password, 'doctor');

        res.status(201).send({
            id: newDoctorId
        })
    } catch (error) {
        res.status(500).send({
            error: "Something went wrong"
        })
    }
})

UserRouter.get('/:userId', isAuthenticated, isAuthorized({roles: ['admin'], allowSamerUser: true}), async (req:Request, res:Response) => {
    const id: string = req.params['userId'];

    if(+id <= 0) {
        return res.status(400).send({
            error: 'Invalid id'
        })
    }

    try {
        const fetchedUser = await readUser(id);

        res.status(200).send({fetchedUser})
    } catch (error) {
        res.status(400).send({error: "Couldn't retreive user"});
    }
})