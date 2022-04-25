
import express from "express";
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Admin : Listing s of office members page');
});

router.get('/:idMember', function(req, res) {
  res.send('Admin : A page of a member: ' + req.params.idMember);
});

router.post('/', function(req, res){
  res.send('Admin : Add a member')
})

router.put('/:idMember', function(req, res){
  res.send('Admin : Update a member : ' + req.params.idMember)
})

router.delete('/:idMember', function(req, res){
  res.send('Admin : Delete a member : ' + req.params.idMember)
})

export default router; 

