<?php
$host = "localhost";
$username = "vasci";
$password = "xpdlvm55!";
$database = "vasci";
$dsn = ("mysql:host=$localhost;dbname=$sewcute");
$link = mysqli_connect("$host", "$username", "$password","$database")or die("cannot connect"); 

if(!$link){
	echo "Database Connection Error!!";
}else{
	echo "Database Connection Success!!";
}
$selectdb = mysqli_select_db($link, $database);

//데이터베이스 선택 확인
if(!$selectdb){
	echo "Database Select DB Error!!";
}else{
	echo "Database Select DB Success!!";
}
?>