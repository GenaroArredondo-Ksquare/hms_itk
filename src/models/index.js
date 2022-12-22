"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startSequelize = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const startSequelize = ({ dbName, dbPassword, dbHostname, dbUsername, dbPort }) => {
    exports.sequelize = new sequelize_1.Sequelize(dbName, dbUsername, dbPassword, {
        dialect: 'postgres',
        host: dbHostname,
        port: +(dbPort || process.env.PORT)
    });
    /* for(const initModel of models) {
        initModel(sequelize);
    } */
    return exports.sequelize;
};
exports.startSequelize = startSequelize;
