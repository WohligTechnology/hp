angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.select', 'ksSwiper'])

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

        $scope.product = [{
            name: "ENGINEERED PRODUCTS ",
            img: "img/1.jpg",
            link: "engineering-home"
        }, {
            name: "ELECTRICAL CONTACTS ",
            img: "img/2.jpg",
            link: "electrical-home"
        }, {
            name: "SALTS AND CATALYSTS ",
            img: "img/3.jpg",
            link: "salt-catalysts"
        }, {
            name: "Precious Metal management ",
            img: "img/4a.jpg",
            link: "pre-metal-management"
        }, {
            name: "nitro technology devision",
            img: "img/hp-ni.jpg",
            link: "technology-devision"
        }, {
            name: "SERVICES (Coming Soon)",
            img: "img/4.jpg",
            link: ""
        }];
        NavigationService.getHomeslider(function(data) {
            console.log(data);
            $scope.banner = data.data.results;
            console.log($scope.banner);
        });
    })
    .controller('AboutUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("about-us");
        $scope.menutitle = NavigationService.makeactive("About Us");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

    })
    .controller('BrochureCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("brochure");
        $scope.menutitle = NavigationService.makeactive("Brochure");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

        $scope.brochure = [
            "img/b1.jpg",
            "img/b2.jpg",
            "img/b3.jpg",
            "img/b4.jpg",
            "img/b1.jpg",
            "img/b2.jpg",
            "img/b3.jpg"
        ]

    })
    .controller('JewelleryIndustryCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("jewellery-industry");
        $scope.menutitle = NavigationService.makeactive("Jewellery Industry");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

        $scope.glass = [{
            img: "img/Jewellery/1.jpg",
            name: "V-BOTTOM CRUCIBLES"
        }, {
            img: "img/Jewellery/3.jpg",
            name: "OPEN-ENDED TUBES"
        }, {
            img: "img/Jewellery/4.jpg",
            name: "FLARED TUBES"
        }, {
            img: "img/Jewellery/5.jpg",
            name: "V-BOTTOM CRUCIBLES"
        }, {
            img: "img/Jewellery/6.jpg",
            name: "V-BOTTOM CRUCIBLES"
        }, {
            img: "img/Jewellery/7.jpg",
            name: "V-BOTTOM CRUCIBLES"
        }];

    })
    .controller('NobleMetalCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("noble-metal");
        $scope.menutitle = NavigationService.makeactive("Noble Metal");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

        $scope.tabs = 'az';
        $scope.classp = 'active-tab';
        $scope.classv = '';
        $scope.classq = '';


        $scope.tabchanges = function(tabs, a) {

            $scope.tabs = tabs;
            if (a == 1) {

                $scope.classp = "active-tab";
                $scope.classv = '';
                $scope.classq = '';

            } else if (a == 2) {

                $scope.classp = '';
                $scope.classq = '';
                $scope.classv = "active-tab";
            } else {

                $scope.classp = '';
                $scope.classv = '';
                $scope.classq = "active-tab";
            }
        };

    })
    .controller('SpinnerettesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("spinnerettes");
        $scope.menutitle = NavigationService.makeactive("Spinnerettes");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";
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
    .controller('GlassIndustryCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("glass-industry");
        $scope.menutitle = NavigationService.makeactive("Glass Industry");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

        $scope.oneAtATime = true;
        $scope.metal = [];
        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };
        $scope.glass = [{
            img: "img/Glass_F&B_3.jpg",
            name: "V-BOTTOM CRUCIBLES"
        }, {
            img: "img/Glass_F&B_4.jpg",
            name: "OPEN-ENDED TUBES"
        }, {
            img: "img/Glass_F&B_5.jpg",
            name: "FLARED TUBES"
        }, {
            img: "img/Glass_F&B_6.jpg",
            name: "V-BOTTOM CRUCIBLES"
        }, {
            img: "img/Glass-FB.jpg",
            name: "V-BOTTOM CRUCIBLES"
        }];

    })
    .controller('KnowCatalystCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("know-catalyst");
        $scope.menutitle = NavigationService.makeactive("Know Catalyst");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

                $scope.oneAtATime = true;
                $scope.metal=[];
                $scope.status = {
                    isCustomHeaderOpen: false,
                    isFirstOpen: true,
                    isFirstDisabled: false
                };

                $scope.tabs = 'az';
                $scope.classp = 'active-tab';
                $scope.classv = '';
                $scope.classq = '';


                $scope.tabchanges = function (index) {
                    _.each($scope.metal,function (key) {
                      // body...
                      if(key._id == index){
                        key.active= true;
                      }else{
                        key.active= false;
                      }
                    });


                    NavigationService.getMetalContent(index,function(data){
                      console.log(data);
                      $scope.metalContent=data.data.content;
                      console.log($scope.metalContent);
                    });


                };

                NavigationService.getReaction(function(data){
                  console.log(data);
                  $scope.data=data.data.results;
                  console.log($scope.data);
                });

                NavigationService.KnowCat(function(data){
                  console.log(data);
                  $scope.knowcat=data.data.results;
                  console.log($scope.knowcat);
                });

        $scope.reactionId=true;
                $scope.findMetal=function(id){
                  NavigationService.getMetal(id,function(data){
                    console.log(data);
                    $scope.metal=data.data;
                    _.each($scope.metal,function (key) {
                      // body...
                      key.active= false;
                    })
                    $scope.tabchanges($scope.metal[0]._id);
                    $scope.reactionId=false;
                  });
                };

        NavigationService.getReaction(function(data) {
            console.log(data);
            $scope.data = data.data.results;
            console.log($scope.data);
        });

        $scope.reactionId = true;
        $scope.findMetal = function(id) {
            NavigationService.getMetal(id, function(data) {
                console.log(data);
                $scope.metal = data.data;
                _.each($scope.metal, function(key) {
                    // body...
                    key.active = false;
                })
                $scope.tabchanges($scope.metal[0]._id);
                console.log($scope.metal.name);
                $scope.reactionId = false;
            });
        };
    })
    .controller('MetalCatalystCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("metal-catalyst");
        $scope.menutitle = NavigationService.makeactive("Metal Catalyst");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

    })
    .controller('GetAnswerCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("get-answer");
        $scope.menutitle = NavigationService.makeactive("get-answer");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

        $scope.dn = [{
            name: "Download Form ",
            img: "img/d1.png",
            no: "1"
        }, {
            name: "FILL THE FORM ",
            img: "img/d2.png",
            no: "2"
        }, {
            name: "UPLOAD THEFORM ",
            img: "img/d3.png",
            no: "3"
        }];

    })
    .controller('PressCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("press");
        $scope.menutitle = NavigationService.makeactive("Press");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

        $scope.tabs = '2016';
        $scope.classa = 'active-tab';
        $scope.classb = '';
        $scope.classc = '';
        $scope.classd = '';
        $scope.classe = '';
        $scope.classf = '';
        $scope.classg = '';
        $scope.classh = '';
        $scope.classi = '';
        $scope.classj = '';
        $scope.classk = '';

        $scope.tabchanges = function(tabs, a) {
            $scope.tabs = tabs;
            if (a == 1) {
                $scope.classa = "active-tab";
                $scope.classb = '';
                $scope.classc = '';
                $scope.classd = '';
                $scope.classe = '';
                $scope.classf = '';
                $scope.classg = '';
                $scope.classh = '';
                $scope.classi = '';
                $scope.classj = '';
                $scope.classk = '';
            } else if (a == 2) {

                $scope.classa = '';
                $scope.classb = "active-tab";
                $scope.classc = "";
                $scope.classd = '';
                $scope.classe = '';
                $scope.classf = '';
                $scope.classg = '';
                $scope.classh = '';
                $scope.classi = '';
                $scope.classj = '';
                $scope.classk = '';
            } else if (a == 3) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "active-tab";
                $scope.classd = '';
                $scope.classe = '';
                $scope.classf = '';
                $scope.classg = '';
                $scope.classh = '';
                $scope.classi = '';
                $scope.classj = '';
                $scope.classk = '';
            } else if (a == 4) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "";
                $scope.classd = 'active-tab';
                $scope.classe = '';
                $scope.classf = '';
                $scope.classg = '';
                $scope.classh = '';
                $scope.classi = '';
                $scope.classj = '';
                $scope.classk = '';
            } else if (a == 5) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "";
                $scope.classd = '';
                $scope.classe = 'active-tab';
                $scope.classf = '';
                $scope.classg = '';
                $scope.classh = '';
                $scope.classi = '';
                $scope.classj = '';
                $scope.classk = '';
            } else if (a == 6) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "";
                $scope.classd = '';
                $scope.classe = '';
                $scope.classf = 'active-tab';
                $scope.classg = '';
                $scope.classh = '';
                $scope.classi = '';
                $scope.classj = '';
                $scope.classk = '';
            } else if (a == 7) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "";
                $scope.classd = '';
                $scope.classe = '';
                $scope.classf = '';
                $scope.classg = 'active-tab';
                $scope.classh = '';
                $scope.classi = '';
                $scope.classj = '';
                $scope.classk = '';
            } else if (a == 8) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "";
                $scope.classd = '';
                $scope.classe = '';
                $scope.classf = '';
                $scope.classg = '';
                $scope.classh = 'active-tab';
                $scope.classi = '';
                $scope.classj = '';
                $scope.classk = '';
            } else if (a == 9) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "";
                $scope.classd = '';
                $scope.classe = '';
                $scope.classf = '';
                $scope.classg = '';
                $scope.classi = 'active-tab';
                $scope.classh = '';
                $scope.classj = '';
                $scope.classk = '';
            } else if (a == 10) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "";
                $scope.classd = '';
                $scope.classe = '';
                $scope.classf = '';
                $scope.classg = '';
                $scope.classj = 'active-tab';
                $scope.classi = '';
                $scope.classh = '';
                $scope.classk = '';
            } else if (a == 11) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "";
                $scope.classd = '';
                $scope.classe = '';
                $scope.classf = '';
                $scope.classg = '';
                $scope.classk = 'active-tab';
                $scope.classi = '';
                $scope.classj = '';
                $scope.classh = '';
            }
        };

        $scope.get = [{
            year: "2016",
            class: "classa",
            name: "2016",
            id: "1"
        }, {
            year: "2015",
            class: "classb",
            name: "2015",
            id: "2"
        }, {
            year: "2014",
            class: "classc",
            name: "2014",
            id: "3"
        }, {
            year: "2013",
            class: "classd",
            name: "2013",
            id: "4"
        }, {
            year: "2012",
            class: "classe",
            name: "2012",
            id: "5"
        }, {
            year: "2011",
            class: "classf",
            name: "2011",
            id: "6"
        }, {
            year: "2000",
            class: "classg",
            name: "2000",
            id: "7"
        }, {
            year: "2009",
            class: "classh",
            name: "2009",
            id: "8"
        }, {
            year: "2008",
            class: "classi",
            name: "2008",
            id: "9"
        }, {
            year: "2007",
            class: "classj",
            name: "2007",
            id: "10"
        }, {
            year: "2006",
            class: "classk",
            name: "2007",
            id: "11"
        }];

        $scope.img = [
            'img/pr1.jpg',
            'img/pr2.jpg',
            'img/pr3.jpg',
            'img/pr4.jpg',
            'img/pr1.jpg',
            'img/pr2.jpg',
            'img/pr3.jpg',
            'img/pr4.jpg'
        ];

    })
    .controller('RivetsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("rivets");
        $scope.menutitle = NavigationService.makeactive("Rivets");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

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
        $scope.shape = [
            'img/s1.png',
            'img/s2.png',
            'img/s3.png',
            'img/s4.png'
        ];
        $scope.product = [{
            name: "LABORATORY APPARATUS  ",
            img: "img/5.jpg"
        }, {
            name: "SPUTTER TARGETS ",
            img: "img/6.jpg"
        }, {
            name: "PRECIOUS METALGAUZES & Allied Services ",
            img: "img/7.jpg"
        }, {
            name: "Platinum/ Rhodium alloy stirrers ",
            img: "img/8.jpg"
        }, {
            name: "Precious Metal management ",
            img: "img/9.jpg"
        }, {
            name: "SPUTTER TARGETS  ",
            img: "img/10.jpg"
        }, {
            name: "Platinum/ Rhodium alloy stirrers",
            img: "img/11.jpg"
        }, {
            name: "LABORATORY APPARATUS  ",
            img: "img/5.jpg"
        }];
    })
    .controller('ProfileCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("profile");
        $scope.menutitle = NavigationService.makeactive("Profile");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";
        $scope.oneAtATime = true;

        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };


    })
    .controller('AssemblyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("assembly");
        $scope.menutitle = NavigationService.makeactive("Assembly");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";


    })
    .controller('SaltCatalystsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("salt-catalysts");
        $scope.menutitle = NavigationService.makeactive("Salt Catalysts");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

        $scope.get = [{
            name: "EUROPE",
            email: " Peterclaes@catavserv.co.uk"
        }, {
            name: "REST OF THE WORLD",
            email: "catalyst@hp.co.in"
        }];
        $scope.download = [{
            name: "Download - PRECIOUS METAL COMPOUND"

        }, {
            name: "Download - PRECIOUS METAL COMPOUND"

        }];



    })
    .controller('ContactUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("contact-us");
        $scope.menutitle = NavigationService.makeactive("Contact US");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";



    })
    .controller('ElectrodesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("electrodes");
        $scope.menutitle = NavigationService.makeactive("Electrodes");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

        $scope.tabs = 'az';
        $scope.classp = 'active-tab';
        $scope.classv = '';
        $scope.classq = '';


        $scope.tabchanges = function(tabs, a) {

            $scope.tabs = tabs;
            if (a == 1) {

                $scope.classp = "active-tab";
                $scope.classv = '';
                $scope.classq = '';

            } else if (a == 2) {

                $scope.classp = '';
                $scope.classq = '';
                $scope.classv = "active-tab";
            } else {

                $scope.classp = '';
                $scope.classv = '';
                $scope.classq = "active-tab";
            }
        };

        $scope.shape = [
            'img/e1.png',
            'img/e2.png',
            'img/e3.png'
        ];
    })
    .controller('TemperatureSensingCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("temperature-sensing");
        $scope.menutitle = NavigationService.makeactive("Temperature Sensing");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";


    })
    .controller('PlatinumLabwareCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("platinum-labware");
        $scope.menutitle = NavigationService.makeactive("Platinum Labware");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";
        $scope.oneAtATime = true;

        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };


    })
    .controller('MicroPlatinumCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("micro-platinum");
        $scope.menutitle = NavigationService.makeactive("Micro Platinum");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

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
    .controller('EngineeringProductCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("engineering-product");
        $scope.menutitle = NavigationService.makeactive("Engineering Product");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.product = [{
            name: "Crucibles & Dishes ",
            img: "img/en1.png",
            link: "crucibles-dishes"
        }, {
            name: "elctrodes",
            img: "img/en2.png",
            link: "electrodes"
        }, {
            name: "Other Platinum Labware",
            img: "img/en3.png",
            link: "platinum-labware"
        }, {
            name: "Micro Chemical Apparatus",
            img: "img/en4.png",
            link: "micro-platinum"
        }, {
            name: "Temperature Sensing Products",
            img: "img/en5.png",
            link: "temperature-sensing"
        }];


    })
    .controller('SemiFinishedCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("semi-finished");
        $scope.menutitle = NavigationService.makeactive("Semi-Finished");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

        $scope.oneAtATime = true;

        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };

        $scope.tabs = 'az';
        $scope.classp = 'active-tab';
        $scope.classv = '';
        $scope.classq = '';


        $scope.tabchanges = function(tabs, a) {

            $scope.tabs = tabs;
            if (a == 1) {

                $scope.classp = "active-tab";
                $scope.classv = '';
                $scope.classq = '';

            } else if (a == 2) {

                $scope.classp = '';
                $scope.classq = '';
                $scope.classv = "active-tab";
            } else {

                $scope.classp = '';
                $scope.classv = '';
                $scope.classq = "active-tab";
            }
        };

    })
    .controller('R&DCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("r&d");
        $scope.menutitle = NavigationService.makeactive("R&D");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

        $scope.slider = [
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
        TemplateService.header = "views/header2.html";

        $scope.oneAtATime = true;

        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };

        $scope.get = [ {
            name: "",
            email: "info@hp.co.in"
        }];
        $scope.download = [{
            name: "Download - PRECIOUS METAL COMPOUND"

        }];


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
        $scope.shape = [
            'img/s1.png',
            'img/s2.png',
            'img/s3.png',
            'img/s4.png'
        ];
        $scope.product = [{
            name: "LABORATORY APPARATUS",
            img: "img/5.jpg",
            link: "engineering-product"
        }, {
            name: "PRECIOUS METAL Spinnerettes",
            img: "img/6.jpg",
            link: ""
        }, {
            name: "glass industry",
            img: "img/7.jpg",
            link: "glass-industry"
        }, {
            name: "noble metal bare wires ",
            img: "img/8.jpg",
            link: "noble-metal"
        }, {
            name: "jewellery industry ",
            img: "img/9.jpg",
            link: "jewellery-industry"
        }, {
            name: "platinum Labware guidelines",
            img: "img/10.jpg",
            link: ""
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
    .controller('MetalCompoundCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("metal-compound");
        $scope.menutitle = NavigationService.makeactive("Metal-Compound");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

    })
    .controller('TechnologyDevisionCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("technology-devision");
        $scope.menutitle = NavigationService.makeactive("Technology-Devision");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

        $scope.oneAtATime = true;

        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };

        $scope.data = [{
            img: "img/t1.jpg"
        }, {
            img: "img/t2.jpg"
        }, {
            img: "img/t3.jpg"
        }];

        $scope.data1 = [{
            img: "img/ammonia1.jpg"
        }, {
            img: "img/ammonia2.jpg"
        }, {
            img: "img/ammonia3.jpg"
        }];

        $scope.data2 = [{
            img: "img/rhodium.jpg"
        }, {
            img: "img/rhodium2.jpg"
        }, {
            img: "img/rhodium3.jpg"
        }, {
            img: "img/rhodium4.jpg"

        }];

        $scope.data3 = [{
            img: "img/corrugated.jpg"
        }, {
            img: "img/corrugated2.jpg"
        }, {
            img: "img/corrugated3.jpg"
        }, {
            img: "img/corrugated4.jpg"

        }];

        $scope.get = [{
            //     name: "EUROPE",
            //     email: "contacteu@hp.co.in"
            // }, {
            name: "",
            email: "nitrocat@hp.co.in"
        }];
        // $scope.download = [{
        //     name: "Download - PRECIOUS METAL COMPOUND"

        // }, {
        //     name: "Download - PRECIOUS METAL COMPOUND"

        // }];

    })
    .controller('ElectricalHomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("electrical-home");
        $scope.menutitle = NavigationService.makeactive("Electrical Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

        $scope.get = [{
            name: "REST OF THE WORLD",
            email: "contacts@hp.co.in"
        }];
        $scope.download = [{
            name: "Download - PRECIOUS METAL COMPOUND"

        }, {
            name: "Download - PRECIOUS METAL COMPOUND"

        }];

        $scope.product = [{

            name: "SEMI FINISHED products",
            link: "semi-finished",
            img: "img/a5.jpg"
        }, {
            name: "RIVETS ",
            link: "rivets ",
            img: "img/a1.jpg"

        }, {
            name: "PROFILE",
            link: "profile",
            img: "img/a2.jpg"

        }, {
            name: "ASSEMBLES",
            link: "assembly",
            img: "img/a3.jpg"

        }, {
            name: "R&D",
            link: "r&d",
            img: "img/a4.jpg"
        }, {
            name: "",
            link: "",
            img: "img/hp-none2.jpg"
        }];

    })
    .controller('CruciblesDishesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("crucibles-dishes");
        $scope.menutitle = NavigationService.makeactive("Crucibles Dishes");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";
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
        TemplateService.header = "views/header2.html";

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
        $scope.get = [{
            name: "EUROPE",
            email: "contacteu@hp.co.in"
        }, {
            name: "REST OF THE WORLD",
            email: "contacteu@hp.co.in"
        }];
        $scope.download = [{
            name: "Download - PRECIOUS METAL COMPOUND"

        }];

    })
    .controller('MetalManagementCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("pre-metal-management");
        $scope.menutitle = NavigationService.makeactive("Metal Management");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/header2.html";

        $scope.get = [{
            name: "EUROPE",
            email: "contacteu@hp.co.in"
        }, {
            name: "REST OF THE WORLD",
            email: "contacts@hp.co.in"
        }];
        $scope.download = [{
            name: "Download - PRECIOUS METAL COMPOUND"

        }, {
            name: "Download - PRECIOUS METAL COMPOUND"

        }];
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
