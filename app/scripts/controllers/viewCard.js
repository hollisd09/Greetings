angular
	.module('greetingsApp')
	.controller('ViewCardCtrl', ["$scope", "Auth", "$firebaseArray", "getUid", "$rootScope", "$routeParams", "$location",
	function($scope, Auth, $firebaseArray, getUid, $rootScope, $routeParams, $location) {
		$scope.uid = $routeParams.uid;
		$scope.card_id = $routeParams.card_id;
		var uid = getUid.getUid();
		var ref = new Firebase("https://greetings.firebaseio.com/cards/" + uid);
		// console.log("uid", getUid);
		var stuff = $firebaseArray(ref);
		stuff.$loaded().then(function(res) {
			$scope.stuff = res;
		}),


		ref.child($scope.card_id).once('value', function(snap) {
			console.log(snap.val());
			var link = snap.val().cards;
			$scope.cardLink = link;
		})


	$scope.savePNG = function() {
			$(".savePNG").click(function() {
		    Canvas2Image.saveAsPNG(document.getElementById("cardViewed")); 
				console.log("this clicked, yes");
			})
		}

	$scope.deleteCard = function() {
		console.log("s", ref.child($scope.card_id));
		var fb = new Firebase("https://greetings.firebaseio.com/cards/" + $scope.uid + "/" + $scope.card_id);
		fb.remove();
		console.log("delete working?");
		$location.path("/yourCards");
	}



	// $('.print').click(function() {
	// 	$("#content").print();
	// 	return (false);
	// 	console.log("printed?");
	// });

	}]);