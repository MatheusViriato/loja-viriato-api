var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.listen(port);

console.log("Servidor HTTP está na porta " + port);

app.get('/', function(req, res){
    res.send({msg:'Olá'});
});