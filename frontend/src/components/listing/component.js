/**
 * Created by rafaelhaber on 1/15/17.
 */
var Get = require("../../api/get.js");

/*Taken from
 http://stackoverflow.com/questions/4511705/how-to-parse-json-to-receive-a-date-object-in-javascript
 */
function dateTimeReviver(key, value) {
    var d;
    if (typeof value === 'string') {
        d = new Date(value);
        if (!isNaN(d.getTime())) {
            console.log('converted');
            return d;
        }
    }
    return value;
}

function mapping(obj) {
    var returned = {};
    for (var prop in obj) {
        returned[prop] = Array.isArray(obj[prop]) ? obj[prop][0] : obj[prop];
    }
    return returned;
}

/*Duplicate code... poor form.
 */
function locReq (address, key) {
    var url = "https://maps.googleapis.com/maps/api/geocode/json";
    var params = {
        key : key || "AIzaSyB-v_-f7o1v3kQZDsAebvK8wdoyjh51cDs",
        address : address
    };
    return new Get(url,params);
}


angular.module('listing').
    component('listingcomp', {
    templateUrl : "components/listing/template.html",
    controller : function ($scope) {
        $scope.selected = [];

        var url = "http://localhost:8983/solr/rideshare/query";
        var params = {
            q : "*:*"
        };

        function handleResponse(textResponse) {
            var obj = JSON.parse(textResponse,dateTimeReviver).response.docs;
            $scope.entries = obj.map(mapping);
            console.log(obj.map(mapping));
            $scope.$apply();
        }

        var request = new Get(url, params);
        request.success = handleResponse;
        request.execute();

        this.clicked = function(entry) {
            $scope.$emit('selected-entry',entry);
        };

        $scope.$on('executing-search', function(event, params) {
            var req_loc = locReq(params.destination);
            var earliest = params.earliest ? params.earliest.toISOString() : "NOW";
            var latest = params.latest ? params.latest.toISOString() : "*";
            var max = params.maxFee || "*";
            req_loc.success = function(respText) {
                var loc = JSON.parse(respText).results[0].geometry.location;
                var prms = {
                    q : "*:*",
                    fq : [
                        "{!geofilt sfield=destination}",
                        "cost:[* TO " + max + "]",
                        "date:[" + earliest + " TO " + latest + "]"
                        ],
                    pt : loc.lat + " " + loc.lng,
                    d : 20
                };
                var request = new Get(url, prms);
                request.success = handleResponse;
                request.execute();
            };
            req_loc.execute();
        });
    }
});