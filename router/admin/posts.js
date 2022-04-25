
import express from "express";
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Admin : Listing s posts page');
});

router.get('/:idPost', function(req, res) {
  res.send('Admin : A page of a posts: ' + req.params.idNews);
});

router.post('/', function(req, res){
  res.send('Admin : Add a posts')
})

router.put('/:idPost', function(req, res){
  res.send('Admin : Update a posts')
})

router.delete('/:idPost', function(req, res){
  res.send('Admin : Delete the course : ' + req.params.idNews)
})

export default router; 

