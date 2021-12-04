import express  from "express";
import gatewayrouter from "./gateway/routes";

const app = express();
const port = 9004;

app.use(express.json());

app.use('/api/v1', gatewayrouter)

app.listen(process.env.PORT || port, () => {
  console.log("El servidor está corriendo en el puerto: " + port);
});