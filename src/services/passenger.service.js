import passengerRepository from "../repositories/passenger.repository.js";

async function getPassengersAndTravels(page){
    let passengersAndTravels;

    if (page) {
        passengersAndTravels = await passengerRepository.getPassengersAndTravelsByPage(page)
       
    } else {
        passengersAndTravels = await passengerRepository.getPassengersAndTravels()
    }

    return passengersAndTravels.rows
}


const passengerService = {
    getPassengersAndTravels
}

export default passengerService