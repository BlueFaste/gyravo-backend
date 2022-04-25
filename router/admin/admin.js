import express from "express";
const router = express.Router();

import courses from "./courses.js";
import members from "./members.js";
import posts from "./posts.js";

router.use(function timeLog(req, res, next) {
    console.log('Check if admin');
    console.log('Time: ', Date.now());
    next();
  });

router.get('/', function(req, res) {
  res.send('Admin page');
});

router.use('/courses', courses);
router.use('/members', members);
router.use('/news', posts);
    
export default router; 
