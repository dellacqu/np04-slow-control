'use strict';
angular.module('wib', []).component('wib', {
    templateUrl: 'wib/wib.template.html',
    controller: ['$routeParams', '$q', '$http', '$window', '$interval',
        function wibController($routeParams, $q, $http, $window, $interval) {
            this.crateId = $routeParams.crateId;
            this.wibId = $routeParams.wibId;
            this.pageTitle = "Crate " + this.crateId + " WIB " + this.wibId;
            this.natalie = 1;
            this.TT0101 = "";
            let self = this;

            this.wibChanger = function(crId, wId) {
                $window.location.href = "#!/wib/" + crId + "/" + wId;
                console.log($window.location.href);
            }

            this.reload = function () {
                let wib0_slot1_femb1_1v5_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB1.1V5.V");
                let wib0_slot1_femb1_1v5_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB1.1V5.I");
                let wib0_slot1_femb1_2v5_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB1.2V5.V");
                let wib0_slot1_femb1_2v5_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB1.2V5.I");
                let wib0_slot1_femb1_2v8_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB1.2V8.V");
                let wib0_slot1_femb1_2v8_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB1.2V8.I");
                let wib0_slot1_femb1_3v6_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB1.3V6.V");
                let wib0_slot1_femb1_3v6_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB1.3V6.I");
                let wib0_slot1_femb1_bias_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB1.BIAS_V");
                let wib0_slot1_femb1_bias_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB1.BIAS_I");
                let wib0_slot1_femb1_temp = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.wibId + "_slot" + self.wibId + ".POWER.FEMB1.TEMP");

                let wib0_slot1_femb2_1v5_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB2.1V5.V");
                let wib0_slot1_femb2_1v5_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB2.1V5.I");
                let wib0_slot1_femb2_2v5_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB2.2V5.V");
                let wib0_slot1_femb2_2v5_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB2.2V5.I");
                let wib0_slot1_femb2_2v8_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB2.2V8.V");
                let wib0_slot1_femb2_2v8_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB2.2V8.I");
                let wib0_slot1_femb2_3v6_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB2.3V6.V");
                let wib0_slot1_femb2_3v6_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB2.3V6.I");
                let wib0_slot1_femb2_bias_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB2.BIAS_V");
                let wib0_slot1_femb2_bias_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB2.BIAS_I");
                let wib0_slot1_femb2_temp = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.wibId + "_slot" + self.wibId + ".POWER.FEMB2.TEMP");

                let wib0_slot1_femb3_1v5_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB3.1V5.V");
                let wib0_slot1_femb3_1v5_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB3.1V5.I");
                let wib0_slot1_femb3_2v5_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB3.2V5.V");
                let wib0_slot1_femb3_2v5_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB3.2V5.I");
                let wib0_slot1_femb3_2v8_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB3.2V8.V");
                let wib0_slot1_femb3_2v8_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB3.2V8.I");
                let wib0_slot1_femb3_3v6_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB3.3V6.V");
                let wib0_slot1_femb3_3v6_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB3.3V6.I");
                let wib0_slot1_femb3_bias_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB3.BIAS_V");
                let wib0_slot1_femb3_bias_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB3.BIAS_I");
                let wib0_slot1_femb3_temp = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.wibId + "_slot" + self.wibId + ".POWER.FEMB3.TEMP");

                let wib0_slot1_femb4_1v5_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB4.1V5.V");
                let wib0_slot1_femb4_1v5_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB4.1V5.I");
                let wib0_slot1_femb4_2v5_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB4.2V5.V");
                let wib0_slot1_femb4_2v5_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB4.2V5.I");
                let wib0_slot1_femb4_2v8_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB4.2V8.V");
                let wib0_slot1_femb4_2v8_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB4.2V8.I");
                let wib0_slot1_femb4_3v6_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB4.3V6.V");
                let wib0_slot1_femb4_3v6_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB4.3V6.I");
                let wib0_slot1_femb4_bias_v = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB4.BIAS_V");
                let wib0_slot1_femb4_bias_i = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.crateId + "_slot" + self.wibId + ".POWER.FEMB4.BIAS_I");
                let wib0_slot1_femb4_temp = $http.get("php-db-conn/elementName.conn.php?elemId=NP04_DCS_01:WIB_crate" + self.wibId + "_slot" + self.wibId + ".POWER.FEMB4.TEMP");

                let temp5 = $http.get('php-db-conn/elementName.conn.timestamp.php');
                $q.all([wib0_slot1_femb1_1v5_v, wib0_slot1_femb1_1v5_i, wib0_slot1_femb1_2v5_v, wib0_slot1_femb1_2v5_i, wib0_slot1_femb1_2v8_v, wib0_slot1_femb1_2v8_i, wib0_slot1_femb1_3v6_v, wib0_slot1_femb1_3v6_i, wib0_slot1_femb1_bias_v, wib0_slot1_femb1_bias_i, wib0_slot1_femb1_temp,
                    wib0_slot1_femb2_1v5_v, wib0_slot1_femb2_1v5_i, wib0_slot1_femb2_2v5_v, wib0_slot1_femb2_2v5_i, wib0_slot1_femb2_2v8_v, wib0_slot1_femb2_2v8_i, wib0_slot1_femb2_3v6_v, wib0_slot1_femb2_3v6_i, wib0_slot1_femb2_bias_v, wib0_slot1_femb2_bias_i, wib0_slot1_femb2_temp,
                    wib0_slot1_femb3_1v5_v, wib0_slot1_femb3_1v5_i, wib0_slot1_femb3_2v5_v, wib0_slot1_femb3_2v5_i, wib0_slot1_femb3_2v8_v, wib0_slot1_femb3_2v8_i, wib0_slot1_femb3_3v6_v, wib0_slot1_femb3_3v6_i, wib0_slot1_femb3_bias_v, wib0_slot1_femb3_bias_i, wib0_slot1_femb3_temp,
                    wib0_slot1_femb4_1v5_v, wib0_slot1_femb4_1v5_i, wib0_slot1_femb4_2v5_v, wib0_slot1_femb4_2v5_i, wib0_slot1_femb4_2v8_v, wib0_slot1_femb4_2v8_i, wib0_slot1_femb4_3v6_v, wib0_slot1_femb4_3v6_i, wib0_slot1_femb4_bias_v, wib0_slot1_femb4_bias_i, wib0_slot1_femb4_temp,
                    temp5]).then(function (resultArray) {
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_1V5_V = resultArray[0].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_1V5_I = resultArray[1].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_2V5_V = resultArray[2].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_2V5_I = resultArray[3].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_2V8_V = resultArray[4].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_2V8_I = resultArray[5].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_3V6_V = resultArray[6].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_3V6_I = resultArray[7].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_BIAS_V = resultArray[8].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_BIAS_I = resultArray[9].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_TEMP = resultArray[10].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_1V5_V = resultArray[11].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_1V5_I = resultArray[12].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_2V5_V = resultArray[13].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_2V5_I = resultArray[14].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_2V8_V = resultArray[15].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_2V8_I = resultArray[16].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_3V6_V = resultArray[17].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_3V6_I = resultArray[18].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_BIAS_V = resultArray[19].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_BIAS_I = resultArray[20].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_TEMP = resultArray[21].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_1V5_V = resultArray[22].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_1V5_I = resultArray[23].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_2V5_V = resultArray[24].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_2V5_I = resultArray[25].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_2V8_V = resultArray[26].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_2V8_I = resultArray[27].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_3V6_V = resultArray[28].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_3V6_I = resultArray[29].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_BIAS_V = resultArray[30].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_BIAS_I = resultArray[31].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_TEMP = resultArray[32].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_1V5_V = resultArray[33].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_1V5_I = resultArray[34].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_2V5_V = resultArray[35].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_2V5_I = resultArray[36].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_2V8_V = resultArray[37].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_2V8_I = resultArray[38].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_3V6_V = resultArray[39].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_3V6_I = resultArray[40].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_BIAS_V = resultArray[41].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_BIAS_I = resultArray[42].data.records;
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_TEMP = resultArray[43].data.records;

                    self.timestamp = resultArray[50].data.records;
                    console.log("interval occured");
                });
            };

            this.reload();
            $interval(this.reload, 600000);
        }]
});