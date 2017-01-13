var $ = require('jquery');
require("./components/create-tab/module.js");
//require("./components/create-tab/create-tab.component.js");

var angular = require("angular");

angular.module("main", [
    'createTab'
]);

$(".tablinks").click(function (evt) {
  var tabname = evt.target.id;
  var i, tabcontent, tablinks;
  tabcontent = $(".tabcontent");
  
  /*
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }*/
  tablinks = $(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  //evt.target.style.display = "block";
  evt.currentTarget.className += " active";

});
