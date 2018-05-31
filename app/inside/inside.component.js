'use strict';
angular.module('inside', []).component('inside', {
    templateUrl: 'inside/inside.template.html',
    controller: function insideController($http, $q, $interval) {
        this.pageTitle = "NP04 Membranes";
        this.natalie = 1;
        this.TT0101 = "";
        let self = this;

        this.reload = function () {
            let temp0 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_MHT0100AI");
            let temp1 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_TT0100AI");
            let temp2 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_PT0106AI");
            let temp3 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_5TT0101AI");
            let temp4 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_5TT0102AI");
            let temp5 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_5TT0103AI");
            let temp6 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_5TT0107AI");
            let temp7 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_5TT0113AI");
            let temp8 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_5TT0115AI");
            let temp9 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_5TT0119AI");
            let temp10 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_5TT0120AI");
            let temp11 = $http.get('php-db-conn/cryostat.conn.timestamp.php');
            $q.all([temp0, temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8, temp9, temp10, temp11]).then(function (resultArray) {
                self.NP04_MHT0100AI = resultArray[0].data.records;
                self.NP04_TT0100AI = resultArray[1].data.records;
                self.NP04_PT0106AI = resultArray[2].data.records;
                self.NP04_5TT0101AI = resultArray[3].data.records;
                self.NP04_5TT0102AI = resultArray[4].data.records;
                self.NP04_5TT0103AI = resultArray[5].data.records;
                self.NP04_5TT0107AI = resultArray[6].data.records;
                self.NP04_5TT0113AI = resultArray[7].data.records;
                self.NP04_5TT0115AI = resultArray[8].data.records;
                self.NP04_5TT0119AI = resultArray[9].data.records;
                self.NP04_5TT0120AI = resultArray[10].data.records;
                self.timestamp = resultArray[11].data.records;
                console.log("interval occured");
            });
        };

        this.reload();
        $interval(this.reload, 600000);
    }
});