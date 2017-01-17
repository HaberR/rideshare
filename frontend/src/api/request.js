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
            if (Array.isArray(params[key])) {
                params[key].forEach(function(elmt) {
                    paramList.push(key + '=' + elmt);
                });
            } else{
                paramList.push(key + "=" + params[key]);
            }
        }
        paramString = "?" + paramList.join("&");
    } else {
        paramString = params ? "?" + params : "";
    }
    return paramString;
};

Request.prototype.success = function () {};

Request.prototype.failure = function () {};

module.exports = Request;
