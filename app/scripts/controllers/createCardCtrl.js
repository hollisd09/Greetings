angular
	.module('greetingsApp')
	.controller('CreateCardCtrl', function($scope, Auth, $firebaseArray, getUid, $rootScope) {

		$(".btn").click(function(){
			var newItem = $(this).clone().appendTo("#content");
			$(newItem).addClass("makeMeDraggable");
			$(newItem).removeClass("btn");
			$(newItem).append('<a><span ng-click="trashClick()" class="delete glyphicon glyphicon-trash"></span></a>')
		
			$(".makeMeDraggable").draggable ({ 
				containment: "#content", 
				scroll: false,
				stack: ".makeMeDraggable",
				connectWith: "#deleteArea"
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
		}); 
			
		$scope.trashClick = function() {
			$(this).find(".makeMeDraggable").remove();
			console.log("works?");
		}

		$(".mark").on({
    mouseover: function() {
        $(".icontent").stop().show(1000);
    },

    mouseout: function() {
        $(".icontent").stop().hide(1000);
    }
		
		})



			
			
		// $scope.appendText = function() {
		// 	var textItem = $(".cardText").val();
		// 	$(textItem).clone().appendTo("#content");
		// 	$(textItem).addClass("makeMeDraggable");
		// 	console.log("click worked?? WHO KNOWS");

		// 	$(".makeMeDraggable").draggable ({ 
		// 		containment: "#content", 
		// 		scroll: false,
		// 		stack: ".makeMeDraggable",
		// 		connectWith: "#deleteArea"
		// 	});
		// }

		// $('#deleteArea').droppable( {
		// 	accept: ".makeMeDraggable",
		// 	drop: function(event, ui) {
		// 		ui.draggable.remove();
		// 	},
		// });


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




