import express from "express";
import * as http from "http";
import admin from "./router/admin/admin.js";
import courses from "./router/courses.js";
import members from "./router/members.js";
import news from "./router/news.js";
import login from './router/auth/login.js';
import logout from './router/auth/logout.js';
import register from './router/auth/register.js';


const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded())

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  //TODO: page d'accueil
  res.send('Home page');
});

app.use('/admin', admin);
app.use('/courses', courses);
app.use('/members', members);
app.use('/news', news);
app.use('/login', login)
app.use('/logout', logout)
app.use('/register', register)
    

server.listen(8080, () => {
	console.log('listening on *:8080');
});

