import express from "express";
import GatewayValidator from "../validator/index";
import Middleware from "../../middleware/index";
import GatewayController from "../controller/index"

const gatewayrouter = express.Router();

gatewayrouter.post(
  "/crearPedido",
  GatewayValidator.checkCreatePedido(),
  Middleware.handleValidationError,
  GatewayController.create
);

gatewayrouter.get(
  "/consultarPedido",
  GatewayValidator.checkReadGateway(),
  Middleware.handleValidationError,
  GatewayController.readAll
);

gatewayrouter.get(
  "/consultarPedido/:id",
  GatewayValidator.checkIdParam(),
  Middleware.handleValidationError,
  GatewayController.readById
);

gatewayrouter.put(
  "/modificarPedido/:id",
  GatewayValidator.checkIdParam(),
  Middleware.handleValidationError,
  GatewayController.update
);

gatewayrouter.delete(
  "/cancelarPedido/:id",
  GatewayValidator.checkIdParam(),
  Middleware.handleValidationError,
  GatewayController.delete
);


export default gatewayrouter; 