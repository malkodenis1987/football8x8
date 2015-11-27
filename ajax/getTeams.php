<?php
/* DB config file*/
require_once '../config.php';
/* Set encoding to UTF-8 (problem with ciryllic) */
$mysqli->query('SET NAMES utf8') or die($mysqli->error.__LINE__);
/* SQL Query*/
$query = "SELECT * FROM team";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
/* Result to JSON */
$arr = array();
if($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		$arr[] = $row;
	}
}
/* JSON-encode the response */
$json_response = json_encode($arr);
/* Return the response */
echo $json_response;