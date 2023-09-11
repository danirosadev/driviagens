import { travelService } from "../services/travelServices.js";

async function createTravel(req, res){
    try {
        const { passengerId, flightId } = req.body;

        if (!passengerId || !flightId) return res.sendStatus(400);

        travelService.createTravel({ passengerId, flightId })
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const travelController = {createTravel};
