import {Sequelize} from 'sequelize';

const dbconnection = new Sequelize('app', '', '', {
    storage: "/usr/app/db/database.sqlite",
    dialect:"sqlite",
    logging: false, 
})

export default dbconnection;