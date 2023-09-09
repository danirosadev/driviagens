import { Router } from "express";
import { cityController } from "../controllers/cityControllers";

const cityRouter = Router();

cityRouter.post("/cities", cityController.createCity)

export default cityRouter;