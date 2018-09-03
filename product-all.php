<?php
  header('Acess-Control-Allow-Origin: *');
  include_once 'connect.php';

  $sql = "select * from product";
  mysql_query("set names utf8");
  $result = mysql_query($sql);
  $json = array();
  while($obj = mysql_fetch_object($result)) {
    $json[] = $obj;
  }
  echo json_encode($json);
  ?>
