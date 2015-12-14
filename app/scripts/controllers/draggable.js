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
		});
		  	
    $('#deleteArea').droppable( {
	    accept: ".makeMeDraggable",
	    drop: function(event, ui) {
	    	ui.draggable.remove();
		  },
		});
		
		var specialElementHandlers = {
			"#content": function(element, renderer) {
				return true;
				console.log("huh?");
			},
		};

		var doc = new jsPDF('p', 'pt', 'letter');
		doc.ellipse(40, 20, 10, 5);

		$('.pdf').click(function() {
			console.log("beginning of pdf function");
			doc.fromHTML($('#content').get(0), 0, 622, {
				'width': 800,
				'elementHandlers': specialElementHandlers,
			});
			doc.output('datauri');
			doc.save('Test.pdf');
		});
	});





			
