'use strict';
angular.module('cryostat', []).component('cryostat', {
    templateUrl: 'cryostat/cryostat.template.html',
    controller: function cryostatController($http, $q, $interval) {
        this.pageTitle = "NP04 Cryostat";
        this.natalie = 1;
        let self = this;

        this.reload = function () {
            let temp0 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_PT0104AI");
            let temp1 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_PT0105AI");
            let temp2 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_PT0100AI");
            let temp3 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_PT0101AI");
            let temp4 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_2PT0100AIR");
            let temp5 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_2TT0100AIR");
            let temp6 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_MHT0100AI");
            let temp7 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_TT0100AI");
            let temp8 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_PT0106AI");
            let temp9 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_PT0102AI");
            let temp10 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_PT0103AI");
            let temp11 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_5TT0101AI");
            let temp12 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_5TT0102AI");
            let temp13 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_5TT0103AI");
            let temp14 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_5TT0107AI");
            let temp15 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_5TT0113AI");
            let temp16 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_5TT0115AI");
            let temp17 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_5TT0119AI");
            let temp18 = $http.get("php-db-conn/cryostat.conn.php?elemId=NP04_5TT0120AI");
            let temp19 = $http.get('php-db-conn/cryostat.conn.timestamp.php');
            $q.all([temp0, temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8, temp9, temp10, temp11, temp12, temp13, temp14, temp15, temp16, temp17, temp18, temp19]).then(function (resultArray) {
                self.NP04_PT0104AI = resultArray[0].data.records;
                self.NP04_PT0105AI = resultArray[1].data.records;
                self.NP04_PT0100AI = resultArray[2].data.records;
                self.NP04_PT0101AI = resultArray[3].data.records;
                self.NP04_2PT0100AIR = resultArray[4].data.records;
                self.NP04_2TT0100AIR = resultArray[5].data.records;
                self.NP04_MHT0100AI = resultArray[6].data.records;
                self.NP04_TT0100AI = resultArray[7].data.records;
                self.NP04_PT0106AI = resultArray[8].data.records;
                self.NP04_PT0102AI = resultArray[9].data.records;
                self.NP04_PT0103AI = resultArray[10].data.records;
                self.NP04_5TT0101AI = resultArray[11].data.records;
                self.NP04_5TT0102AI = resultArray[12].data.records;
                self.NP04_5TT0103AI = resultArray[13].data.records;
                self.NP04_5TT0107AI = resultArray[14].data.records;
                self.NP04_5TT0113AI = resultArray[15].data.records;
                self.NP04_5TT0115AI = resultArray[16].data.records;
                self.NP04_5TT0119AI = resultArray[17].data.records;
                self.NP04_5TT0120AI = resultArray[18].data.records;
                self.timestamp = resultArray[19].data.records;
                console.log("interval occured");
            });
        };

        this.reload();
        $interval(this.reload, 600000);
    }
});