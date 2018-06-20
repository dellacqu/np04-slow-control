'use strict';
angular.module('zmonitor', []).component('zmonitor', {
    templateUrl: 'zmonitor/zmonitor.template.html',
    controller: function zmonitorController($http, $q, $interval) {
        this.pageTitle = "NP04 Ground impedance monitor";
        this.natalie = 1;
        this.TT0101 = "";
        let self = this;

        this.reload = function () {
            let temp0 = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:gizmo.RES");
            let temp1 = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:gizmo.TH");
            let temp2 = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:gizmo.mag");
            let temp3 = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:gizmo.I");
            let temp4 = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:gizmo.Q");
            let temp5 = $http.get('php-db-conn/elementName.conn.timestamp.php');
            $q.all([temp0, temp1, temp2, temp3, temp4, temp5]).then(function (resultArray) {
                self.NP04_DCS_01_gizmo_RES = resultArray[0].data.records;
                self.NP04_DCS_01_gizmo_TH = resultArray[1].data.records;
                self.NP04_DCS_01_gizmo_mag = resultArray[2].data.records;
                self.NP04_DCS_01_gizmo_I = resultArray[3].data.records;
                self.NP04_DCS_01_gizmo_Q= resultArray[4].data.records;
                self.timestamp = resultArray[5].data.records;
                console.log("interval occured");
            });
        };

        this.reload();
        $interval(this.reload, 15000);
    }
});