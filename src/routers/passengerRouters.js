import { Router } from "express";
import { passengerController } from "../controllers/passengerControllers.js";

const passengerRouter = Router();

passengerRouter.post("/passengers", passengerController.createPassenger);
passengerRouter.get("/passengers/travels")

export default passengerRouter;