const getOne = function (req,res) {

    res.send(' A page of a member: ' + req.params.idMember);
}

const get = function (req, res) {

    res.send('Listing s of office members page');
}

const create = function (req, res) {

    res.send('Add a member')
}

const update = function (req, res) {
    
    res.send('Update a member : ' + req.params.idMember)
}

const deleteOne = function (req, res) {

    res.send('Delete a member : ' + req.params.idMember)
}

const member = {
    getOne,
    get,
    create,
    update,
    deleteOne
}

export default member