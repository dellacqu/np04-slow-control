'use strict';
angular.module('cryostatGauges', []).component('cryostatGauges', {
    templateUrl: `cryostatGauges/cryostatGauges.template.html`,
    controller: function cryostatGaugesController($http, $q, $interval) {
        this.pageTitle = "NP04 cryostatGauges";
        this.natalie = 1;
        let self = this;

        this.reload = function () {
            let temp0 = $http.get("php-db-conn/alias.conn.php?elemId=NP04_MHT0100AI");
            let temp1 = $http.get("php-db-conn/alias.conn.php?elemId=NP04_TT0100AI");
            let temp2 = $http.get("php-db-conn/alias.conn.php?elemId=NP04_PT0106AI");
            let temp3 = $http.get('php-db-conn/alias.conn.timestamp.php');
            $q.all([temp0, temp1, temp2, temp3]).then(function (resultArray) {
                self.NP04_MHT0100AI = resultArray[0].data.records;
                self.NP04_TT0100AI = resultArray[1].data.records;
                self.NP04_PT0106AI = resultArray[2].data.records;
                self.timestamp = resultArray[3].data.records;
                console.log("interval occured");
            });
        };

        this.reload();
        $interval(this.reload, 15000);
    }
});