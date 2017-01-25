// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider



    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })

    .state('app.progress', {
      url: '/progress',
      views: {
        'menuContent': {
          templateUrl: 'templates/progress.html',
          controller: 'progCtrl'
        }
      }
    })

    .state('app.projects', {
      url: '/projects',
      views: {
        'menuContent': {
          templateUrl: 'templates/projects.html',
          controller: 'progCtrl'
        }
      }
    })

    .state('app.dash', {
      url: '/dash',
      views: {
        'menuContent': {
          templateUrl: 'templates/dash.html',
          controller: 'dashCtrl'
        }
      }
    })

    .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html',
          controller: 'aboutCtrl'
        }
      }
    })

//ones
  .state('app.ones', {
        url: '/ones',
        views: {
          'menuContent': {
            templateUrl: 'templates/app-ones.html',
            controller: 'onesCtrl'
          }
        }
      })


//Classes
  .state('app.twos', {
        url: '/twos',
        views: {
          'menuContent': {
            templateUrl: 'templates/app-twos.html',
            controller: 'twosCtrl'
          }
        }
      })

//Background
  .state('app.threes', {
        url: '/threes',
        views: {
          'menuContent': {
            templateUrl: 'templates/app-threes.html',
            controller: 'threesCtrl'
          }
        }
      })

  //Classes
    .state('app.fours', {
          url: '/fours',
          views: {
            'menuContent': {
              templateUrl: 'templates/app-fours.html',
              controller: 'foursCtrl'
            }
          }
        })


  //Classes
    .state('app.exs', {
          url: '/exs',
          views: {
            'menuContent': {
              templateUrl: 'templates/app-exs.html',
              controller: 'exsCtrl'
            }
          }
        })






;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dash');
});
