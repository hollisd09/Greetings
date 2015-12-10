angular.module('firebase.config', [])
  .constant('FBURL', 'https://greetings.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
