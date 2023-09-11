import cors from "cors";
import express from "express";
import passengerRouter from "./routers/passengerRouters.js";
import cityRouter from "./routers/cityRouters.js";
import flightRouter from "./routers/flightsRouters.js";
import travelRouter from "./routers/travelsRouters.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use([passengerRouter, cityRouter, flightRouter, travelRouter])

app.listen(process.env.PORT, () => {
    console.log("Servidor rodando na porta " + process.env.PORT)
})