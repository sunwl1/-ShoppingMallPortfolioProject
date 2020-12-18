function getColumn(){
    httpRequest = new XMLHttpRequest();

    if(!httpRequest) {
        alert('XMLHTTP Err');
        return false;
    }
    
    httpRequest.open('GET', 'columnSearch.php');
    var javaScriptVar = "<?php echo $name; ?>";
    return javaScriptVar;
}
console.log(getColumn());