import express from "express";
import authController from "../../controllers/authController.js"
const router = express.Router();

router.get('/', authController.logout)

export default router;