import { DataTypes, Model } from 'Sequelize';
import dbconnection from '../../config/database.config';

interface ProductosAttributes {
    id: string,
    titulo: string,
    descripcion: string,
    costoUnitario: number,
    unidad: number,
    tipoUnidad: string
}


export class ProductoInstance extends Model<ProductosAttributes> {}

ProductoInstance.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        costoUnitario: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        unidad : {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        tipoUnidad: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize: dbconnection,
        tableName: 'productos',
    }
);
    