'use strict';
angular.module('inside', []).component('inside', {
    templateUrl: 'inside/inside.template.html',
    controller: function insideController($http, $q, $interval) {
        this.pageTitle = "NP04 Cryostat"
        this.natalie = 1;
        this.TT0101 = "";
/*        var self = this;

        this.reload = function () {
            var temp0 = $http.get("cryostat/cryostat.conn.PT0104.php");
            var temp1 = $http.get("cryostat/cryostat.conn.PT0105.php");
            var temp2 = $http.get("cryostat/cryostat.conn.PT0100.php");
            var temp3 = $http.get("cryostat/cryostat.conn.PT0101.php");
            var temp4 = $http.get("cryostat/cryostat.conn.TT0123.php");
            var temp5 = $http.get("cryostat/cryostat.conn.SPAREAI.php");
            var temp6 = $http.get("cryostat/cryostat.conn.MHT0100.php");
            var temp7 = $http.get("cryostat/cryostat.conn.TT0100.php");
            var temp8 = $http.get("cryostat/cryostat.conn.PT0106.php");
            var temp9 = $http.get("cryostat/cryostat.conn.PT0102.php");
            var temp10 = $http.get("cryostat/cryostat.conn.PT0103.php");
            var temp11 = $http.get("cryostat/cryostat.conn.TT0101.php");
            var temp12 = $http.get("cryostat/cryostat.conn.TT0102.php");
            var temp13 = $http.get("cryostat/cryostat.conn.TT0103.php");
            var temp14 = $http.get("cryostat/cryostat.conn.TT0107.php");
            var temp15 = $http.get("cryostat/cryostat.conn.TT0113.php");
            var temp16 = $http.get("cryostat/cryostat.conn.TT0115.php");
            var temp17 = $http.get("cryostat/cryostat.conn.TT0119.php");
            var temp18 = $http.get("cryostat/cryostat.conn.TT0120.php");
            var temp19 = $http.get('cryostat/cryostat.conn.timestamp.php');
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
        $interval(this.reload, 600000);*/
    }
});