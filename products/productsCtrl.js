angular.module('app')
.controller('productsCtrl', function($scope, productsService, $stateParams){



  if($stateParams.type === 'shoes'){

    $scope.products = productsService.shoeData


  } else if ($stateParams.type === 'socks') {

    $scope.products = productsService.sockData

  }






})
