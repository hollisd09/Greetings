angular
	.module('greetingsApp')
  .controller('NewCardCtrl', ["$scope", "Auth", "$firebaseArray", "getUid",
  	function($scope, Auth, $firebaseArray, getUid) {
  		var uid = getUid.getUid();
  		var ref = new Firebase("https://greetings.firebaseio.com/cards/");

  		$scope.cards = $firebaseArray(ref);
      $scope.$watch(function() {

      })

  		$scope.newCard = function() {

  			$scope.cards.$add({
  				creator: uid,
  			})
  				console.log("uid", uid);
  		}
    }
  ]);
