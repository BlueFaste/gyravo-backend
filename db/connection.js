import mariadb from "mariadb";
import 'dotenv/config'

const pool = mariadb.createPool({

	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PWD

});
const db = await pool.getConnection().then( conn => {
    console.log("database connected");
	return conn
})

export default db;