
import express from "express";
import courseController from "../controllers/courseController.js";
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', courseController.get);
router.get('/:idCourse', courseController.getOne);

export default router; 

