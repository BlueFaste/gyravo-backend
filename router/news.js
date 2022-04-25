
import express from "express";
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Listing s news page');
});

router.get('/:idNews', function(req, res) {
  res.send('A page of a news: ' + req.params.idNews);
});

export default router; 

