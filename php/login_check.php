<?php
session_start();
$id=$_POST['id'];
$pw=$_POST['pw'];
$mysqli=mysqli_connect("vasci.cafe24.com","")

$check="SELECT * FROM userinfo WHERE userid='$id'";
$result=$mysqli->query($check);
if($result->num_rows==1){
    $row=$result->fetch_array(MYSQLI_ASSOC);
    if($row['userpw']==$pw){
        $_SESSION['userid']=$id;
        if(isset($_SESSION['userid'])){
            header('Location: ./index.php');
        }
        else{
            echo ""
        }
    }
}
?>