angular
  .module('greetingsApp')
  .controller('appendable', function($rootScope) {

	$(function() { 

    var yo = $rootScope.canvas
    console.log(yo)
    // Convert and download as image 
    $("#img-out").append(yo)

	  
	});
});

