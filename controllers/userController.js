const getOne = function (req, res) {
    console.log(req.body);
    const user = {
        name: 'toto',
        gender: "M"
    }

    res.send(user)
}


const user = {
    getOne,

}
export default user