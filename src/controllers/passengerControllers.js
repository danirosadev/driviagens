import { userService } from "../services/passengerServices.js";

async function createPassenger(req, res){
    try {
        const { firstName, lastName } = req.body;

        if (!firstName || !lastName) return res.sendStatus(400);

        userService.createPassenger({ firstName, lastName });
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const passengerController = { createPassenger }