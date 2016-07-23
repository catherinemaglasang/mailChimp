/**
 * Created by Mesasix on 22/07/2016.
 */
angular.module('myApp', [
    'myApp.controllers',
    'myApp.filters',
    'myApp.services',
    'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
    $routeProvider.
    when('/campaigns', {
        templateUrl: 'pages/campaigns',
        controller: 'CampaignController'
    }).
    when('/templates', {
        templateUrl: 'pages/templates',
        controller: 'TemplateController'
    }).
    when('/lists', {
        templateUrl: 'pages/lists',
        controller: 'ListController'
    }).
    when('/reports', {
        templateUrl: 'pages/reports',
        controller: 'ReportController'
    }).
    when('/automation', {
        templateUrl: 'pages/automation',
        controller: 'AutomationController'
    }).
    otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true); //remove # in URL's
});
