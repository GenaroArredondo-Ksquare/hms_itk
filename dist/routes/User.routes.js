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
exports.UserRouter = void 0;
const express_1 = require("express");
const isAuthenticated_1 = require("../middlewares/isAuthenticated");
const isAuthorized_1 = require("../middlewares/isAuthorized");
const firebase_1 = require("../firebase");
exports.UserRouter = (0, express_1.Router)();
exports.UserRouter.get('/', isAuthenticated_1.isAuthenticated, (0, isAuthorized_1.isAuthorized)({ roles: ['admin'], allowSamerUser: true }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listUsers = yield (0, firebase_1.getAllUsers)();
        res.status(200).send({ listUsers });
    }
    catch (error) {
        res.status(400).send({ error: "Couldn't retreive Users list" });
    }
}));
exports.UserRouter.post('/signup/patient', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { displayName, email, password } = req.body;
    if (!displayName || !email || !password) {
        return res.status(400).send({ error: 'Missing Info for the Patient signup' });
    }
    try {
        const newPatientId = yield (0, firebase_1.createUser)(displayName, email, password, 'patient');
        res.status(201).send({
            id: newPatientId
        });
    }
    catch (error) {
        res.status(500).send({
            error: "Something went wrong"
        });
    }
}));
exports.UserRouter.post('/signup/doctor', isAuthenticated_1.isAuthenticated, (0, isAuthorized_1.isAuthorized)({ roles: ['admin'], allowSamerUser: false }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { displayName, email, password } = req.body;
    if (!displayName || !email || !password) {
        return res.status(400).send({ error: 'Missing information' });
    }
    try {
        const newDoctorId = yield (0, firebase_1.createUser)(displayName, email, password, 'doctor');
        res.status(201).send({
            id: newDoctorId
        });
    }
    catch (error) {
        res.status(500).send({
            error: "Something went wrong"
        });
    }
}));
exports.UserRouter.get('/:userId', isAuthenticated_1.isAuthenticated, (0, isAuthorized_1.isAuthorized)({ roles: ['admin'], allowSamerUser: true }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['userId'];
    if (+id <= 0) {
        return res.status(400).send({
            error: 'Invalid id'
        });
    }
    try {
        const fetchedUser = yield (0, firebase_1.readUser)(id);
        res.status(200).send({ fetchedUser });
    }
    catch (error) {
        res.status(400).send({ error: "Couldn't retreive user" });
    }
}));
