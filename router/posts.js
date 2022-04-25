
import express from "express";
import postController from "../controllers/postController.js";
const router = express.Router();

router.get('/', postController.get)

router.get('/:idPost', postController.getOne)

export default router; 

