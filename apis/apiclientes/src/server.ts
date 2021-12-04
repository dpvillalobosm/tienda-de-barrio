import express  from "express";
import dbconnection from "./config/database.config";
import clienterouter from "./cliente/routes";


dbconnection.sync().then(() => {
  console.log("Conexión correcta a BD SQLite");
});

const app = express();
const port = 9001;

app.use(express.json());

app.use('/clientes/api', clienterouter)

app.listen(process.env.PORT || port, () => {
  console.log("El servidor está corriendo en el puerto: " + port);
});