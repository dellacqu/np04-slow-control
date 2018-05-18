'use strict';
angular.module('histogram', []).component('histogram', {
    templateUrl: 'histogram/histogram.template.html',
    controller: ['$routeParams', '$http',
        function histogramController($routeParams, $http) {
            this.elemId = $routeParams.elemId;
            this.pageTitle = "NP04 Cryostat"
            this.natalie = 1;
            this.TT0101 = "";
            let self = this;
            let labels = [];
            let values = [];
            $http.get("php-db-conn/histogram.conn.php?elemId=" + this.elemId).then(function (response) {
                self.elemId = response.data.records;
                for (let i in self.elemId) {
                    labels.push(self.elemId[i].TimeStamp);
                    values.push(self.elemId[i].ExactValue);
                }
                let chartdata = {
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
                let ctx = $('#hist');

                let barGraph = new Chart(ctx, {
                    type: 'line',
                    data: chartdata
                });
                console.log(labels);

            });
        }
    ]
});
