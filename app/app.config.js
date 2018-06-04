angular.
module('ng04SlowControlApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/', {
                template: '<home></home>'
            }).
            when('/cryostat', {
                template: '<cryostat></cryostat>'
            }).
            when('/inside', {
                template: '<inside></inside>'
            }).
            when('/histogram/:elemId/:days?/:type?', {
                template: '<histogram></histogram>'
            }).
            when('/zmonitor', {
                template: '<zmonitor></zmonitor>'
            }).
            when('/crate', {
                template: '<crate></crate>'
            }).
            when('/wib', {
                template: '<wib></wib>'
            }).
            otherwise('/');
    }
]);