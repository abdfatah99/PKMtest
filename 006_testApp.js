const env = require('dotenv');
const http = require('http');
const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
    if (req.url == '/hello'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end("Udah bisa yak, sue bat error mulu");
    }else{
        res.writeHead(200, {'Content-Type': 'applicaton/json'});
        res.end('alhamdulillah bisa');
 
    }
})

server.listen(port, () => {
    console.log(`this app is running on ${port}`);
})