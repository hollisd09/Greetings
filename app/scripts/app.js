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
        controllerAs: 'yourCards'
      })
      .when('/newCard', {
        templateUrl: 'app/partials/newCard.html',
        controller: 'NewCardCtrl',
        controllerAs: 'newCard'
      })
      .when('/inspiration', {
        templateUrl: 'app/partials/inspiration.html',
        controller: 'draggable',
        controllerAs: 'draggable'
      })
      .when('/valentines', {
        templateUrl: 'app/partials/newCardValentines.html',
        controller: 'draggable',
        controllerAs: 'draggable'
      })
      .when('/christmas', {
        templateUrl: 'app/partials/newCardCreate.html',
        controller: 'draggable',
        controllerAs: 'draggable'
      })
      .when('/birthday', {
        templateUrl: 'app/partials/newCardCreate.html',
        controller: 'draggable',
        controllerAs: 'draggable'
      })
      .when('/newYear', {
        templateUrl: 'app/partials/newCardCreate.html',
        controller: 'draggable',
        controllerAs: 'draggable'
      })
      .when('/viewCard', {
        templateUrl: 'app/partials/viewCard.html',
        controller: '',
        controllerAs: ''
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


