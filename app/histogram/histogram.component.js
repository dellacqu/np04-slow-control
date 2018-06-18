'use strict';
angular.module('histogram', []).component('histogram', {
    templateUrl: 'histogram/histogram.template.html',
    controller: ['$routeParams', '$window', '$http', '$interval',
        function histogramController($routeParams, $window, $http, $interval) {
            this.elemId = $routeParams.elemId;
            if ($routeParams.days != null) {
                console.log(this.days);
                this.days = $routeParams.days;
            } else {
                this.days = 1;
            }
            if ($routeParams.type != null) {
                this.type = $routeParams.type;
            } else {
                this.type = 0;
            }
            this.pageTitle = this.elemId;
            this.natalie = 1;
            this.respdata = [];
            let self = this;
            this.labels = [];
            this.values = [];
            let fundays = this.days;
            this.chart;

            this.dayChanger = function (funcdays) {
                $window.location.href = "#!/histogram/" + this.elemId + "/" + funcdays + "/" + this.type;
                console.log($window.location.href);
            };

            console.log(fundays);
            this.reload = function () {
                $window.location.reload();
            };
                $http.get("php-db-conn/histogram.conn.php?elemId=" + self.elemId + "&days=" + fundays + "&type=" + self.type).then(function onSuccess(response) {
                    if (response != undefined && typeof response == "object") {
                        let title = self.elemId;
                        self.respdata = response.data.records;
                        console.log(response.data);
                        for (let i in self.respdata) {
                            self.labels.push(moment((self.respdata[i].TimeStamp), "DD-MMM-YYYY hh.mm.ss.SSSSSSSSS A"));
                            self.values.push(self.respdata[i].ExactValue);
                        }
                        let chartdata = {
                            labels: self.labels,
                            datasets: [
                                {
                                    label: title,
                                    tension: 0,
                                    pointRadius: 1,
                                    backgroundColor: 'rgba(200, 0, 0, 0.001)',
                                    borderWidth: 1,
                                    borderColor: 'rgba(200, 0, 0, 0.75)',
                                    hoverBackgroundColor: 'rgba(200, 0, 0, 1)',
                                    hoverBorderColor: 'rgba(200, 0, 0, 1)',
                                    data: self.values
                                }
                            ]
                        };
                        let ctx = $('#hist');

                        Chart.pluginService.register({
                            beforeDraw: function (chart, easing) {
                                if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
                                    var helpers = Chart.helpers;
                                    var ctx = chart.chart.ctx;
                                    var chartArea = chart.chartArea;

                                    ctx.save();
                                    ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
                                    ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
                                    ctx.restore();
                                }
                            }
                        });

                        let barGraph = new Chart(ctx, {
                            type: 'line',
                            data: chartdata,
                            options: {
                                chartArea: {
                                    backgroundColor: 'rgba(255, 255, 255, 1)'
                                },
                                legend: {
                                    labels: {
                                        fontColor: "white",
                                        fontSize: 18
                                    }

                                },
                                pan: {
                                    // Boolean to enable panning
                                    enabled: true,

                                    // Panning directions. Remove the appropriate direction to disable
                                    // Eg. 'y' would only allow panning in the y direction
                                    mode: 'xy',
                                    rangeMin: {
                                        // Format of min pan range depends on scale type
                                        x: null,
                                        y: null
                                    },
                                    rangeMax: {
                                        // Format of max pan range depends on scale type
                                        x: null,
                                        y: null
                                    }
                                },
                                zoom: {
                                    // Boolean to enable zooming
                                    enabled: true,

                                    // Enable drag-to-zoom behavior
                                    drag: true,

                                    // Zooming directions. Remove the appropriate direction to disable
                                    // Eg. 'y' would only allow zooming in the y direction
                                    mode: 'xy',
                                    rangeMin: {
                                        // Format of min zoom range depends on scale type
                                        x: null,
                                        y: null
                                    },
                                    rangeMax: {
                                        // Format of max zoom range depends on scale type
                                        x: null,
                                        y: null
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        type: "time",
                                        time: {
                                            tooltipFormat: "DD/MM/YYYY HH:mm:ss",
                                            displayFormats: {
                                                millisecond: "DD/MM HH:mm:ss.SSS",
                                                second: "DD/MM HH:mm:ss",
                                                minute: "DD/MM HH:mm",
                                                hour: "DD/MM HH:mm",
                                                day: "DD/MM/YYYY",
                                                week: "DD/MM",
                                                month: "MM YYYY",
                                                year: "YYYY"
                                            }
                                        },
                                        ticks: {

                                            fontColor: "white"
                                        }
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            fontColor: "white"
                                        }
                                    }]
                                }
                            }

                        });
                        self.chart = barGraph;

                    } else {
                        self.dayChanger(3);
                    }
                }).catch(function onError(data) {
                    self.dayChanger(3);
                });

            $interval(this.reload, 15000);
        }
    ]
});