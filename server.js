import express from "express";
import * as http from "http";
import test from "./router/test.js";

const app = express();
const server = http.createServer(app);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.route('/courses')
    .get(function(req,res){
        res.send('courses')
    })

app.use('/test', test);
    

server.listen(8080, () => {
	console.log('listening on *:8080');
});

