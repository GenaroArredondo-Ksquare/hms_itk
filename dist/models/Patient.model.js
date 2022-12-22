"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Patient extends sequelize_1.Model {
    getId() {
        return this.patient_id;
    }
}
exports.Patient = Patient;
Patient.init({
    patient_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.STRING
    },
    height: {
        type: sequelize_1.DataTypes.NUMBER
    },
    weight: {
        type: sequelize_1.DataTypes.NUMBER
    },
    deleted_at: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    sequelize: _1.sequelize,
    paranoid: true,
    deletedAt: 'deleted_at'
});
