import db from "../config/database.connection.js";

async function createPassenger({ firstName, lastName }){

    const result = await db.query(
        `INSERT INTO users (firstName, lastName) VALUES ($1, $2);`,
        [firstName, lastName]
    );

    return result
}

export const passangerRepository = { createPassenger }