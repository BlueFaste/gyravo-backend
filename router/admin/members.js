
import express from "express";
import memberController from "../../controllers/memberController.js";
const router = express.Router();

router.get('/', memberController.get);

router.get('/:idMember', memberController.getOne);

router.post('/', memberController.create)

router.put('/:idMember', memberController.update)

router.delete('/:idMember', memberController.deleteOne)

export default router; 

