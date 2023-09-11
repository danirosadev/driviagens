import db from "../config/database.connection.js";

async function createTravel ({ passengerId, flightId }) {

    const result = await db.query(
        `INSERT INTO users (passengerId, flightId) VALUES ($1, $2);`,
        [passengerId, flightId]
    );

    return result

}

export const travelRepository = { createTravel };