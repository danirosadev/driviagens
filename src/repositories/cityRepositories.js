import db from "../config/database.connection.js";

async function createCity(name){

    const result = await db.query(
        `INSERT INTO users (name) VALUES ($1);`,
        [name]
    );

    return result
}

export const cityRepository = { createCity }