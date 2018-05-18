'use strict';
angular.module('inside', []).component('inside', {
    templateUrl: 'inside/inside.template.html',
    controller: function insideController($http, $q, $interval) {
        this.pageTitle = "NP04 Membrains"
        this.natalie = 1;
        this.TT0101 = "";
        var self = this;

        this.reload = function () {
            var temp0 = $http.get("php-db-conn/cryostat.conn.php?elemId=PT0104");
            var temp1 = $http.get("php-db-conn/cryostat.conn.php?elemId=PT0105");
            var temp2 = $http.get("php-db-conn/cryostat.conn.php?elemId=PT0100");
            var temp3 = $http.get("php-db-conn/cryostat.conn.php?elemId=PT0101");
            var temp4 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0123");
            var temp5 = $http.get("php-db-conn/cryostat.conn.php?elemId=SPAREAI");
            var temp6 = $http.get("php-db-conn/cryostat.conn.php?elemId=MHT0100");
            var temp7 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0100");
            var temp8 = $http.get("php-db-conn/cryostat.conn.php?elemId=PT0106");
            var temp9 = $http.get("php-db-conn/cryostat.conn.php?elemId=PT0102");
            var temp10 = $http.get("php-db-conn/cryostat.conn.php?elemId=PT0103");
            var temp11 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0101");
            var temp12 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0102");
            var temp13 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0103");
            var temp14 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0107");
            var temp15 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0113");
            var temp16 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0115");
            var temp17 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0119");
            var temp18 = $http.get("php-db-conn/cryostat.conn.php?elemId=TT0120");
            var temp19 = $http.get('php-db-conn/cryostat.conn.timestamp.php');
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