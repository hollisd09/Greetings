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

		$('.btn').click(function(){
		  $('#clickToAppend').clone().appendTo("#content");
		  $(this).attr("id","#makeMeDraggable");
		});


		$('.btn-rem').click(function(){
		$('#iframe1').contents().find('html').html("<h1>").remove();
		});
  });


