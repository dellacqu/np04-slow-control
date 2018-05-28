<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$days = $_GET["days"];
$elemId = $_GET["elemId"];
$db = '(DESCRIPTION=
      	(ADDRESS= (PROTOCOL=TCP) (HOST=pdbr1-s.cern.ch) (PORT=10121) )
      	(LOAD_BALANCE=on)
      	(ENABLE=BROKEN)
      	(CONNECT_DATA=
      		(SERVER=DEDICATED)
      		(SERVICE_NAME=PDBR.cern.ch)
      	)
      )';

$conn = oci_connect("np04dbro", "11Sakh41", $db);

if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$stid = oci_parse($conn, "select TS, VALUE_NUMBER from (select * from NP04_DCS_01.VEVENTSCREEN order by TS asc) where ALIAS like '%".$elemId."%' and TS >= sysdate - ".$days);
oci_execute($stid);

$outp = "";
while($rs = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
    $outp .= '{"TimeStamp":"'  . $rs["TS"] . '",';
    $outp .= '"ExactValue":"'. $rs["VALUE_NUMBER"]     . '"},';
}
    $outp ='{"records":['.$outp.']}';
    $outp = substr($outp, 0, -3) .substr($outp, -2, 3);
oci_close($conn);

echo($outp);
?>