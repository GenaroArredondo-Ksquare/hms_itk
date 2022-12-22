import { DataTypes, Model, InferCreationAttributes, CreationOptional } from 'sequelize';
import { sequelize } from '.';

export class Patient extends Model<InferCreationAttributes<Patient>> {
    declare patient_id: CreationOptional<number>;
    declare user_id: string;
    declare height: number;
    declare weight: number;
    declare deleted_at?: Date;

    getId():number {
        return this.patient_id;
    }
}

Patient.init({
    patient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.STRING
    },
    height: {
        type: DataTypes.NUMBER
    },
    weight: {
        type: DataTypes.NUMBER
    },
    deleted_at: {
        type: DataTypes.DATE,
    },
}, {
    sequelize,
    paranoid: true,
    deletedAt: 'deleted_at'
});