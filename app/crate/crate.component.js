'use strict';
angular.module('crate', []).component('crate', {
    templateUrl: 'crate/crate.template.html',
    controller: function crateController($routeparams, $http, $q, $interval) {
        this.pageTitle = "NP04 WIB crates";
        this.natalie = 1;
        this.TT0101 = "";
        let self = this;

        this.reload = function () {
            let crate0_slot1_temp = $http.get("php-db-conn/crate.conn.php?elemId=NP04_DCS_01:WIB_crate0_slot1.POWER.WIB.TEMP");
            let crate0_slot1_vcc = $http.get("php-db-conn/crate.conn.php?elemId=NP04_DCS_01:WIB_crate0_slot1.POWER.WIB.VCC");
            let crate0_slot1_1v8_v = $http.get("php-db-conn/crate.conn.php?elemId=NP04_DCS_01:WIB_crate0_slot1.POWER.WIB.1V8.V");
            let crate0_slot1_1v8_i = $http.get("php-db-conn/crate.conn.php?elemId=NP04_DCS_01:WIB_crate0_slot1.POWER.WIB.1V8.I");
            let crate0_slot1_2v8_v = $http.get("php-db-conn/crate.conn.php?elemId=NP04_DCS_01:WIB_crate0_slot1.POWER.WIB.2V8.V");
            let crate0_slot1_2v8_i = $http.get("php-db-conn/crate.conn.php?elemId=NP04_DCS_01:WIB_crate0_slot1.POWER.WIB.2V8.I");
            let crate0_slot1_3v6_v = $http.get("php-db-conn/crate.conn.php?elemId=NP04_DCS_01:WIB_crate0_slot1.POWER.WIB.3V6.V");
            let crate0_slot1_3v6_i = $http.get("php-db-conn/crate.conn.php?elemId=NP04_DCS_01:WIB_crate0_slot1.POWER.WIB.3V6.I");
            let crate0_slot1_5v_v = $http.get("php-db-conn/crate.conn.php?elemId=NP04_DCS_01:WIB_crate0_slot1.POWER.WIB.5V.V");
            let crate0_slot1_5v_i = $http.get("php-db-conn/crate.conn.php?elemId=NP04_DCS_01:WIB_crate0_slot1.POWER.WIB.5V.I");
            let temp5 = $http.get('php-db-conn/cryostat.conn.timestamp.php');
            $q.all([crate0_slot1_temp, crate0_slot1_vcc, crate0_slot1_1v8_v, crate0_slot1_1v8_i, crate0_slot1_2v8_v, crate0_slot1_2v8_i, crate0_slot1_3v6_v, crate0_slot1_3v6_i, crate0_slot1_5v_v, crate0_slot1_5v_i, temp5]).then(function (resultArray) {
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_TEMP = resultArray[0].data.records;
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_VCC = resultArray[1].data.records;
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_1V8_V = resultArray[2].data.records;
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_1V8_I = resultArray[3].data.records;
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_2V8_V = resultArray[4].data.records;
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_2V8_I = resultArray[5].data.records;
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_3V6_V = resultArray[6].data.records;
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_3V6_I = resultArray[7].data.records;
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_5V_V = resultArray[8].data.records;
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_5V_I = resultArray[9].data.records;
                self.timestamp = resultArray[10].data.records;
                console.log("interval occured");
            });
        };

        this.reload();
        $interval(this.reload, 600000);
    }
});