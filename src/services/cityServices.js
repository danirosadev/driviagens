import { cityRepository } from "../repositories/cityRepositories";

async function createCity (name) {

    await cityRepository.createCity

}

export const cityService = { createCity };