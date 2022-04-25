
import express from "express";
import memberController from "../controllers/memberController.js";
const router = express.Router();

router.get('/', memberController.get);

export default router; 

