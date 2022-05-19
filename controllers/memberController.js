import db from "../db/connection.js";
import memberService from "../services/memberService.js";
import userService from "../services/userService.js";

const getOne = async function (req,res) {
    let idMember = req.params.idMember
    idMember = parseInt(idMember)

    console.log(idMember);
    if (idMember){
        const member = await memberService.getOne(idMember)
        
        res.send(member)
    }  else {
        res.send('Error');
    }
}

const get = async function (req, res) {

    const members = await memberService.get();
    res.send( members);
}

const create = async function (req, res) {

    const {mbr, usr} = await memberService.create(req.body)
    res.send({mbr, usr});
}

const update = function (req, res) {
    const mbr = memberService.update({data : req.body.mbr, mbr_id: req.params.idMember })

    userService.update({data: req.body.usr, usr_id: mbr.usr_id})
    
    res.send('Update a member : ' + req.params.idMember)
}

const deleteOne = async function (req, res) {

    const deleteMember = await memberService.deleteOne(req.params.idMember)

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