/**
 * Created by rafaelhaber on 1/15/17.
 */
var Post = require("../../api/post.js");
var url = "http://localhost:8983/solr/rideshare/update/json/docs?commit=true";
var params = {
    destination : "44.070804 -75.090172",
    comments : "sweet, looks good",
    cost : 34,
    email : "N/A",
    phone : "283-555-3223"
};
var request = new Post(url, params);
request.success = function () {console.log(arguments)};
request.execute();
