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
		});

			
			
		$scope.appendText = function() {
			var textItem = $(".cardText").val();
			$(textItem).clone().appendTo("#content");
			$(textItem).addClass("makeMeDraggable");
			console.log("click worked?? WHO KNOWS");

			$(".makeMeDraggable").draggable ({ 
				containment: "#content", 
				scroll: false,
				stack: ".makeMeDraggable",
				connectWith: "#deleteArea"
			});
		}

		$('#deleteArea').droppable( {
			accept: ".makeMeDraggable",
			drop: function(event, ui) {
				ui.draggable.remove();
			},
		});


		$scope.saveToProfile = function() {
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
		};

	}); 



