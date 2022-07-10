import express from "express";
import * as http from "http";
import admin from "./router/admin/admin.js";
import courses from "./router/courses.js";
import members from "./router/members.js";
import posts from "./router/posts.js";
import login from './router/auth/login.js';
import logout from './router/auth/logout.js';
import register from './router/auth/register.js';
import profiles from './router/licencees/profiles.js';
import db from "./db/connection.js";
import m from "moment";


const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded())

app.get('/', function(req, res) {
  res.send('Home page');
});

app.use('/admin', admin);
app.use('/courses', courses);
app.use('/members', members);
app.use('/news', posts);
app.use('/login', login)
app.use('/logout', logout)
app.use('/register', register)
app.use('/profiles', profiles)

app.get('/test/db', function(req, res) {
  const value = `test ${m().format()}`
  db.query("INSERT INTO gyravo.Tags (tag_title) VALUES ('test3')")
    .then((rows) => {
      console.log(rows); //[ {val: 1}, meta: ... ]
      res.send(true)
    })
})
    

server.listen(8080, () => {
	console.log('listening on *:8080');
});

