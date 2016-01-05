angular
	.module('greetingsApp')
	.controller('CreateCardCtrl', function($scope, Auth, $firebaseArray, getUid, $rootScope) {

		$(".btn").click(function(){
			var newItem = $(this).clone().appendTo("#content");

			$(newItem).addClass("makeMeDraggable");
			$(newItem).removeClass("btn");
			$(newItem).prepend('<a><span class="delete glyphicon glyphicon-trash"></span></a>')
		
			$(".makeMeDraggable").draggable ({ 
				containment: "#content", 
				scroll: false,
				stack: ".makeMeDraggable",
				zIndex: 100,
			});
			
			$(".glyphicon-trash").hide();
			$(".makeMeDraggable").on({
				mouseover: function() {
					$(this).find(".glyphicon-trash").show();
				},
				mouseout: function() {
					$(this).find(".glyphicon-trash").hide();
				}
			});

			$(".glyphicon-trash").click(function() {
				$(this).parent().parent().remove();
		 	})
		}); 



		$scope.appendText = function() {
			var textItem = $(".previewText").clone().appendTo("#content");
			
			$(textItem).addClass("makeMeDraggable");
			$(textItem).removeClass("previewText");
			$(textItem).append('<a><span class="delete glyphicon glyphicon-trash"></span></a>');
			console.log("click worked?? WHO KNOWS");

			$(".makeMeDraggable").draggable ({ 
				containment: "#content", 
				scroll: false,
				stack: ".makeMeDraggable",
				zIndex: 100,
			});

			$(".glyphicon-trash").hide();
			$(textItem).on({
				mouseover: function() {
					$(this).find(".glyphicon-trash").show();
				},
				mouseout: function() {
					$(this).find(".glyphicon-trash").hide();
				}
			});

			$(".glyphicon-trash").click(function() {
				$(this).parent().parent().remove();
		 	})
			$scope.greetingsText = ""

	 };	



		$scope.saveToProfile = function() {
			var canvas;
			$(".glyphicon-trash").hide();
			html2canvas($("#content"), {
				onrendered: function(canvas) {
					$scope.canvas = canvas.toDataURL("image/png");
					var uid = getUid.getUid();
					var ref = new Firebase("https://greetings.firebaseio.com/cards/" + uid);
					var newref = $firebaseArray(ref)
					newref.$add({
						cards: $scope.canvas
					});
				}
			});
		};
});			



			




