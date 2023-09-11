import { cityRepository } from "../repositories/cityRepositories.js";

async function createCity (name) {

    await cityRepository.createCity

}

export const cityService = { createCity };