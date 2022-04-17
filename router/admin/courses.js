
import express from "express";
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/', function(req, res) {
  res.send('Listing s of courses page');
});
router.get('/:courseName', function(req, res) {
  res.send('A page of a course: ' + req.params.courseName);
});

router.post('/', function(req, res){
  res.send('Add a post')
})

router.put('/:idCourse', function(req, res){
  res.send('Update a post')
})

router.delete('/:courseName', function(req, res){
  res.send('Delete the course : ' + req.params.courseNameoo)
})

export default router; 

