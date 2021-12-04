import { DataTypes, Model } from 'sequelize';
import dbconnection from '../../config/database.config';

interface PedidoAttributes {
    id: string,
    idCliente: string,
    idProducto: string
}


export class PedidoInstance extends Model<PedidoAttributes> {}

PedidoInstance.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        idCliente: {
            type: DataTypes.UUIDV4,
            allowNull: false,
        },
        idProducto: {
            type: DataTypes.UUIDV4,
            allowNull: false,
        },
    },
    {
        sequelize: dbconnection,
        tableName: 'pedidos',
    }
);
    