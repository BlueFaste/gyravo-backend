
import express from "express";
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Listing s of office members page');
});

router.post('/', function(req, res){
  res.send('Add a member')
})

router.put('/:idCourse', function(req, res){
  res.send('Update a member : ' + req.params.idCourse)
})

router.delete('/:idCourse', function(req, res){
  res.send('Delete a member : ' + req.params.idCourse)
})

export default router; 

