'use strict';
angular.module('camera', []).component('camera', {
    templateUrl: 'camera/camera.template.html',
    controller: ['$http', '$window', '$interval',
        function cameraController($http, $window, $interval) {
            this.pageTitle = "NP04 Cameras";
            this.natalie = 1;
            this.TT0101 = "";
            let self = this;



            $interval(this.reload, 600000);
        }]
});