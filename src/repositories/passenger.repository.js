import connection from "../database/database.js";

async function getPassengersAndTravelsByPage(page = 1){

    const offset = (page - 1) * 25;

    const result = await connection.query(`
    SELECT passengers."fullName", COUNT(passenger_travels."travelId") AS travels
    FROM passengers
    JOIN passenger_travels ON passengers.id = passenger_travels."passengerId"
    GROUP BY passengers."fullName"
    ORDER BY passengers."fullName"
    LIMIT 25 OFFSET $1;
  `, [offset]);

  return result 
}

async function getPassengersAndTravels(){
    const result = await connection.query(`
    SELECT passengers."fullName", COUNT(passenger_travels."travelId") AS travels
    FROM passengers
    JOIN passenger_travels ON passengers.id = passenger_travels."passengerId"
    GROUP BY passengers."fullName"
    ORDER BY passengers."fullName"
    LIMIT 101;
    `);

    return result;
}

const passengerRepository = {
    getPassengersAndTravelsByPage,
    getPassengersAndTravels
}

export default passengerRepository