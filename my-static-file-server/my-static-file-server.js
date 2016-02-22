/*
Express é um framework que torna a criação de sites normais muito simples. A primeira coisa que você tem que fazer é instalá-lo. Juntamente com o comando node, você também tem acesso a um comando chamado npm. Esta ferramenta permite que você acesse uma enorme coleção de módulos criados pela comunidade, e um deles é o Express.

$ cd /my/app/location
$ npm install express

Quando você instala um módulo, ele vai ser colado em uma pasta chamada node_modules dentro do diretório da sua aplicação. Você pode agora "require" (requisitar) este módulo como um módulo embutido. Vamos criar um arquivo estático básico usando o Express.
*/

var express = require('express');
app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080);

/*
$ node my-static-file-server.js

Agora você tem um servidor de arquivos estáticos bastante eficiente. Tudo que você colocar dentro da pasta /public vai ser requisitado pode agora ser requisitado pelo seu navegador e será mostrado. HTML, imagens, enfim, tudo. Por exemplo, se você colocar uma imagem chamada my-image.png dentro da pasta public, você pode acessá-la usando seu navegador no endereço http://localhost:8080/my-image.png. Claro que o Express tem muito muito outros recursos, mas você pode olhá-los a medida que continua desenvolvendo.
*/