import express from "express";
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded())

import userController from "../controllers/userController.js"


router.post('/', userController.getOne)

export default router;