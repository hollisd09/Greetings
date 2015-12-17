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

	  	$(".pdf").click(function() { 
	  		console.log("it's working?");
				$("#deleteArea").hide();
		    html2canvas($("#card"), {
		      onrendered: function(canvas) {
		          $rootScope.canvas = canvas;
	          // Clean up 
		          Canvas2Image.saveAsPNG(canvas); 
	          //document.body.removeChild(canvas);
	      }
	    });
	   })

			$('.print').click(function() {
				$("#content").print();
				return (false);
				console.log("printed?");
			});

  }]);	