angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  // $urlRouterProvider.when('' , '/');
  $urlRouterProvider.otherwise('/');


  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .state('products', {
      url: '/products/:type',
      templateUrl: 'products/productTmpl.html',
      controller: 'productsCtrl'

    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'settings/settingsTmpl.html',
      controller: 'settingsCtrl'
    })

})
