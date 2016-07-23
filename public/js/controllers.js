/**
 * Created by Mesasix on 22/07/2016.
 */

angular.module('myApp.controllers', []).
    controller('AppCtrl', function ($scope, $http) {

        $http({
            method: 'GET',
            url: '/api/name'
        }).
        success(function (data, status, headers, config) {
            $scope.name = data.name;
        }).
        error(function (data, status, headers, config) {
            $scope.name = 'Error!';
        });

    }).
    controller('CampaignController', function () {

    }).
    controller('TemplateController', function () {

    }).
    controller('ListController', function () {

    }).
    controller('ReportController', function () {

    }).
    controller('AutomationController', function () {

    });