var app = angular.module('greetingsApp', ['ngRoute', 'firebase']);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/partials/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/yourCards', {
        templateUrl: 'app/partials/yourCards.html',
        controller: 'YourCardsCtrl',
        controllerAs: 'yourCards'
      })
      .when('/newCard', {
        templateUrl: 'app/partials/newCard.html',
        controller: 'NewCardCtrl',
        controllerAs: 'newCard'
      })
      .when('/inspiration', {
        templateUrl: 'app/partials/inspiration.html',
        controller: 'InspirationCtrl',
        controllerAs: 'inspiration'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeSuccess', function () {
      $rootScope.logInNav = false;
      if ($location.path() === "/") {
        $rootScope.logInNav = false;
      } else {
        $rootScope.logInNav = true;
      };
    })
  })


