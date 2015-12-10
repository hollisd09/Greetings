angular
  .module('greetingsApp')
  .controller('InspirationCtrl', ["$scope", "Auth", "$firebaseArray", "getUid",
    function($scope, Auth, $firebaseArray, getUid) {
      console.log("things Happened");
    }

  ]);