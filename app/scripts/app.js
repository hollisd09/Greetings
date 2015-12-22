var app = angular
  .module('greetingsApp', ['ngRoute', 'firebase']);
  app.config(function routeConfig($routeProvider) {

    $routeProvider
      .when('/main', {
        templateUrl: 'app/partials/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/yourCards', {
        templateUrl: 'app/partials/yourCards.html',
        controller: 'YourCardsCtrl',
        controllerAs: 'YourCardsCtrl'
      })
      .when('/newCard', {
        templateUrl: 'app/partials/newCard.html',
        controller: 'NewCardCtrl',
        controllerAs: 'newCard'
      })
      .when('/inspiration', {
        templateUrl: 'app/partials/inspiration.html',
        controller: 'CreateCardCtrl',
        controllerAs: 'CreateCardCtrl'
      })
      .when('/valentines', {
        templateUrl: 'app/partials/newCardValentines.html',
        controller: 'CreateCardCtrl',
        controllerAs: 'CreateCardCtrl'
      })
      .when('/christmas', {
        templateUrl: 'app/partials/newCardCreate.html',
        controller: 'CreateCardCtrl',
        controllerAs: 'CreateCardCtrl'
      })
      .when('/birthday', {
        templateUrl: 'app/partials/newCardCreate.html',
        controller: 'CreateCardCtrl',
        controllerAs: 'CreateCardCtrl'
      })
      .when('/newYear', {
        templateUrl: 'app/partials/newCardCreate.html',
        controller: 'CreateCardCtrl',
        controllerAs: 'CreateCardCtrl'
      })
      .when('/viewCard', {
        templateUrl: 'app/partials/viewCard.html',
        controller: 'ViewCardCtrl',
        controllerAs: 'ViewCardCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });

  app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeSuccess', function () {
      $rootScope.logInNav = false;
      if ($location.path() === "/main") {
        $rootScope.logInNav = false;
      } else {
        $rootScope.logInNav = true;
      };
    })
  })


