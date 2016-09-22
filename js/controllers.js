angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides = [
    'img/hp-banner.jpg',
    'img/hp-banner.jpg',
    'img/hp-banner.jpg',
    'img/hp-banner.jpg'
  ];

  $scope.product=[{
    name:"ENGINEERED PRODUCTS ",
    img:"img/1.jpg"
  },{
    name:"ELECTRICAL CONTACTS ",
    img:"img/2.jpg"
  },{
    name:"SALTS AND CATALYSTS ",
    img:"img/3.jpg"
  },{
    name:"SERVICES ",
    img:"img/4.jpg"
  },{
    name:"Precious Metal management ",
    img:"img/5.jpg"
  }];
})
.controller('AboutUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("about-us");
  $scope.menutitle = NavigationService.makeactive("About Us");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})
.controller('RivetsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("rivets");
  $scope.menutitle = NavigationService.makeactive("Rivets");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.oneAtATime = true;

  $scope.status = {
isCustomHeaderOpen: false,
isFirstOpen: true,
isFirstDisabled: false
};



  $scope.tabs = 'az';
  $scope.classp = 'active-tab';
  $scope.classv = '';


  $scope.tabchanges = function(tabs, a) {

      $scope.tabs = tabs;
      if (a == 1) {

          $scope.classp = "active-tab";
          $scope.classv = '';

      } else {

          $scope.classp = '';
          $scope.classv = "active-tab";
      }
  };
$scope.shape=[
  'img/s1.png',
  'img/s2.png',
  'img/s3.png',
  'img/s4.png'
];
  $scope.product=[{
    name:"LABORATORY APPARATUS  ",
    img:"img/5.jpg"
  },{
    name:"SPUTTER TARGETS ",
    img:"img/6.jpg"
  },{
    name:"PRECIOUS METALGAUZES & Allied Services ",
    img:"img/7.jpg"
  },{
    name:"Platinum/ Rhodium alloy stirrers ",
    img:"img/8.jpg"
  },{
    name:"Precious Metal management ",
    img:"img/9.jpg"
  },{
    name:"SPUTTER TARGETS  ",
    img:"img/10.jpg"
  },{
    name:"Platinum/ Rhodium alloy stirrers",
    img:"img/11.jpg"
  },{
    name:"LABORATORY APPARATUS  ",
    img:"img/5.jpg"
  }];
})
.controller('ProfileCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("profile");
  $scope.menutitle = NavigationService.makeactive("Profile");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();


})
.controller('AssemblyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("assembly");
  $scope.menutitle = NavigationService.makeactive("Assembly");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();


})
.controller('SemiFinishedCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("semi-finished");
  $scope.menutitle = NavigationService.makeactive("Semi-Finished");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();


})
.controller('R&DCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("r&d");
  $scope.menutitle = NavigationService.makeactive("R&D");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.slider=[
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg'

  ]


})
.controller('EngineeringHomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("engineering-home");
  $scope.menutitle = NavigationService.makeactive("engineering-home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.oneAtATime = true;

  $scope.status = {
isCustomHeaderOpen: false,
isFirstOpen: true,
isFirstDisabled: false
};



  $scope.tabs = 'az';
  $scope.classp = 'active-tab';
  $scope.classv = '';


  $scope.tabchanges = function(tabs, a) {

      $scope.tabs = tabs;
      if (a == 1) {

          $scope.classp = "active-tab";
          $scope.classv = '';

      } else {

          $scope.classp = '';
          $scope.classv = "active-tab";
      }
  };
$scope.shape=[
  'img/s1.png',
  'img/s2.png',
  'img/s3.png',
  'img/s4.png'
];
  $scope.product=[{
    name:"LABORATORY APPARATUS  ",
    img:"img/5.jpg"
  },{
    name:"SPUTTER TARGETS ",
    img:"img/6.jpg"
  },{
    name:"PRECIOUS METALGAUZES & Allied Services ",
    img:"img/7.jpg"
  },{
    name:"Platinum/ Rhodium alloy stirrers ",
    img:"img/8.jpg"
  },{
    name:"Precious Metal management ",
    img:"img/9.jpg"
  },{
    name:"SPUTTER TARGETS  ",
    img:"img/10.jpg"
  },{
    name:"Platinum/ Rhodium alloy stirrers",
    img:"img/11.jpg"
  },{
    name:"LABORATORY APPARATUS  ",
    img:"img/5.jpg"
  }];
})
.controller('CareersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("careers");
  $scope.menutitle = NavigationService.makeactive("Careers");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})
.controller('ProductsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("products");
  $scope.menutitle = NavigationService.makeactive("Products");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})
.controller('ElectricalHomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("electrical-home");
  $scope.menutitle = NavigationService.makeactive("Electrical Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.get=[{
    name:"EUROPE",
    email:"contacteu@hp.co.in"
  },{
    name:"REST OF THE WORLD",
    email:"contacteu@hp.co.in"
  }];
  $scope.download=[{
    name:"Download - PRECIOUS METAL COMPOUND"

  },{
    name:"Download - PRECIOUS METAL COMPOUND"

  }];

  $scope.product=[{
    name:"RIVETS ",
    img:"img/a1.jpg"
  },{
    name:"PROFILE",
    img:"img/a2.jpg"
  },{
    name:"WIRES",
    img:"img/a3.jpg"
  },{
    name:"ASSEMBLES",
    img:"img/a4.jpg"
  },{
    name:"BRAZERS",
    img:"img/a5.jpg"
  },{
    name:"R&D ",
    img:"img/a6.jpg"
  }];

})
.controller('CruciblesDishesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("crucibles-dishes");
  $scope.menutitle = NavigationService.makeactive("Crucibles Dishes");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;

    $scope.status = {
  isCustomHeaderOpen: false,
  isFirstOpen: true,
  isFirstDisabled: false
};


    $scope.tabs = 'az';
    $scope.classp = 'active-tab';
    $scope.classv = '';


    $scope.tabchanges = function(tabs, a) {

        $scope.tabs = tabs;
        if (a == 1) {

            $scope.classp = "active-tab";
            $scope.classv = '';

        } else {

            $scope.classp = '';
            $scope.classv = "active-tab";
        }
    };


})
.controller('ServicesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("services");
  $scope.menutitle = NavigationService.makeactive("Services");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
  $.fancybox.close(true);
})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

  $scope.changeLanguage = function() {
    console.log("Language CLicked");

    if (!$.jStorage.get("language")) {
      $translate.use("hi");
      $.jStorage.set("language", "hi");
    } else {
      if ($.jStorage.get("language") == "en") {
        $translate.use("hi");
        $.jStorage.set("language", "hi");
      } else {
        $translate.use("en");
        $.jStorage.set("language", "en");
      }
    }
    //  $rootScope.$apply();
  };


})

;
