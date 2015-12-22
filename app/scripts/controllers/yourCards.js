angular
	.module('greetingsApp')
	.controller('YourCardsCtrl', ["$scope", "Auth", "$firebaseArray", "getUid", "$rootScope",
	function($scope, Auth, $firebaseArray, getUid, $rootScope) {
		var uid = getUid.getUid();
		var ref = new Firebase("https://greetings.firebaseio.com/cards/" + uid);
		// console.log("uid", getUid);
		var stuff = $firebaseArray(ref);
		stuff.$loaded().then(function(res) {
			$scope.stuff = res;
		}),

		$scope.viewCard = function() {
			$(".viewCard").click(function() {
				$("#printable").append($(".viewCardAppend"));
			})
		}

		
	}]);	
