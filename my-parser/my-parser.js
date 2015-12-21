// https://github.com/ericdouglas/traduz-ai/blob/master/nodejs/001-guia-para-iniciantes-absolutos-em-nodejs.md

// Requisitando o arquivo parser.js
var Parser = require('./parser');

// Carregando o módulo fs (filesystem)
var fs = require('fs');

// Leia o conteúdo do arquivo para a memória
fs.readFile('example-log.txt', function(err, logData) {

	// Se um erro ocorrer, será lançada uma
	// exceção, e a aplicação irá ser encerrada
	if (err) throw err;

	// logData é um Buffer, converta-o para string
	var text = logData.toString();

	var parser = new Parser();

	console.log(parser.parse(text))

	/*
	var results = {};

	// Quebrando o arquivo em linhas
	var lines = text.split('\n');

	lines.forEach(function(line) {
		var parts = line.split(' ');
		var letter = parts[1];
		var count = parseInt(parts[2]);

		if (!results[letter]) {
			results[letter] = 0;
		}

		results[letter] += parseInt(count);
	});

	console.log(results);
	*/
});