angular.module('greetingsApp')
  .controller('MainCtrl', ["$scope", "Auth", "$location", "getUid",
  
  function($scope, Auth, $location, getUid) {
    $scope.createUser = function() {
      $scope.message = null;
      $scope.error = null;
      console.log('running');
      Auth.$createUser({
        email: $scope.email,
        password: $scope.password
      }).then(function(userData) {
        console.log("things", userData)
        $scope.message = "User created with uid: " + userData.uid;
        getUid.addUid(userData.uid);
        console.log("getUid.addUid(userData.uid)", getUid.addUid(userData.uid));
        $location.path("/yourCards");
        $scope.logInNav = true;
        var ref = new Firebase("https://greetings.firebaseio.com/users/" + userData.uid);
        ref.set({
          bio: "blank",
          name: "no name",
          email: $scope.email,
          cards: false
        });
      }).catch(function(error) {
        $scope.error = error;
      });
    };

    $scope.loginUser = function() {
      $scope.message = null;
      $scope.error = null;
      console.log('running login');
      var ref = new Firebase("https://greetings.firebaseio.com");
          ref.authWithPassword({
            email    : $scope.email,
            password : $scope.password
          }, function(error, authData) {
            if (error) {
              console.log("Login Failed!", error);
              $scope.error = "Login Failed: " + error + ".";
            } else {
              console.log("Authenticated successfully with payload:", authData);
              $scope.message = "Authenticated successfully: " + authData + ".";
              getUid.addUid(authData.uid);
              $location.path("/yourCards");
              $scope.logInNav = true;
              $scope.$apply();
            }
          });    
    };

  }
]);