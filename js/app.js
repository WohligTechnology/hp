// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice',
  'pascalprecht.translate',
  'angulartics',
  'angulartics.google.analytics'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('home', {
    url: "/",
    templateUrl: "views/template.html",
    controller: 'HomeCtrl'
  })
    .state('about-us', {
    url: "/about-us",
    templateUrl: "views/template.html",
    controller: 'AboutUsCtrl'
  })
    .state('careers', {
    url: "/careers",
    templateUrl: "views/template.html",
    controller: 'CareersCtrl'
  })
    .state('electrodes', {
    url: "/electrodes",
    templateUrl: "views/template.html",
    controller: 'ElectrodesCtrl'
  })
    .state('press', {
    url: "/press",
    templateUrl: "views/template.html",
    controller: 'PressCtrl'
  })
    .state('know-catalyst', {
    url: "/know-catalyst",
    templateUrl: "views/template.html",
    controller: 'KnowCatalystCtrl'
  })
    .state('metal-catalyst', {
    url: "/metal-catalyst",
    templateUrl: "views/template.html",
    controller: 'MetalCatalystCtrl'
  })
    .state('get-answer', {
    url: "/get-answer",
    templateUrl: "views/template.html",
    controller: 'GetAnswerCtrl'
  })
    .state('platinum-labware', {
    url: "/platinum-labware",
    templateUrl: "views/template.html",
    controller: 'PlatinumLabwareCtrl'
  })
    .state('micro-platinum', {
    url: "/micro-platinum",
    templateUrl: "views/template.html",
    controller: 'MicroPlatinumCtrl'
  })
    .state('engineering-product', {
    url: "/engineering-product",
    templateUrl: "views/template.html",
    controller: 'EngineeringProductCtrl'
  })
    .state('salt-catalysts', {
    url: "/salt-catalysts",
    templateUrl: "views/template.html",
    controller: 'SaltCatalystsCtrl'
  })
    .state('temperature-sensing', {
    url: "/temperature-sensing",
    templateUrl: "views/template.html",
    controller: 'TemperatureSensingCtrl'
  })
    .state('crucibles-dishes', {
    url: "/crucibles-dishes",
    templateUrl: "views/template.html",
    controller: 'CruciblesDishesCtrl'
  })
    .state('electrical-home', {
    url: "/electrical-home",
    templateUrl: "views/template.html",
    controller: 'ElectricalHomeCtrl'
  })
    .state('rivets', {
    url: "/rivets",
    templateUrl: "views/template.html",
    controller: 'RivetsCtrl'
  })
    .state('semi-finished', {
    url: "/semi-finished",
    templateUrl: "views/template.html",
    controller: 'SemiFinishedCtrl'
  })
    .state('r&d', {
    url: "/r&d",
    templateUrl: "views/template.html",
    controller: 'R&DCtrl'
  })
    .state('profile', {
    url: "/profile",
    templateUrl: "views/template.html",
    controller: 'ProfileCtrl'
  })
    .state('assembly', {
    url: "/assembly",
    templateUrl: "views/template.html",
    controller: 'AssemblyCtrl'
  })
    .state('engineering-home', {
    url: "/engineering-home",
    templateUrl: "views/template.html",
    controller: 'EngineeringHomeCtrl'
  })
    .state('products', {
    url: "/products",
    templateUrl: "views/template.html",
    controller: 'ProductsCtrl'
  })
    .state('metal-compound', {
    url: "/metal-compound",
    templateUrl: "views/template.html",
    controller: 'MetalCompoundCtrl'
  })
    .state('services', {
    url: "/services",
    templateUrl: "views/template.html",
    controller: 'ServicesCtrl'
  });
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
               target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});
firstapp.directive('product', function($document) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: "views/directive/product-main.html",
        scope: {
            item: "=value"
        },
        link: function(scope, element, attr) {

        }
    };
});



firstapp.config(function ($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});
