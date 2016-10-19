var axList = require('./axList.js');

module.exports = {
  create: function(req, res){
    req.body.key = Math.floor(Math.random()*100000000000000);
    axList.push(req.body);
    res.send(axList);
  },
  read: function(req, res){
    res.send(axList);
  },
  update: function(req, res){
    console.log(req);
    for(var i = 0; i < axList.length; i++) {
      if(axList[i].key == req.params.id){
        axList[i] = req.body;
      }
    }
    res.send(axList);
  },
  delete: function(req, res){
    console.log(req);
    for(var i = 0; i < axList.length; i++) {
      if(axList[i].key == req.params.id) {
        axList.splice(i,1);
      }
    }
    res.send(axList);
  }
};
