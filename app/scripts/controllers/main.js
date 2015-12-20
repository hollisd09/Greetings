angular.module('greetingsApp')
  .controller('MainCtrl', ["$scope", "Auth", "$location", "getUid", "$firebaseAuth",

  function($scope, Auth, $location, getUid, $firebaseAuth) {
    $scope.createUser = function() {
      $scope.message = null;
      $scope.error = null;
      console.log('running');
      Auth.$createUser({
        email: $scope.email,
        password: $scope.password,
      }).then(function(userData) {
        console.log("things", userData)
        $scope.message = "User created with uid: " + userData.uid;
        $scope.loginUser();
        getUid.addUid(userData.uid);
        console.log("getUid.addUid(userData.uid)", getUid.addUid(userData.uid));
        $location.path("/yourCards");
        $scope.logInNav = true;
        var ref = new Firebase("https://greetings.firebaseio.com/users/" + userData.uid);
        ref.set({
          bio: "blank",
          name: $scope.firstName,
          email: $scope.email,
          cards: $scope.newCard
        });
      }).catch(function(error) {
        $scope.error = "Email Taken!";
      });
    };

    $scope.loginUser = function() {
      $scope.message = null;
      $scope.error = null;
      console.log('running login');
      var ref = new Firebase("https://greetings.firebaseio.com");
      ref.authWithPassword({
        email    : $scope.email,
        password : $scope.password,
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

      var ref = new Firebase("https://greetings.firebaseio.com");
      $scope.authObj = $firebaseAuth(ref);


      $scope.authObj.$onAuth(function (authData) {
        if (authData) {
        $location.path('/yourCards');
        console.log("wat the fuq");
      } else {
        console.log("Logged out");
        }
      })   
    };
  }
]);