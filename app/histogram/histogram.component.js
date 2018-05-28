'use strict';
angular.module('histogram', []).component('histogram', {
    templateUrl: 'histogram/histogram.template.html',
    controller: ['$routeParams', '$http',
        function histogramController($routeParams, $http) {
            this.elemId = $routeParams.elemId;
            if ($routeParams.days != null) {
                console.log(this.days);
                this.days = $routeParams.days;
            } else {
                this.days = 3;
            }
            this.pageTitle = this.elemId;
            this.natalie = 1;
            let self = this;
            let labels = [];
            let values = [];

            this.dayChanger = function (fundays) {
                console.log(fundays);
                let url = "#!/histogram/" + this.elemId + "/" + fundays;
                $http.get(url).then(function() {
                    $http.get("php-db-conn/histogram.conn.php?elemId=" + self.elemId + "&days=" + fundays).then(function (response) {
                        let title = self.elemId;
                        let respdata = response.data.records;
                        if (respdata == '{"records":]}') {
                            console.log("JSON error");
                            this.dayChanger(7);
                        } else {
                            for (let i in respdata) {
                                labels.push(moment((respdata[i].TimeStamp), "DD-MMM-YYYY hh.mm.ss.SSSSSSSSS A"));
                                values.push(respdata[i].ExactValue);
                            }
                            let chartdata = {
                                labels: labels,
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
                                        data: values
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
                                    scales: {
                                        xAxes: [{
                                            type: "time",
                                            time: {
                                                tooltipFormat: "DD/MM/YYYY HH:mm:ss",
                                                displayFormats: {
                                                    millisecond: "HH:mm:ss.SSS",
                                                    second: "HH:mm:ss",
                                                    minute: "HH:mm",
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
                        }
                    });
                });
            };
            this.dayChanger(this.days);

        }
    ]
});