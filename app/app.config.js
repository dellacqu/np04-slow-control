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
        when('/crate/:crateId', {
            template: '<crate></crate>'
        }).
        when('/wib/:crateId/:wibId', {
            template: '<wib></wib>'
        }).
        when('/mpodpd', {
            template: '<mpodpd></mpodpd>'
        }).
        when('/camera', {
            template: '<camera></camera>'
        }).
        when('/bellegarde', {
            template: '<bellegarde></bellegarde>'
        }).
        when('/jura', {
            template: '<jura></jura>'
        }).
        when('/lausanne', {
            template: '<lausanne></lausanne>'
        }).
        when('/saleve', {
            template: '<saleve></saleve>'
        }).
        otherwise('/');
    }
]);