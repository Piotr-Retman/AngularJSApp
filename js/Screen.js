/**
 * Created by retman on 17.12.16.
 */
angular.module("Screen",[])
    .controller("ScreenController", function ($scope) {
        $scope.name = "";
        $scope.surname = "";
        this.welcomeText = "";
        this.displayName = function () {
            var helloVar = "Hello, " + this.name + " " + this.surname;
            this.welcomeText = helloVar;
        }
    }
);