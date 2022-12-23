import { database } from "firebase-admin";
import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize } from "sequelize";
import { sequelize } from ".";

export type Role = "patient" | "doctor" | "admin";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare user_id: number;
    declare first_name: string;
    declare last_name: string;
    declare email: string;
    declare password: string;
    declare is_active: boolean;
}

export const initUserModel = (sequelize:Sequelize) => {
    User.init({
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    }, { sequelize })
}