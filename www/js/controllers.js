angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };



  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('progCtrl', function($scope, ones, twos, threes, fours, exs) {
  $scope.ones = ones.all();
  $scope.twos = twos.all();
  $scope.threes = threes.all();
  $scope.fours = fours.all();
  $scope.exs = exs.all();


})

.controller('homeCtrl', function($scope) {
})
.controller('dashCtrl', function($scope) {
})

.controller('aboutCtrl', function($scope) {
})

//ones Section
.controller('onesCtrl', function($scope, ones) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.ones = ones.all();
  $scope.remove = function(one) {
    ones.remove(one);
  }
})

//Classes Section
.controller('twosCtrl', function($scope, twos) {
  $scope.twos = twos.all();
  $scope.remove = function(two) {
    twos.remove(two);
  }
})

//Background Section
.controller('threesCtrl', function($scope, threes) {
  $scope.threes = threes.all();
  $scope.remove = function(three) {
    threes.remove(three);
  }
})

//Background Section
.controller('foursCtrl', function($scope, fours) {
  $scope.fours = fours.all();
  $scope.remove = function(four) {
    fours.remove(four);
  }
})

//Background Section
.controller('exsCtrl', function($scope, exs) {
  $scope.exs = exs.all();
  $scope.remove = function(ex) {
    exs.remove(ex);
  }
})
























;
