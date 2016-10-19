var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


var axCtrl = require('./axCtrl.js');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));


app.get('/ax', axCtrl.read);
app.post('/ax', axCtrl.create);
app.put('/ax/:id', axCtrl.update);
app.delete('/ax/:id', axCtrl.delete);

app.listen(3000, function() {
    console.log("listening to 3000");
});
