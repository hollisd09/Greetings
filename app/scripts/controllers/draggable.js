

angular
  .module('greetingsApp')
  .controller('draggable', function() {
		
		$(init);
		function init() {
			console.log("RUN!")
		  $("#makeMeDraggable").draggable ({ 
		  	containment: "#content", 
		  	scroll: false 
		  });
		};

  });