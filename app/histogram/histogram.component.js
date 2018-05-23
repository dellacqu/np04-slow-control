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
            this.TT0101 = "";
            let self = this;
            let labels = [];
            let values = [];
            $http.get("php-db-conn/histogram.conn.php?elemId=" + this.elemId + "&days=" + this.days).then(function (response) {
                let title = self.elemId;
                self.elemId = response.data.records;
                for (let i in self.elemId) {
                    labels.push(moment((self.elemId[i].TimeStamp), "DD-MMM-YYYY hh.mm.ss.SSSSSSSSS A"));
                    values.push(self.elemId[i].ExactValue);
                }
                let chartdata = {
                    labels: labels,
                    datasets: [
                        {
                            label: title,
                            tension: 0,
                            pointRadius: 1,
                            backgroundColor: 'rgba(200, 200, 200, 0.001)',
                            borderWidth: 1,
                            borderColor: 'rgba(200, 200, 200, 0.75)',
                            hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                            hoverBorderColor: 'rgba(200, 200, 200, 1)',
                            data: values
                        }
                    ]
                };
                let ctx = $('#hist');

                let barGraph = new Chart(ctx, {
                    type: 'line',
                    data: chartdata,
                    options: {
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
                console.log(labels);
            });
        }
    ]
});
