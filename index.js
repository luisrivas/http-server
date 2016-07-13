const http = require('http');

const server = http.createServer( (req,res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello World!\n');
	res.end('Goodbye World!');
});

server.listen(3000, '127.0.0.1', ()=>{
	console.log("Server is running in http://127.0.0.1:3000");
});
