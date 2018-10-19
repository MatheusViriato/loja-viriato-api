var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var mysql = require('mysql');

var con = mysql.createConnection({
    host : 'u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user : 'lql9yqvnqldeclst',
    password : 't36fg32wuxbhe447',
    database : 'bun62q03wxr00su2',
    port: '3306'
});

app.listen(port);

console.log("Servidor HTTP está na porta " + port);

app.get('/api', function(req, res){

    res.setHeader("Access-Control-Allow-Origin", "*");

    var data = req.body;
    var response = [];

    var sql = "select * from products";
    con.query(sql, function (err, result) {
        if (err) throw err;
        for(var i = 0; i < result.length; i++){
            response.push({
                img: result[i].img, 
                name: result[i].name,
                description: result[i].description,
                price: result[i].price
            })
        }
        res.send(response);
    });
});

app.post('/api/category', function(req, res){
    var data = req.body;
    var response = [];

    var sql = "select * from products where category = " + "'" + data.category + "'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        for(var i = 0; i < result.length; i++){
            response.push({
                img: result[i].img, 
                name: result[i].name,
                description: result[i].description,
                price: result[i].price
            })
        }
        res.send(response);
    });
});