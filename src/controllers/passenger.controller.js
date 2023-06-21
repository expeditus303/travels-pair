import passengerService from "../services/passenger.service.js";

async function getPassengersAndTravels(req, res) {

    const page = Number(req.query.page);

    // TESTAR MANDANDO COM PAGE CORRETO, PAGE = 0, PAGE = STRING E SEM PAGE
    if(page &&(page <= 0 || typeof page !== "number")) {
        return res.status(400).send("Invalid page value");
    }
    
    try {

        const passengerAndTravels = await passengerService.getPassengersAndTravels(page)

        if(passengerAndTravels.length > 100) return res.status(500).send("Too many results");
        
        res.send(passengerAndTravels)
    } catch (error) {
        console.log(error)
    }
}

const passengerController = {
    getPassengersAndTravels
}

export default passengerController;