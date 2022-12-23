"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUserModel = exports.User = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
const initUserModel = (sequelize) => {
    User.init({
        user_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true
        },
        first_name: sequelize_1.DataTypes.STRING,
        last_name: sequelize_1.DataTypes.STRING,
        email: sequelize_1.DataTypes.STRING,
        password: sequelize_1.DataTypes.STRING,
        is_active: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: true,
        }
    }, { sequelize });
};
exports.initUserModel = initUserModel;
