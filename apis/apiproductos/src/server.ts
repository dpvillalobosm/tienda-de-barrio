import express  from "express";
import dbconnection from "./config/database.config";
import productorouter from "./productos/routes";

dbconnection.sync().then(() => {
  console.log("Conexión correcta a BD SQLite");
});

const app = express();
const port = 9002;

app.use(express.json());

app.use('/productos/api', productorouter)

app.listen(process.env.PORT || port, () => {
  console.log("El servidor está corriendo en el puerto: " + port);
});