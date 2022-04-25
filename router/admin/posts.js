
import express from "express";
import postController from "../../controllers/postController.js";
const router = express.Router();

router.get('/', postController.get)

router.get('/:idPost', postController.getOne)

router.post('/', postController.create)

router.put('/:idPost', postController.update)

router.delete('/:idPost', postController.deleteOne)

export default router; 

