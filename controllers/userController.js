import userService from "../services/userService";
const getOne = function (req, res) {
    console.log(req.body);
    const user = {
        name: 'toto',
        gender: "M"
    }

    res.send(user)
}

const update = async function(req, res){
    const updateData = req.body

    const userUpdated = userService.update(updateData.usr)

    return userUpdated
}


const user = {
    getOne,

}
export default user