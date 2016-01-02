angular
	.module('greetingsApp')
	.controller('CreateCardCtrl', function($scope, Auth, $firebaseArray, getUid, $rootScope) {

		$(".btn").click(function(){
			var newItem = $(this).clone().appendTo("#content");
			$(newItem).addClass("makeMeDraggable");
			$(newItem).removeClass("btn");
			$(newItem).prepend('<a><span class="delete glyphicon glyphicon-trash"></span></a>')
		
			$(".makeMeDraggable").draggable ({ 
				containment: "#content", 
				scroll: false,
				stack: ".makeMeDraggable",
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

			$(".glyphicon-trash").click(function() {
				$(this).parent().parent().remove();
		 	})
		}); 

		$scope.greetingsText = "";

		$scope.appendText = function() {
			var textItem = "<div class='textToAppend'>" + $(".cardText").val() + "</div>";
			
			$("#content").append(textItem);
			$(".textToAppend").addClass("makeMeDraggable");
			$(".textToAppend").append('<a><span class="delete glyphicon glyphicon-trash"></span></a>')
			console.log("click worked?? WHO KNOWS");

			$(".makeMeDraggable").draggable ({ 
				containment: "#content", 
				scroll: false,
				stack: ".makeMeDraggable",
			});

			$(".glyphicon-trash").hide();
			$(".textToAppend").on({
				mouseover: function() {
					$(this).find(".glyphicon-trash").show();
				},
				mouseout: function() {
					$(this).find(".glyphicon-trash").hide();
				}
			});

			$(".glyphicon-trash").click(function() {
				$(this).parent().parent().remove();
		 	})
			
			var ps = element.all(by.css('div'));

			it('should check ng-class', function() {

			  expect(ps.first().getAttribute('class')).not.toMatch(/font1/);
			  expect(ps.first().getAttribute('class')).not.toMatch(/font2/);
			  expect(ps.first().getAttribute('class')).not.toMatch(/font3/);
			  expect(ps.first().getAttribute('class')).not.toMatch(/smallSize/);
			  expect(ps.first().getAttribute('class')).not.toMatch(/mediumSize/);
			  expect(ps.first().getAttribute('class')).not.toMatch(/largeSize/);

			  element(by.model('cursive')).click();
			  expect(ps.first().getAttribute('class')).toMatch(/font1/);

			  element(by.model('boldText')).click();
			  expect(ps.first().getAttribute('class')).toMatch(/font2/);

			  element(by.model('thinText')).click();
			  expect(ps.first().getAttribute('class')).toMatch(/font3/);

				element(by.model('small')).click();
			  expect(ps.first().getAttribute('class')).toMatch(/smallSize/);

			  element(by.model('medium')).click();
			  expect(ps.first().getAttribute('class')).toMatch(/mediumSize/);	

			  element(by.model('large')).click();
			  expect(ps.first().getAttribute('class')).toMatch(/largeSize/);		  
			});
		};



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



			




