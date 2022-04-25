import express from "express";
import profileController from "../../controllers/licenceeController.js";
const router = express.Router();

router.get('/', profileController.get);

export default router; 