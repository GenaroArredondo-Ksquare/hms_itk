"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Patient_model_1 = require("../models/Patient.model");
const patientRepo = {
    listPatients: () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield Patient_model_1.Patient.findAll();
        return res;
    }),
    getPatientById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const foundPatient = yield Patient_model_1.Patient.findByPk(id);
            return foundPatient;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    })
};
exports.default = patientRepo;
