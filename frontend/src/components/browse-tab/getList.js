/**
 * Created by rafaelhaber on 1/15/17.
 */

var Get = require('../../api/get.js');
var url = "http://localhost:8983/solr/rideshare/query";
var params = {
    q : "*:*"
};

var request = new Get(url, params);
request.success = function () { console.log(arguments) };
request.failure = function() { console.log(arguments)};
request.execute();