import { passangerRepository } from "../repositories/passengerRepositories.js"

async function createPassenger({ firstName, lastName }){

    await passangerRepository.createPassenger
}

export const userService = { createPassenger }