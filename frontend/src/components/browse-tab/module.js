/**
 * Created by rafaelhaber on 1/16/17.
 */
var angular = require('angular');
require("../listing/module.js");
require("../search/module.js");
require("../results/module.js");
angular.module('browseTab', [
    'listing',
    'search',
    'results'
]);
require("./component.js");