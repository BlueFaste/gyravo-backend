const getOne = function (req,res) {

    res.send(' A page of a post: ' + req.params.idPost);
}

const get = function (req, res) {

    res.send('Listing s posts page');
}

const create = function (req, res) {

    res.send('Add a post')
}

const update = function (req, res) {
    
    res.send('Update a post : ' + req.params.idPost)
}

const deleteOne = function (req, res) {

    res.send('Delete a post : ' + req.params.idPost)
}

const post = {
    getOne,
    get,
    create,
    update,
    deleteOne
}

export default post