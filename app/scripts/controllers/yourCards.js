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

	$scope.savePNG = function() {
		$(".savePNG").click(function() { 
			html2canvas($("#printable"), {
				onrendered: function(canvas) {
					theCanvas = canvas;
					Canvas2Image.saveAsPNG(canvas);
					console.log("click worked?");
				},
				allowTaint: true
			})
		});
	},

	$scope.deleteCard = function() {
		$(document).on("click", ".deleteCard", function() {
			$(this).parent("#printable").remove();
		});
		console.log("delete working?");
	}
	}]);	


	// $('.print').click(function() {
	// 	$("#content").print();
	// 	return (false);
	// 	console.log("printed?");
	// });

		// // send email here
		// // send email here
		// $("#sendEmail").click(function() {
		// 	var recepientVal = $("#recepientName").val();
		// 	var subjectVal = $("#subject").val();
		// 	var messageVal = $("#message").val();
		// 	var emailToVal = $("#emailTo").val();
		// 		$.ajax({
		// 		  type: “POST”,
		// 		  url: "https://mandrillapp.com/api/1.0/messages/send.json",
		// 		  data: {
		// 		    'key': 'XwdD9jzlNOQI6IHnIFCfMg',
		// 		    'message': {
		// 		      'from_email': 'hollisd09@gmail.com',
		// 		      'to': [
		// 		          {
		// 		            'email': emailToVal,
		// 		            'name': recepientVal,
		// 		            'type': 'to'
		// 		          },
		// 		        ],
		// 		      'autotext': true,
		// 		      'subject': 'Greetings!',
		// 		      'html': messageVal
		// 		    }
		// 		    image: {
		// 		    	'name': '<img id="card" ng-src={{s.cards}} />',

		// 		    }
		// 		  }
		// 		 }).done(function(response) {
		// 		   console.log(response); // if you're into that sorta thing
		// 		 });
		//  })
