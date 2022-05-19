import db from "../db/connection.js";

const create = async function (usr){
    console.log("Create user");

    await db.query(
        `INSERT INTO gyravo.Users 
        (
            usr_email,
            usr_password,
            usr_firstname,
            usr_lastname,
            usr_phone,
            usr_gender,
            usr_is_admin
        )
        VALUE (
            '${usr.usr_email}', 
            '${usr.usr_password}',
            '${usr.usr_firstname}',
            '${usr.usr_lastname}',
            '${usr.usr_phone}',
            '${usr.usr_gender}',
            ${usr.usr_is_admin}
            )
            `
        )

    let user = await db.query(`SELECT * FROM gyravo.Users WHERE usr_email="${usr.usr_email}"`)

    return user
}

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
        UPDATE gyravo.Users
        SET ${prepareUpdate}
        WHERE usr_id = ${data.usr_id}
    `)

    const userUpdated = await db.query(`
        SELECT * FROM gyravo.Users WHERE usr_id = ${data.usr_id}
    `)

    return userUpdated
}

const deleteOne = async function(id){
    await db.query(`
        DELETE FROM gyravo.Users WHERE usr_id=${id}
    `)
}

const checkIfEmailExist = function(email){
    
}

const userService = {
    update,
    create,
    deleteOne,
}

export default userService;