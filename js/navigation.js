var adminURL = "";
if(isproduction)
{
  adminURL =  "http://www.wohlig.co.in/demo/index.php";
}
else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "About Us",
    classis: "active",
    anchor: "about-us",
    // subnav: [{
    //   name: "Subnav1",
    //   classis: "active",
    //   anchor: "home"
    // }]
  },{
    name: "Products",
    classis: "active",
    anchor: "products",
  },{
    name: "Services ",
    classis: "active",
    anchor: "services ",
  },{
    name: "Careers ",
    classis: "active",
    anchor: "careers ",
  },{
    name: "Contact Us",
    classis: "active",
    anchor: "contact-us",
  }];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

  };
});
