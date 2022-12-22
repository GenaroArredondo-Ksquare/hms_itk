import { Request, Response } from "express";
import { Patient } from "../models/Patient.model";

const patientRepo = {
    listPatients : async () => {
        const res = await Patient.findAll();

        return res;
    },

    getPatientById: async (id:number) => {
        try {
            const foundPatient = await Patient.findByPk(id);
            return foundPatient;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}

export default patientRepo;