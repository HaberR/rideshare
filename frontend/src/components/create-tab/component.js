var angular = require('angular');
var Get = require('../../api/get.js');
var Post = require("../../api/post.js");

function locReq (address, key) {
  var url = "https://maps.googleapis.com/maps/api/geocode/json";
  var params = {
    key : key || "AIzaSyB-v_-f7o1v3kQZDsAebvK8wdoyjh51cDs",
    address : address
  };
  return new Get(url,params);
}

angular.module('createTab').
  component('createTab', {
    templateUrl: "components/create-tab/template.html",
    controller: function($scope) {
      this.submit = function () {

        var address = [this.address, this.city, this.state, this.postalCode].join(" ");

        var solr_req = {
          name : this.name,
          city : this.city,
          comments : this.comments,
          cost : Number(this.price),
          date : new Date(this.departureDate),
          phone : this.phone,
          email : this.email
        };

        var req = locReq(address);
        req.success = function(respText) {
          var loc = JSON.parse(respText).results[0].geometry.location;
          var url = "http://localhost:8983/solr/rideshare/update/json/docs?commit=true";
          solr_req.destination = loc.lat + " " + loc.lng;
          new Post(url, solr_req).execute();
        };
        req.execute();
          
      }
    }
  });
