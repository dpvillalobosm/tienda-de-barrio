import { DataTypes, Model } from 'sequelize';
import dbconnection from '../../config/database.config';

interface ClienteAttributes {
    id: string,
    name: string,
    celnum: string,
    direccion: string,
}


export class ClienteInstance extends Model<ClienteAttributes> {}

ClienteInstance.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        celnum: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize: dbconnection,
        tableName: 'clientes',
    }
);
    