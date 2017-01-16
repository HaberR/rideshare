var Get = require('../../api/get.js');
var url = "https://maps.googleapis.com/maps/api/geocode/json";
var params = {
    key : "AIzaSyB-v_-f7o1v3kQZDsAebvK8wdoyjh51cDs",
    address : "335 Sycamore Ave Merion Station PA 19066"
};
var request = new Get(url,params);
request.success = function() {console.log(arguments)};
request.failure = function() {console.log(arguments)};
request.execute();