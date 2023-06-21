import { Router } from "express";
import passengerController from "../controllers/passenger.controller.js";

const passengerRouter = Router();

passengerRouter.get("/passengers/travels", passengerController.getPassengersAndTravels);

export default passengerRouter;