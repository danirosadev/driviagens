import { Router } from "express";
import { flightController } from "../controllers/flightControllers.js";

const flightRouter = Router();

flightRouter.post("/flights", flightController.createFlight);
flightRouter.get("/flights", flightController.getFlight);

export default flightRouter;