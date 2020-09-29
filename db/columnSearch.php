<?
include_once('./common.php');
const $column = {
    $product : [],
    $userInfo : [],
    $wishList : [],
    $imgUrl : [],
    $category : [],
    $cart : [],
}
$query = "SELECT * FROM 'product'";
$result = mysqli_query($link, $query);
$soso = "수년";
?>