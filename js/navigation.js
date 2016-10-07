var adminurl = "http://localhost:1337/";
if (isproduction) {
  adminURL = "http://www.wohlig.co.in/demo/index.php";
} else {
  adminURL = "http://localhost/demo/index.php";
}

var imgurl = adminurl + "upload/";
var imgpath = imgurl + "readFile";
var uploadurl = imgurl;

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
    name: "About Us",
    classis: "active",
    anchor: "about-us",
    // subnav: [{
    //   name: "Subnav1",
    //   classis: "active",
    //   anchor: "home"
    // }]
  },
  // {
  //   name: "Products",
  //   classis: "active",
  //   anchor: "products",
  // }, {
  //   name: "Services ",
  //   classis: "active",
  //   anchor: "services ",
  // }, {
  //   name: "Careers ",
  //   classis: "active",
  //   anchor: "careers ",
  // },
  {
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
    getHomeslider: function(callback) {
      $http({
        url: adminurl + 'Home/search',
        method: 'POST',
        withCredentials: true
      }).success(callback);
    },
    getReaction: function(callback) {
      $http({
        url: adminurl + 'Reaction/search',
        method: 'POST',
        withCredentials: true
      }).success(callback);
    },

    getMetal: function(_id,callback) {
      var data={
        _id:_id
      }
      $http({
        url: adminurl + 'Metal/getMetal',
        method: 'POST',
        data:data,
        withCredentials: true
      }).success(callback);
    },
///////////////////////////////////////////
    getMetalContent: function(_id,callback) {
      console.log(_id);
      var data={
        _id:_id
      }
      $http({
        url: adminurl + 'Metal/getOne',
        method: 'POST',
        data:data,
        withCredentials: true
      }).success(callback);
    },

    KnowCat: function(callback) {
      $http({
        url: adminurl + 'KnowCat/search',
        method: 'POST',
        withCredentials: true
      }).success(callback);

    },
  };
});
