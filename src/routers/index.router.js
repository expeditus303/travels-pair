import { Router } from "express";
import passengerRouter from "./passenger.router.js";

const router = Router();

router.use(passengerRouter)

export default router;
