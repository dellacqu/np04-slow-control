'use strict';
angular.module('camera', []).component('camera', {
    templateUrl: 'camera/camera.template.html',
    controller: ['$routeParams', '$http', '$window', '$sce', '$interval',
        function cameraController($routeParams, $http, $window, $sce, $interval) {
            this.cameraId = $routeParams.cameraId;
            this.pageTitle = "camera " + this.cameraId;
            this.natalie = 1;
            this.TT0101 = "";
            let self = this;

            this.config = {
                sources: [
                    {src: $sce.trustAsResourceUrl("http://protodune-dp01.cern.ch/video1.mjpeg"), type: "video/mppeg"}
                ],
                tracks: [
                    {
                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                        kind: "subtitles",
                        srclang: "en",
                        label: "English",
                        default: ""
                    }
                ],
                theme: "css/videogular.css",
                plugins: {
                    poster: "http://www.videogular.com/assets/images/videogular.png"
                }
            };

            this.reload();
            $interval(this.reload, 600000);
        }]
});