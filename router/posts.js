
import express from "express";
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Listing s posts page');
});

router.get('/:idPost', function(req, res) {
  res.send('A page of a posts: ' + req.params.idNews);
});

export default router; 

