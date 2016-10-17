angular.module("guitNodeApp")
.controller("mainCtrl", function($scope, mainServ){
  $scope.guits;
  $scope.focused = false;

  $scope.showAx = function() {
      mainServ.getAx()
          .then(function(response) {
              $scope.guit = response;
          });
  };
  $scope.showAx();

  $scope.addAx = function(guit) {
      console.log(guit);
      var addObj = {
           name: guit.name,
           brand: guit.brand
       };
  mainServ.newAx(addObj)
      .then(function(response) {
          console.log(response);
          $scope.thingguit = "";
          $scope.showAx();
      })
};

$scope.changeAx = (function(guit) {
      mainServ.changeAx(guit)
          .then(function(response) {
              $scope.showAx();
          })
  });

  $scope.deleteAx = (function(guit) {
          mainServ.deleteAx(guit)
              .then(function(response) {
                  $scope.showAx();
              })
      });

  });
