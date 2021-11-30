import {Sequelize} from 'Sequelize';

const dbconnection = new Sequelize('app', '', '', {
    storage: "../../database.sqlite",
    dialect:"sqlite",
    logging: false, 
})

export default dbconnection;