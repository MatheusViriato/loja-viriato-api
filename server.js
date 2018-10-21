var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var mysql = require('mysql');
var con = mysql.createConnection({
    host : 'u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user : 'lql9yqvnqldeclst',
    password : 't36fg32wuxbhe447',
    database : 'bun62q03wxr00su2',
    port: '3306'
});

app.listen(port);

app.get('/api', function(req, res){
    res.setHeader("Access-Control-Allow-Origin", "*");
    var response = [];
    var sql = "select * from produtos";
    con.query(sql, function (err, result) {
        if (err) throw err;
        for(var i = 0; i < result.length; i++){
            response.push({
                img: result[i].img, 
                img1: result[i].img1, 
                img2: result[i].img2, 
                img3: result[i].img3, 
                name: result[i].nome,
                description: result[i].descricao,
                price: result[i].preco,
                old_price: result[i].preco_antigo
            })
        }
        res.send(response);
    });
});

app.get('/api/category', function(req, res){
    res.setHeader("Access-Control-Allow-Origin", "*");
    var response = [];
    var sql = "select * from produtos where categoria like " + "'%" + req.query.category + "%'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        for(var i = 0; i < result.length; i++){
            response.push({
                img: result[i].img, 
                img1: result[i].img1, 
                img2: result[i].img2, 
                img3: result[i].img3, 
                name: result[i].nome,
                description: result[i].descricao,
                price: result[i].preco,
                old_price: result[i].preco_antigo
            })
        }
        res.send(response);
    });
});
