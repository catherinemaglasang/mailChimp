/**
 * Created by Mesasix on 22/07/2016.
 */

angular.module('myApp.directives', []).
    directive('appVersion', function (version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    });