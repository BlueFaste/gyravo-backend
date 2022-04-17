
import express from "express";
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Listing s of office members page');
});

router.get('/:idMember', function(req, res) {
  res.send('A page of a member: ' + req.params.idMember);
});

router.post('/', function(req, res){
  res.send('Add a member')
})

router.put('/:idMember', function(req, res){
  res.send('Update a member : ' + req.params.idMember)
})

router.delete('/:idMember', function(req, res){
  res.send('Delete a member : ' + req.params.idMember)
})

export default router; 

