app.factory("Auth", ["$firebaseAuth",
	function($firebaseAuth) {
		var ref = new Firebase("https://greetings.firebaseio.com");
		return $firebaseAuth(ref);
	}
]);


app.controller("LoginCtrl", ["$scope", "Auth",
	function($scope, Auth) {

	}
]);