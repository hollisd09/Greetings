angular
  .module('greetingsApp')
  .controller('draggable', function() {

		$('.btn').click(function(){
		  var newItem = $(this).clone().appendTo("#content");
		  $(newItem).addClass("makeMeDraggable");

			$(".makeMeDraggable").draggable ({ 
		  	containment: "#content", 
		  	scroll: false,
		  	stack: ".makeMeDraggable",
		  	connectWith: "#deleteArea"
		  });
		  	console.log("On the interent no one knows you're a dog");
		});

    
    $('#deleteArea').droppable( {
	    accept: ".makeMeDraggable",
	    drop: function(event, ui) {
	    	ui.draggable.remove()
		  },
		});
	});


// 	    $('#trash').droppable({
//         over: function(event, ui) {
//             ui.draggable.remove();
//         }
//     });
// });