angular
  .module('greetingsApp')
  .controller('draggable', function($rootScope) {

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
		
		// $(function() {
		// 	$('.pdf').click(function() {
		// 		$("#content").print();
		// 		return (false);
		// 		console.log("printed?");
		// 	});
		// });

			$(function() { 
		    $(".pdf").click(function() { 
		    		$("#deleteArea").hide();
		        html2canvas($("#content"), {
		            onrendered: function(canvas) {
		                $rootScope.canvas = canvas;
		                // Convert and download as image 
		                Canvas2Image.saveAsPNG(canvas); 
		                // Clean up 
		                //document.body.removeChild(canvas);
		            }
		        });
		    });
		}); 
	

	});


