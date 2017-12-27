var express = require('express');
var app = express();
app.use(express.static('assets'));


app.get('/', function (req, res) {
    res.sendFile('/index.html');
});

app.use('/store' ,function(req, res, next){
    console.log('Przed wejściem towar nie zakupiony w naszym sklepie zgłaszamy na podstawie paragonu!');
    console.log('Po odejściu od kasy...wiadomo.');
    next();
});

app.get('/store', function(req, res){
    res.send('tutaj będzie sklep');
});



app.get('/userform', function (req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});




var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});

app.use(function(req, res, next){
    res.status(404).send('ZŁA ŚCIEŻKA!')
});
