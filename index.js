var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var axList = require('./axList.js');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.get('/ax', function(req, res){
  res.send(axList);
});
app.post('/ax', function(req, res){
  req.body.key = axList[axList.length - 1].key + 1;
  axList.push(req.body);
  res.send(axList);
});
app.put('/ax/:id', function(req, res){
  console.log(req);
  for(var i = 0; i < axList.length; i++) {
    if(axList[i].key == req.params.id){
      axList[i] = req.body;
    }
  }
  res.send(axList);
});
app.delete('/ax/:id', function(req, res){
  console.log(req);
  for(var i = 0; i < axList.length; i++) {
    if(axList[i].key == req.params.id) {
      axList.splice(i,1);
    }
  }
  res.send(axList);
});

app.listen(3000, function(){
  console.log("listening to 3000");
});
