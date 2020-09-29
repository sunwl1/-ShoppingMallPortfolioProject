<?
include_once('./common.php');
include_once('./tableCreate.php');

$selectTable = (isset($_POST['selectTable'])) ? $_POST['selectTable'] : 'noColumn';
$tableColumn = explode(',', $selectTable);

echo ($tableColumn[count($tableColumn)-1]);

switch ($tableColumn[count($tableColumn)-1]) {
    case 'product':
        $sql4 = "INSERT INTO '$selectTable' (category, name, description, price, rates, idCode, size,'imgLink1','imgLink2','imgLink3') 
        VALUES ('$tableColumn[0]','$tableColumn[1]', '$tableColumn[2]', '$tableColumn[3]', '$tableColumn[4]', '$tableColumn[5]', '$tableColumn[6]', '$tableColumn[7]', '$tableColumn[8]', '$tableColumn[9]')";
        $result = mysqli_query($link, $sql4);
        mysqli_fetch_assoc($result);
        print_r($tableColumn);
        break;
    case 'userInfo':
        $sql4 = "INSERT INTO '$selectTable' (username, birthday, phone, email, address, password) 
        VALUES ('$tableColumn[0]', '$tableColum[1]', '$tableColumn[2]', '$tableColumn[3]', '$tableColumn[4]', '$tableColumn[5]')";
        $result = mysqli_query($link, $sql4);
        mysqli_fetch_assoc($result);
        echo ($tableColumn[count($tableColumn)-1]);
        break;
    case 'wishList ':
        $sql4 = "INSERT INTO '$selectTable' (productname , productoption, productid,productprice) 
        VALUES ('$tableColumn[0]' , '$tableColumn[1]', '$tableColumn[2]','$tableColumn[3]')";
        $result = mysqli_query($link, $sql4);
        mysqli_fetch_assoc($result);
        break;
    case 'cart':
        $sql4 = "INSERT INTO '$selectTable' (productname , productoption, productid,productprice)   
        VALUES ('$tableColumn[0]' , '$tableColumn[1]', '$tableColumn[2]','$tableColumn[3]')";
        $result = mysqli_query($link, $sql4);
        mysqli_fetch_assoc($result);
        break;
    case 'category':
        $sql4 = "INSERT INTO '$selectTable' (productname , productoption, productid,productprice) 
        VALUES ('$tableColumn[0]' , '$tableColumn[1]', '$tableColumn[2]','$tableColumn[3]') ";
        $result = mysqli_query($link, $sql4);
        mysqli_fetch_assoc($result);
        break;
    case 'imgUrl':
        $sql4 = "INSERT INTO '$selectTable' (name, mail, tel) 
        VALUES ('$tableColumn[0]', '$tableColumn[1]', '$tableColumn[2]')";
        $result = mysqli_query($link, $sql4);
        mysqli_fetch_assoc($result);
        break;    
    default:

        break;
}
// // $sql4 = "INSERT INTO $selectTable (name, mail, tel) 
// //         VALUES ('John', 'Doe', 'john@example.com')";

// // $query = "SELECT Name, $selectTable FROM mail  ORDER by ID LIMIT 4";
// // $result =  mysqli_query($query);
// // echo $result;


// $query = "SELECT * FROM $selectTable";
// //$query = "SELECT COUNT(*) as cnt FROM  $selectTable";
// //$query = "SELECT COUNT(*) as cnt FROM  $selectTable";
// $result = mysqli_query($link, $query);
// $row = mysqli_fetch_array($result);
// $tableColumn = count($row);
// for ($i=0; $i < $tableColumn; $i++) { 
//     print_r($row[$i].'<br>'.$i);
// }
// //echo $row[0];
// // echo $row;
// // $result = mysqli_query($link, $sql4);
// // mysqli_fetch_assoc($result);

?>