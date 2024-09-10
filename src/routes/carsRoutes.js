import { Router} from "express";

import CarsController from "../controllers/cars.js";

const router = Router();

router.get('/',CarsController.getCars);
router.get('/',CarsController.newCar);
router.get('/id',CarsController.carDelete);
router.get('/id',CarsController.carUpdate);

export default router;