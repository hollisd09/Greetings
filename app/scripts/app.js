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
        controller: 'InspirationCtrl',
        controllerAs: 'inspiration'
      })
      .when('/valentines', {
        templateUrl: 'app/partials/newCardCreate.html',
        controller: 'ValentinesCtrl',
        controllerAs: 'valentines'
      })
      .when('/christmas', {
        templateUrl: 'app/partials/newCardCreate.html',
        controller: 'ChristmasCtrl',
        controllerAs: 'christmas'
      })
      .when('/birthday', {
        templateUrl: 'app/partials/newCardCreate.html',
        controller: 'BirthdayCtrl',
        controllerAs: 'birthday'
      })
      .when('/newYear', {
        templateUrl: 'app/partials/newCardCreate.html',
        controller: 'NewYearCtrl',
        controllerAs: 'newYear'
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


