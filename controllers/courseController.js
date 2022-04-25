const getOne = function (req,res) {

    res.send('A page of a course: ' + req.params.idCourse);
}

const get = function (req, res) {

    res.send('Listing s of courses page');
}

const create = function (req, res) {

    res.send('Add a course')
}

const update = function (req, res) {
    
    res.send('Update a course')
}

const deleteOne = function (req, res) {

    res.send('Delete the course : ' + req.params.idCourse)
}

const course = {
    getOne,
    get,
    create,
    update,
    deleteOne
}

export default course