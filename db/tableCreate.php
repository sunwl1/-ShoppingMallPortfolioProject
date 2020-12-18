<?php
include_once('./common.php');

$tableArr = array();
$tableStr = (isset($_POST['tableArr'])) ? $_POST['tableArr'] : 'noArr';
$tableArrTemp = explode(',', $tableStr);
$ColumnArr = array();
$NameSearchCount = -1;


for ($i=0; $i<count($tableArrTemp); $i++) {
    array_push($tableArr, $tableArrTemp[$i]);
    if((count($tableArrTemp) - 1) > $i)
    {   
        array_push($ColumnArr, "$tableArrTemp[$i] Text(20) NOT NULL,");
    }
}

$tableName = $tableArr[count($tableArrTemp) - 1];

if($tableArr==True){
     echo "true";
    }
    else{
        echo "false";
    }
    
$sql1 = "CREATE TABLE $tableName(id int NOT NULL AUTO_INCREMENT,";
$sql2 = "PRIMARY KEY (id));";
$sql3 = $sql1.implode("", $ColumnArr).$sql2;

$result = mysqli_query($link, $sql3);

while($row = mysqli_fetch_assoc($result)){
    echo "NO : ".$row["NO"]."<br>";
}

$sql = "SELECT NOW() AS NOW";
$result = mysqli_query($link, $sql);
$row = mysqli_fetch_assoc($result);
echo "<br>";
echo $row["NOW"];
echo "<br>";
print_r($row);

?>