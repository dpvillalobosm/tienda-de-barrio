import express  from "express";
import dbconnection from "./config/database.config";
import pedidosrouter from "./pedidos/routes";


dbconnection.sync().then(() => {
  console.log("Conexión correcta a BD SQLite");
});

const app = express();
const port = 9003;

app.use(express.json());

app.use('/pedidos/api', pedidosrouter)

app.listen(process.env.PORT || port, () => {
  console.log("El servidor está corriendo en el puerto: " + port);
});