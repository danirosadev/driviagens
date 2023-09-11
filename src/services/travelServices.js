import { travelRepository } from "../repositories/travelRepositories.js";

async function createTravel ({ passengerId, flightId }) {

    await travelRepository.createTravel

}

export const travelService = { createTravel };