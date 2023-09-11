import db from "../config/database.connection.js";

async function createFlight ({ origin, destination, date }) {

    const result = await db.query(
        `INSERT INTO users (origin, destination, date) VALUES ($1, $2, $3);`,
        [origin, destination, date]
    );

    return result

}

async function getFlight () {
    const result = await db.query(
        `SELECT * FROM flights`,
        
    );

    return result
}

export const flightRepository = { createFlight, getFlight };