import express  from "express";
import dbconnection from "./config/database.config";
import clienterouter from "./productos/routes";


dbconnection.sync().then(() => {
  console.log("conectado a la base de datos");
});

const app = express();
const port = 9002;

app.use(express.json());

app.use('/productos/api', clienterouter)

app.listen(process.env.PORT || port, () => {
  console.log("Server is running on port " + port);
});