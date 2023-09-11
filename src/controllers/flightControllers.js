import { flightService } from "../services/flightServices.js";

async function createFlight(req, res){
    try {
        const { origin, destination, date } = req.body;

        if (!origin || !destination || !date) return res.sendStatus(400);

        flightService.createFlight({ origin, destination, date })
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function getFlight(req, res){
    try {
        const flightsData = req.body;

        flightService.getFlight(flightsData);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const flightController = { createFlight, getFlight };