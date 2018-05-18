<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

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

$stid = oci_parse($conn, 'select VALUE_NUMBER from (select * from NP04_DCS_01.VEVENTSCREEN order by TS desc) where ALIAS like \'%TT0119%\' AND rownum = 1');
oci_execute($stid);

$outp = "";
while($rs = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
    $outp .= '{"Mnish":"'  . $rs["VALUE_NUMBER"] . '"}';
}
$outp ='{"records":['.$outp.']}';
oci_close($conn);

echo($outp);
?>