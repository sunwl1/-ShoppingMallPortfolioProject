<?php
$styles = [
    'index.php' => 'index.css',
    'cart.php' => 'cart.css',
    'itemDet.php' => 'itemDet.css',
    'login.php' => 'login.css',
    'wishList.php' => 'wishList.css'
];
?>

<link rel="stylesheet" href="./css/reset.css" />
<link rel="stylesheet" href="./css/common.css" />
<link rel="stylesheet" type="text/css" href="./css/<?=$styles[$this_page]?>">