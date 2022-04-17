
import express from "express";
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Listing s of office members page');
});

export default router; 

