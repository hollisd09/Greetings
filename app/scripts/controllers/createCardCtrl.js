angular
  .module('greetingsApp')
  .controller('CreateCardCtrl', function($scope, Auth, $firebaseArray, getUid, $rootScope) {

		$('.btn').click(function(){
		  var newItem = $(this).clone().appendTo("#content");
		  $(newItem).addClass("makeMeDraggable");

			$(".makeMeDraggable").draggable ({ 
		  	containment: "#content", 
		  	scroll: false,
		  	stack: ".makeMeDraggable",
		  	connectWith: "#deleteArea"
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
	      	$scope.canvas = canvas.toDataURL("image/png");
	          //document.body.removeChild(canvas);
	        var uid = getUid.getUid()
	        var ref = new Firebase("https://greetings.firebaseio.com/cards/" + uid);
	        var newref = $firebaseArray(ref)
    			newref.$add({
          	cards: $scope.canvas
       	 	});
    });
	}) 



