require("./components/create-tab/module.js");
require("./components/browse-tab/module.js");

var angular = require("angular");
require("angular-material");

var main = angular.module("main", [
    'createTab',
    'browseTab',
    'ngMaterial'
]);

