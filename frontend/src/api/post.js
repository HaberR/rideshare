var extend = require('../core/extend.js');
var Request = require('./request.js');
//only needed for testing TODO delete this line
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


function Post(url, params) {
  // this.url = url;
  // this.params = params;
  Request.apply(this, arguments);

}
extend(Request, Post);

Post.prototype.convert = JSON.stringify;

Post.prototype.execute = function() {
  var http = new XMLHttpRequest();
  http.open("POST", this.url, true);
  http.setRequestHeader("Content-type","application/json");
  var that = this;
  http.onreadystatechange = function() {//Call a function when the state changes
    if(http.readyState == 4 && http.status == 200) {
      that.success(http.responseText);
    } else {
      that.failure(http.responseText);
    }
  };
  http.send(this.convert(this.params));
};

module.exports = Post;
