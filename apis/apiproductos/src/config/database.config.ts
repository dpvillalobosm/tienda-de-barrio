import {Sequelize} from 'sequelize';

const dbconnection = new Sequelize('app', '', '', {
    storage: "database.sqlite",
    dialect:"sqlite",
    logging: false, 
})

export default dbconnection;