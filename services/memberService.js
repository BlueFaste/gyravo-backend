import db from "../db/connection.js";
import userService from "./userService.js";

const update = async function(data) {
    let prepareUpdate= '';
    let i= 0;
    const dataUpdated= data.data
    for(let el in dataUpdated){
        i++;
        prepareUpdate += `${el} = "${dataUpdated[el]}"`;

        if(i !== Object.keys(dataUpdated).length){
            prepareUpdate +=', '
        }
    }

    await db.query(`
        UPDATE gyravo.Members
        SET ${prepareUpdate}
        WHERE usr_id = ${data.mbr_id}
    `)

    const memberUpdated = await db.query(`
        SELECT * FROM gyravo.Members WHERE usr_id = ${data.mbr_id}
    `)

    return memberUpdated

}

const create = async function (data) {
    console.log("create Member");
    const {usr, mbr} = data;
    let user = await userService.create(usr);
    user = user[0];

    await db.query(`
        INSERT INTO gyravo.Members 
        (mbr_firstname, mbr_lastname, mbr_role, usr_id)
        VALUES (
            '${user.usr_firstname}',
            '${user.usr_lastname}',
            '${mbr.mbr_role}',
            '${user.usr_id}'
        )
    `)

    const member= await db.query(`SELECT * FROM gyravo.Members WHERE usr_id=${user.usr_id}`)

    return {member, user}
}

const getOne = async function(id){
    console.log("Member getOne");

    const member = await db.query(`
    SELECT * FROM gyravo.Members WHERE mbr_id = ${id}
    `)

    return member[0]
}

const get = async function(){
    console.log("Member getMany");
    const members = await db.query(`
        SELECT * FROM gyravo.Members
    `)

    return members[0]
}

const deleteOne = async function(id){
    console.log("Member deleteOne");

    await db.query(`
    DELETE FROM gyravo.Members WHERE mbr_id=${id}
    `)

    return true
}


const memberService = {
    update,
    create,
    getOne,
    get,
    deleteOne
}

export default memberService;