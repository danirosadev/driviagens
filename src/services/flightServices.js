import { flightRepository } from "../repositories/flightRepositories.js";

async function createFlight ({ origin, destination, date }) {

    await flightRepository.createFlight

}

async function getFlight (flightsData) {
   
 let filteredFlights = [...flightsData];

 if (req.query.origin) {
   filteredFlights = filteredFlights.filter(flight => flight.origin === req.query.origin);
 }

 if (req.query.destination) {
   filteredFlights = filteredFlights.filter(flight => flight.destination === req.query.destination);
 }

 if (req.query.smallerDate && req.query.biggerDate) {
   const smallerDate = new Date(req.query.smallerDate);
   const biggerDate = new Date(req.query.biggerDate);

   if (smallerDate > biggerDate) {
     return res.status(400).json({ error: "A data menor não pode ser maior do que a data maior." });
   }

   filteredFlights = filteredFlights.filter(flight => {
     const flightDate = new Date(flight.date);
     return flightDate >= smallerDate && flightDate <= biggerDate;
   });
 }

 filteredFlights.sort((a, b) => new Date(a.date) - new Date(b.date));

  await flightRepository.getFlight({ id, origin, destination, date })
}

export const flightService = { createFlight, getFlight };