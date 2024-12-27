const http = require('node:http');

//creating a server using raw node.js
const server = http.createServer()



// Listener
server.on('request', (req, res) =>{
    console.log(req.url, req.method);
    res.end( "Hello world from my new server !")
})

server.listen(5000, () => {
console.log(`server is listening on port 5000`);
})