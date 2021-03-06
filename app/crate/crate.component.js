'use strict';
angular.module('crate', []).component('crate', {
    templateUrl: 'crate/crate.template.html',
    controller: ['$routeParams', '$q', '$http', '$window', '$interval',
        function crateController($routeParams, $q, $http, $window, $interval) {
        this.crateId = $routeParams.crateId;
        this.pageTitle = "Crate " + this.crateId;
        this.natalie = 1;
        this.TT0101 = "";
        let self = this;

        this.crateChanger = function(crId) {
            $window.location.href = "#!/crate/" + crId;
            console.log($window.location.href);
        }

        this.reload = function () {
            let crate0_slot1_temp = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot1.POWER.WIB.TEMP");
            let crate0_slot1_vcc = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot1.POWER.WIB.VCC");
            let crate0_slot1_1v8_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot1.POWER.WIB.1V8.V");
            let crate0_slot1_1v8_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot1.POWER.WIB.1V8.I");
            let crate0_slot1_2v8_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot1.POWER.WIB.2V8.V");
            let crate0_slot1_2v8_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot1.POWER.WIB.2V8.I");
            let crate0_slot1_3v6_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot1.POWER.WIB.3V6.V");
            let crate0_slot1_3v6_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot1.POWER.WIB.3V6.I");
            let crate0_slot1_5v_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot1.POWER.WIB.5V.V");
            let crate0_slot1_5v_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot1.POWER.WIB.5V.I");
            let crate0_slot2_temp = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot2.POWER.WIB.TEMP");
            let crate0_slot2_vcc = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot2.POWER.WIB.VCC");
            let crate0_slot2_1v8_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot2.POWER.WIB.1V8.V");
            let crate0_slot2_1v8_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot2.POWER.WIB.1V8.I");
            let crate0_slot2_2v8_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot2.POWER.WIB.2V8.V");
            let crate0_slot2_2v8_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot2.POWER.WIB.2V8.I");
            let crate0_slot2_3v6_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot2.POWER.WIB.3V6.V");
            let crate0_slot2_3v6_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot2.POWER.WIB.3V6.I");
            let crate0_slot2_5v_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot2.POWER.WIB.5V.V");
            let crate0_slot2_5v_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot2.POWER.WIB.5V.I");
            let crate0_slot3_temp = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot3.POWER.WIB.TEMP");
            let crate0_slot3_vcc = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot3.POWER.WIB.VCC");
            let crate0_slot3_1v8_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot3.POWER.WIB.1V8.V");
            let crate0_slot3_1v8_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot3.POWER.WIB.1V8.I");
            let crate0_slot3_2v8_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot3.POWER.WIB.2V8.V");
            let crate0_slot3_2v8_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot3.POWER.WIB.2V8.I");
            let crate0_slot3_3v6_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot3.POWER.WIB.3V6.V");
            let crate0_slot3_3v6_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot3.POWER.WIB.3V6.I");
            let crate0_slot3_5v_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot3.POWER.WIB.5V.V");
            let crate0_slot3_5v_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot3.POWER.WIB.5V.I");
            let crate0_slot4_temp = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot4.POWER.WIB.TEMP");
            let crate0_slot4_vcc = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot4.POWER.WIB.VCC");
            let crate0_slot4_1v8_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot4.POWER.WIB.1V8.V");
            let crate0_slot4_1v8_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot4.POWER.WIB.1V8.I");
            let crate0_slot4_2v8_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot4.POWER.WIB.2V8.V");
            let crate0_slot4_2v8_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot4.POWER.WIB.2V8.I");
            let crate0_slot4_3v6_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot4.POWER.WIB.3V6.V");
            let crate0_slot4_3v6_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot4.POWER.WIB.3V6.I");
            let crate0_slot4_5v_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot4.POWER.WIB.5V.V");
            let crate0_slot4_5v_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot4.POWER.WIB.5V.I");
            let crate0_slot5_temp = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot5.POWER.WIB.TEMP");
            let crate0_slot5_vcc = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot5.POWER.WIB.VCC");
            let crate0_slot5_1v8_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot5.POWER.WIB.1V8.V");
            let crate0_slot5_1v8_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot5.POWER.WIB.1V8.I");
            let crate0_slot5_2v8_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot5.POWER.WIB.2V8.V");
            let crate0_slot5_2v8_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot5.POWER.WIB.2V8.I");
            let crate0_slot5_3v6_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot5.POWER.WIB.3V6.V");
            let crate0_slot5_3v6_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot5.POWER.WIB.3V6.I");
            let crate0_slot5_5v_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot5.POWER.WIB.5V.V");
            let crate0_slot5_5v_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot5.POWER.WIB.5V.I");
            let temp5 = $http.get('php-db-conn/elementName.conn.timestamp.php');
            $q.all([crate0_slot1_temp, crate0_slot1_vcc, crate0_slot1_1v8_v, crate0_slot1_1v8_i, crate0_slot1_2v8_v, crate0_slot1_2v8_i, crate0_slot1_3v6_v, crate0_slot1_3v6_i, crate0_slot1_5v_v, crate0_slot1_5v_i,
                crate0_slot2_temp, crate0_slot2_vcc, crate0_slot2_1v8_v, crate0_slot2_1v8_i, crate0_slot2_2v8_v, crate0_slot2_2v8_i, crate0_slot2_3v6_v, crate0_slot2_3v6_i, crate0_slot2_5v_v, crate0_slot2_5v_i,
                crate0_slot3_temp, crate0_slot3_vcc, crate0_slot3_1v8_v, crate0_slot3_1v8_i, crate0_slot3_2v8_v, crate0_slot3_2v8_i, crate0_slot3_3v6_v, crate0_slot3_3v6_i, crate0_slot3_5v_v, crate0_slot3_5v_i,
                crate0_slot4_temp, crate0_slot4_vcc, crate0_slot4_1v8_v, crate0_slot4_1v8_i, crate0_slot4_2v8_v, crate0_slot4_2v8_i, crate0_slot4_3v6_v, crate0_slot4_3v6_i, crate0_slot4_5v_v, crate0_slot4_5v_i,
                crate0_slot5_temp, crate0_slot5_vcc, crate0_slot5_1v8_v, crate0_slot5_1v8_i, crate0_slot5_2v8_v, crate0_slot5_2v8_i, crate0_slot5_3v6_v, crate0_slot5_3v6_i, crate0_slot5_5v_v, crate0_slot5_5v_i,
                temp5]).then(function (resultArray) {
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
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_TEMP = resultArray[10].data.records;
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_VCC = resultArray[11].data.records;
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_1V8_V = resultArray[12].data.records;
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_1V8_I = resultArray[13].data.records;
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_2V8_V = resultArray[14].data.records;
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_2V8_I = resultArray[15].data.records;
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_3V6_V = resultArray[16].data.records;
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_3V6_I = resultArray[17].data.records;
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_5V_V = resultArray[18].data.records;
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_5V_I = resultArray[19].data.records;
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_TEMP = resultArray[20].data.records;
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_VCC = resultArray[21].data.records;
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_1V8_V = resultArray[22].data.records;
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_1V8_I = resultArray[23].data.records;
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_2V8_V = resultArray[24].data.records;
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_2V8_I = resultArray[25].data.records;
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_3V6_V = resultArray[26].data.records;
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_3V6_I = resultArray[27].data.records;
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_5V_V = resultArray[28].data.records;
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_5V_I = resultArray[29].data.records;
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_TEMP = resultArray[30].data.records;
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_VCC = resultArray[31].data.records;
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_1V8_V = resultArray[32].data.records;
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_1V8_I = resultArray[33].data.records;
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_2V8_V = resultArray[34].data.records;
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_2V8_I = resultArray[35].data.records;
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_3V6_V = resultArray[36].data.records;
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_3V6_I = resultArray[37].data.records;
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_5V_V = resultArray[38].data.records;
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_5V_I = resultArray[39].data.records;
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_TEMP = resultArray[40].data.records;
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_VCC = resultArray[41].data.records;
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_1V8_V = resultArray[42].data.records;
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_1V8_I = resultArray[43].data.records;
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_2V8_V = resultArray[44].data.records;
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_2V8_I = resultArray[45].data.records;
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_3V6_V = resultArray[46].data.records;
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_3V6_I = resultArray[47].data.records;
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_5V_V = resultArray[48].data.records;
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_5V_I = resultArray[49].data.records;
                self.timestamp = resultArray[50].data.records;
                console.log("interval occured");
            });
        };

        this.reload();
        $interval(this.reload, 15000);
    }]
});