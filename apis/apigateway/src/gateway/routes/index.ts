import express from "express";
import GatewayValidator from "../validator/index";
import Middleware from "../../middleware/index";
import GatewayController from "../controller/index"

const gatewayrouter = express.Router();

gatewayrouter.post(
  "/create",
  GatewayValidator.checkCreateGateway(),
  Middleware.handleValidationError,
  GatewayController.create
);

gatewayrouter.get(
  "/read",
  GatewayValidator.checkReadGateway(),
  Middleware.handleValidationError,
  GatewayController.readAll
);

gatewayrouter.get(
  "/read/:id",
  GatewayValidator.checkIdParam(),
  Middleware.handleValidationError,
  GatewayController.readById
);

gatewayrouter.put(
  "/update/:id",
  GatewayValidator.checkIdParam(),
  Middleware.handleValidationError,
  GatewayController.update
);

gatewayrouter.delete(
  "/delete/:id",
  GatewayValidator.checkIdParam(),
  Middleware.handleValidationError,
  GatewayController.delete
);


export default gatewayrouter; 