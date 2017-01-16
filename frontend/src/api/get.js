/**
 * Created by rafaelhaber on 1/15/17.
 */
var extend = require('../core/extend.js');
var Request = require('./request.js');
//only needed for testing TODO delete this line
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function Get(url, params) {
    Request.apply(this, arguments);
}

extend(Request, Get);

Get.prototype.execute = function () {
    var http = new XMLHttpRequest();
    http.open("GET", this.url + this.convert(this.params) , true);
    var that = this;
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            that.success(http.responseText);
        } else {
            that.failure(http.responseText);
        }
    };
    http.send(null);
};

module.exports = Get;