import { Router } from "express";
import { cityController } from "../controllers/cityControllers.js";

const cityRouter = Router();

cityRouter.post("/cities", cityController.createCity)

export default cityRouter;