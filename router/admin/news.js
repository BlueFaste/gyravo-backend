
import express from "express";
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Admin : Listing s news page');
});

router.get('/:idNews', function(req, res) {
  res.send('Admin : A page of a news: ' + req.params.idNews);
});

router.post('/', function(req, res){
  res.send('Admin : Add a news')
})

router.put('/:idNews', function(req, res){
  res.send('Admin : Update a news')
})

router.delete('/:idNews', function(req, res){
  res.send('Admin : Delete the course : ' + req.params.idNews)
})

export default router; 

