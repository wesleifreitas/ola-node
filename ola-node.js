// http://tableless.com.br/o-que-nodejs-primeiros-passos-com-node-js/

var http = require('http');

var server = http.createServer();

server.on('request', function(req, res) { 
	res.writeHead(200, {
		'Content-Type': 'text/html; charset=utf-8'
	});
	res.end('<h1> Olá mundo! </h1>');
});

server.listen(3000);

console.log('Teste');

// $ node olanode.js
// $ curl http://localhost:3000/