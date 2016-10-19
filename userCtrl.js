var userList = require('./userList.js');

module.exports = {
  login: function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    var userFound = false;
    for(var i = 0; i < userList.length; i++) {
      if(username == userList[i].username && password == userList[i].password){
      userFound = true;
      req.session.currentUser = userList[i];
      //Set the session for the particular user.
      req.session.cookie.maxAge = 1000 * 60 * 60 * 24;
      //Length of session before it times out.
     }
    }
    if (userFound) {
      res.send("User has been found. You may login.");
    }else{
      res.send("Username or password is incorrect.");
    }
  },
  logout: function(req,res){
    req.logout()
  }
};
