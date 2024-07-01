require('dotenv').config({path:'var.env'});
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(process.env.PORT, () =>{
    console.log(`Server running at http://localhost:${process.env.PORT}/`);
});

