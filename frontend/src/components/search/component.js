/**
 * Created by rafaelhaber on 1/16/17.
 */

angular.module('search')
    .component('search', {
        templateUrl : "components/search/template.html",
        controller : function ($scope) {
            this.submit = function() {
                // console.log(this);
                var address = [this.address, this.city, this.state, this.postalCode].join(" ");
                $scope.$emit("execute-search",{
                    destination : address,
                    maxFee : this.price,
                    earliest : this.departingFrom,
                    latest : this.departingTo
                });
                // var maxfee = this.price;
                // var earliest = this.departingFrom || "NOW";
                // var latest = this.departingTo || "*";
                // var timeline = "[" + earliest + " TO " + latest + "]";
            }
        }
});