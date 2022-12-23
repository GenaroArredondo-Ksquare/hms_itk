"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const repository_1 = __importDefault(require("../repository"));
const isAuthenticated_1 = require("../middlewares/isAuthenticated");
const isAuthorized_1 = require("../middlewares/isAuthorized");
const router = (0, express_1.Router)();
const { patientRepo } = repository_1.default;
router.get('/:id', isAuthenticated_1.isAuthenticated, (0, isAuthorized_1.isAuthorized)({
    roles: ['admin'],
    allowSamerUser: true
}), patientRepo.getPatientById);
//router.delete('/:id', async (req:Request, res:Response) => {set is_active to false})
//To do try catch an error if the user tries to create an user with an admin role
exports.default = router;
