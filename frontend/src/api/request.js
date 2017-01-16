/**
 * Created by rafaelhaber on 1/15/17.
 */
function Request(url, params) {
    this.url = url;
    this.params = params;
}

Request.prototype.convert = function(params) {
    var paramString;
    if (typeof params == 'object') {
        var paramList = [];
        for (var key in params) {
            paramList.push(key + "=" + params[key]);
        }
        paramString = "?" + paramList.join("&");
    } else {
        paramString = params ? "?" + params : "";
    }
    console.log(paramString);
    return paramString;
};

Request.prototype.success = function () {};

Request.prototype.failure = function () {console.log(arguments)};

module.exports = Request;
