angular.module("guitNodeApp")
.service("mainServ", function($http){
  this.getAx = function() {
      return $http({
          method: "GET",
          url: "/ax"
      }).then(function(response) {
          console.log(response);
          return response.data;
      });
  };

  this.newAx = function(guit) {
      return $http({
          method: "POST",
          url: "/ax",
          data: guit
      }).then(function(response) {
          console.log(response);
          return response.data;
      });
  };

  this.changeAx = function(guit) {
      return $http({
          method: "PUT",
          url: "/ax/" + guit.key,
          data: guit
  }).then(function(response) {
          return response;
      });
  };

  this.deleteAx = function(guit) {
      return $http({
          method: "DELETE",
          url: "/ax/" + guit.key
  }).then(function(response) {
          return response;
      });
  };


});
