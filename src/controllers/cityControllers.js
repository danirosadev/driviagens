import { cityService } from "../services/cityServices";

async function createCity (req, res) {
    try {
        const name = req.body;

        if (!name) return res.sendStatus(400);

        cityService.createCity(name);
        res.sendStatus(201);

    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const cityController = { createCity };