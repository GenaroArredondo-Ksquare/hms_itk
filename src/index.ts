import dotenv from 'dotenv';
dotenv.config();
import { startSequelize } from './models';
import * as admin from 'firebase-admin';
import app from './app';
import envs from './models/configDBs';

const PORT = <string>process.env.PORT;
const DB_PASS = <string>process.env.DB_PASS;
const DB_USER = <string>process.env.DB_USER;
const DB_NAME = <string>process.env.DB_NAME;
const DB_HOSTNAME = <string>process.env.DB_HOSTNAME;

admin.initializeApp();

const envRunning = process.env.ENVIRONMENT === 'hospital' ? envs.test : envs.dev;

app.listen(PORT, async () => {
    try {
        const sequelize = startSequelize({
            dbName: envRunning.database,
            dbPassword: envRunning.password,
            dbHostname: envRunning.host,
            dbUsername: envRunning.username
        });
        await sequelize.sync({ force: process.env.ENVIRONMENT === 'hospital'});
        console.info('DB and Express server is up and running!');
        console.info(process.env.ENVIRONMENT);
    } catch (error) {
        console.log('ERROR:', error);
        process.abort();
    }
})