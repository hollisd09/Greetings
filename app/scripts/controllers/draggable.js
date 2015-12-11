angular
  .module('greetingsApp')
  .controller('draggable', function() {

		$('.btn').click(function(){
		  var newItem = $(this).clone().appendTo("#content");
		  $(newItem).addClass("makeMeDraggable");
		  $(newItem).addClass("ui-draggable");
		  $(newItem).addClass("ui-draggable-handle");

			$(".makeMeDraggable").draggable ({ 
		  	containment: "#content", 
		  	scroll: false 
		  });
		});
		// $('.btn-rem').click(function(){
		// $('#iframe1').contents().find('html').html("<h1>").remove();
		// });
  });