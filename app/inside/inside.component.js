'use strict';
angular.module('inside', []).component('inside', {
    templateUrl: 'inside/inside.template.html',
    controller: function insideController($http, $q, $interval) {
        this.pageTitle = "NP04 Membranes";
        this.natalie = 1;
        this.TT0101 = "";
        let self = this;

        this.reload = function () {
            let temp0 = $http.get("php-db-conn/cryostat.conn.php?elemId=PT0104");
            let temp1 = $http.get("php-db-conn/cryostat.conn.php?elemId=PT0105");
            let temp2 = $http.get("php-db-conn/cryostat.conn.php?elemId=PT0100");
            let temp3 = $http.get("php-db-conn/cryostat.conn.php?elemId=PT0101");
            let temp4 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0123");
            let temp5 = $http.get("php-db-conn/cryostat.conn.php?elemId=SPAREAI");
            let temp6 = $http.get("php-db-conn/cryostat.conn.php?elemId=MHT0100");
            let temp7 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0100");
            let temp8 = $http.get("php-db-conn/cryostat.conn.php?elemId=PT0106");
            let temp9 = $http.get("php-db-conn/cryostat.conn.php?elemId=PT0102");
            let temp10 = $http.get("php-db-conn/cryostat.conn.php?elemId=PT0103");
            let temp11 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0101");
            let temp12 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0102");
            let temp13 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0103");
            let temp14 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0107");
            let temp15 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0113");
            let temp16 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0115");
            let temp17 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0119");
            let temp18 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0120");
            let temp19 = $http.get('php-db-conn/cryostat.conn.timestamp.php');
            $q.all([temp0, temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8, temp9, temp10, temp11, temp12, temp13, temp14, temp15, temp16, temp17, temp18, temp19]).then(function (resultArray) {
                self.PT0104 = resultArray[0].data.records;
                self.PT0105 = resultArray[1].data.records;
                self.PT0100 = resultArray[2].data.records;
                self.PT0101 = resultArray[3].data.records;
                self.TT0123 = resultArray[4].data.records;
                self.SPAREAI = resultArray[5].data.records;
                self.MHT0100 = resultArray[6].data.records;
                self.TT0100 = resultArray[7].data.records;
                self.PT0106 = resultArray[8].data.records;
                self.PT0102 = resultArray[9].data.records;
                self.PT0103 = resultArray[10].data.records;
                self.TT0101 = resultArray[11].data.records;
                self.TT0102 = resultArray[12].data.records;
                self.TT0103 = resultArray[13].data.records;
                self.TT0107 = resultArray[14].data.records;
                self.TT0113 = resultArray[15].data.records;
                self.TT0115 = resultArray[16].data.records;
                self.TT0119 = resultArray[17].data.records;
                self.TT0120 = resultArray[18].data.records;
                self.timestamp = resultArray[19].data.records;
                console.log("interval occured");
            });
        };

        this.reload();
        $interval(this.reload, 600000);
    }
});