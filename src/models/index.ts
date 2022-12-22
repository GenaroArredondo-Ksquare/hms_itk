import { Sequelize } from 'sequelize';
export let sequelize: Sequelize;

interface StartSequelizeProps {
    dbName: string;
    dbPassword: string;
    dbHostname: string;
    dbUsername: string;
    dbPort?: string;
}

export const startSequelize = ({
    dbName,
    dbPassword,
    dbHostname,
    dbUsername,
    dbPort
}: StartSequelizeProps) => {
    sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
        dialect: 'postgres',
        host: dbHostname,
        port: +(dbPort || <string>process.env.DB_PORT)
    })

    /* for(const initModel of models) {
        initModel(sequelize);
    } */

    return sequelize;
}