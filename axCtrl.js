var mongojs = require("mongojs");
var ObjectId = require("mongodb").ObjectId;

var db = mongojs('axdb', ['axinfo']);

module.exports = {
    create: function(req, res) {
        db.axinfo.insert(req.body, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },
    read: function(req, res) {
        db.axinfo.find({}, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },
    update: function(req, res){
    var obj = {};
    for(var prop in req.body){
      if(prop != '_id'){
        obj[prop] = req.body[prop];
      }
    }
    var id = ObjectId(req.params.id);
    var newObj = {
      query: {_id: id},
      update: {$set: obj},
      new: false
    };
    db.axinfo.findAndModify(newObj, function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
    delete: function(req, res) {
        db.axinfo.remove({
            _id: ObjectId(req.params.id)
        }, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    }
};
