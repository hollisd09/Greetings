angular
  .module('greetingsApp')
  .controller('YourCardsCtrl', ["$scope", "Auth", "$firebaseArray", "getUid", "$rootScope",
  	function($scope, Auth, $firebaseArray, getUid, $rootScope) {
		var uid = getUid.getUid();
	  var ref = new Firebase("https://greetings.firebaseio.com/cards/" + uid);
	  console.log("uid", getUid);
	  var stuff = $firebaseArray(ref);
	  stuff.$loaded().then(function(res) {
	  	$scope.stuff = res;
	  	console.log("---->", res)
	  })


  	$(".pdf").click(function() { 
			$("#deleteArea").hide();
	    html2canvas($("#content"), {
	      onrendered: function(canvas) {
	          $rootScope.canvas = canvas;
	          Canvas2Image.saveAsPNG(canvas); 
          // Clean up 
          //document.body.removeChild(canvas);
      }
    });
   })
  }]);	