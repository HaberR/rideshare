var $ = require('jquery');
require("./components/create-tab/module.js");

var angular = require("angular");
var angularmaterial = require("angular-material");

var main = angular.module("main", [
    'createTab',
    'ngMaterial'
]);

