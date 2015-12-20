angular
	.module('greetingsApp')
	.controller('CreateCardCtrl', function($scope, Auth, $firebaseArray, getUid, $rootScope) {

		$(".btn").click(function(){
			var newItem = $(this).clone().appendTo("#content");
			$(newItem).addClass("makeMeDraggable");
			$(newItem).removeClass("btn");

			$(".makeMeDraggable").draggable ({ 
				containment: "#content", 
				scroll: false,
				stack: ".makeMeDraggable",
				connectWith: "#deleteArea"
			});
	    
	    $(".resizeMe").resizable({
	    	aspectRatio: 16 / 9,
	    });
		});


		$('#deleteArea').droppable( {
			accept: ".makeMeDraggable",
			drop: function(event, ui) {
				ui.draggable.remove();
			},
		});


		$(".saveToProfile").click(function() {
			var canvas;
			$("#deleteArea").hide();
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
		});
	}) 



