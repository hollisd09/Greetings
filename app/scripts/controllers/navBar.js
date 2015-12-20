angular
  .module('greetingsApp')
  .controller('NavBarCtrl', ["$scope", "$location", "$rootScope", "$firebaseAuth",

  function($scope, $location, $rootScope, $firebaseAuth) {
    console.log("nav barrrr")
    console.log("locationPath", $location.path());

    var ref = new Firebase("https://greetings.firebaseio.com");
    $scope.authObj = $firebaseAuth(ref);

    $scope.logOut = function () {
      $scope.authObj.$unauth();
    };
  }
]);