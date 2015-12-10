angular.module('firebase.config', [])
  .constant('FBURL', 'https://dampinterest.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook','twitter'])

  .constant('loginRedirectPath', '/login');
