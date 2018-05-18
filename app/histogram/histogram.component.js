'use strict';
angular.module('histogram', []).component('histogram', {
    templateUrl: 'histogram/histogram.template.html',
    controller: ['$routeParams', '$http',
        function histogramController($routeParams, $http) {
            this.elemId = $routeParams.elemId;
            this.pageTitle = "NP04 Cryostat"
            this.natalie = 1;
            this.TT0101 = "";
            var self = this;
            var labels = [];
            var values = [];
            $http.get("histogram/histogram.conn." + this.elemId + ".php").then(function (response) {
                self.elemId = response.data.records;
                for (var i in self.elemId) {
                    labels.push(self.elemId[i].TimeStamp);
                    values.push(self.elemId[i].ExactValue);
                }
                var chartdata = {
                    labels: labels,
                    datasets : [
                        {
                            label: 'Value',
                            backgroundColor: 'rgba(200, 200, 200, 0.75)',
                            borderColor: 'rgba(200, 200, 200, 0.75)',
                            hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                            hoverBorderColor: 'rgba(200, 200, 200, 1)',
                            data: values
                        }
                    ]
                };
                var ctx = $('#hist');

                var barGraph = new Chart(ctx, {
                    type: 'line',
                    data: chartdata
                });
                console.log(labels);

            });
        }
    ]
});
