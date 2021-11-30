import express  from "express";
import dbconnection from "./config/database.config";
import gatewayrouter from "./gateway/routes";


dbconnection.sync().then(() => {
  console.log("conectado a la base de datos");
});

const app = express();
const port = 9001;

app.use(express.json());

app.use('/gateway/api', gatewayrouter)

app.listen(process.env.PORT || port, () => {
  console.log("Server is running on port " + port);
});