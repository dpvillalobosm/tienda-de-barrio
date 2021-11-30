import { DataTypes, Model } from 'Sequelize';
import dbconnection from '../../config/database.config';

interface PedidoAttributes {
    id: string,
    // user_id: string,
    name: string,
    celnum: string,
    direccion: string,
}


export class PedidoInstance extends Model<PedidoAttributes> {}

PedidoInstance.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        // user_id: {
        //     type: DataTypes.UUIDV4,
        //     references: {
        //         model: 'usuarios',
        //         key: 'id',
        //     }
        // },
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
        tableName: 'pedidos',
    }
);
    