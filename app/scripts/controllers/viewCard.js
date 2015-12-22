angular
	.module('greetingsApp')
	.controller('ViewCardCtrl', ["$scope", "Auth", "$firebaseArray", "getUid", "$rootScope",
	function($scope, Auth, $firebaseArray, getUid, $rootScope) {
		var uid = getUid.getUid();
		var ref = new Firebase("https://greetings.firebaseio.com/cards/" + uid);
		// console.log("uid", getUid);
		var stuff = $firebaseArray(ref);
		stuff.$loaded().then(function(res) {
			$scope.stuff = res;
		}),



$scope.savePNG = function() {
		$(".savePNG").click(function() {
	    Canvas2Image.saveAsPNG(document.getElementById("printable")); 
			$scope.$apply();	
			console.log("this clicked, yes");
		})
	}

	$scope.deleteCard = function(s) {
		$(document).on("click", ".deleteCard", function() {
			$("#printable").remove();
		});
		console.log("delete working?");
	}

// 	$scope.remove = function(item) { 
//   var index = $scope.bdays.indexOf(item);
//   $scope.bdays.splice(index, 1);     
// }


	// $('.print').click(function() {
	// 	$("#content").print();
	// 	return (false);
	// 	console.log("printed?");
	// });

	}]);