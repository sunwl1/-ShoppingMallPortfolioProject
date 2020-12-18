let tableObj = {
    obj : [],
   setObj : function(Ele,id,style,childId){
       this.obj.push(id);
       var objtemp = Object.create(objCrate);
       if(arguments.length > 3)
       objtemp.create(Ele,id,style,childId);
       else
       objtemp.create(Ele,id,style);

       this.obj[id] = objtemp.getObj();
   }
};
createSelect();
function createSelect()
{
    tableObj.setObj('button','tableButton',tableSetStyle.selectBtn);
    tableObj.obj.tableButton.innerHTML = 'table 생성';

    tableObj.setObj('button','columnButton',tableSetStyle.selectBtn);
    tableObj.obj.columnButton.innerHTML = '컬럼 생성및 수정';

    tableObj.obj.tableButton.onclick = function() {
        tableObj.obj.tableButton.style.display = "none";
        tableObj.obj.columnButton.style.display = "none";
        createTable();    
    }

    tableObj.obj.columnButton.onclick = function() {
        tableObj.obj.tableButton.style.display = "none";
        tableObj.obj.columnButton.style.display = "none";
        createColumn();    
    }
}

function createTable(){
    tableObj.setObj('div','tableDiv',tableSetStyle.none);
    
    tableObj.setObj('lable','tagName',tableSetStyle.lable,'tableDiv');
    tableObj.obj.tagName.innerHTML = 'table 컬럼 갯수';
    
    tableObj.setObj('input','tableCount',tableSetStyle.countBox,'tableDiv');
    
    tableObj.setObj('button','tableCountButton',tableSetStyle.tableBtn);
    tableObj.obj.tableCountButton.innerHTML = '확인';
    
    tableObj.obj.tableCountButton.onclick = function() {
        
        if(tableObj.obj.tableCount.value === "")return;
        let tableCount = tableObj.obj.tableCount.value;
    
        tableObj.obj.tagName.innerHTML = 'table 컬럼 설정';
    
        var Arrtable = [];
        for (let i = 0; i < tableCount; i++) {
            tableObj.setObj('div','tableDiv' + i ,tableSetStyle.tableDiv,'tableDiv')
            
            tableObj.setObj('lable','tagName' + i ,tableSetStyle.lable,'tableDiv' + i)
            tableObj.obj['tagName' + i].innerHTML = i + 1 + '번째 Name(영어로)';
            tableObj.setObj('input','velueName' + i ,tableSetStyle.tableTextBox,'tableDiv' + i)
            
        }
        
        tableObj.setObj('lable','tableName',tableSetStyle.lable,'tableDiv');
        tableObj.obj.tableName.innerHTML = 'table 이름을 적어주세요(영어로)';
        tableObj.setObj('input','NameTextbox',tableSetStyle.tableNameBox,'tableDiv');
    
        tableObj.obj.tableCountButton.onclick = function() {
            for (let j = 0; j < tableCount; j++) {
                Arrtable.push(tableObj.obj['velueName' + j].value);    
            }
            Arrtable.push(tableObj.obj.NameTextbox.value);
            
            console.log(Arrtable);
            createTableArr('tableCreate.php',Arrtable); 
        }
    
        tableObj.obj.tableCount.style.display = "none";
    }
}

function createColumn(){
    tableObj.setObj('input','tableSelectName',tableSetStyle.tableTextBox);

    tableObj.setObj('button','tableButton',tableSetStyle.selectBtn);
    tableObj.obj.tableButton.innerHTML = '선택할 table 이름';
    tableObj.obj.tableButton.onclick = function(){
        tableObj.setObj('div','tableDiv',tableSetStyle.none);
        tableObj.setObj('button','chageColumn',tableSetStyle.selectBtn);
        tableObj.obj.chageColumn.innerHTML = '확인';
        let Arr = [];
        let selectTable = tableObj.obj.tableSelectName.value;
        switch (selectTable) {
            case 'product':
                for (let i = 0; i < columnCount[0]; i++) {
                    tableObj.setObj('div','tableDiv' + i ,tableSetStyle.tableDiv,'tableDiv')
                    
                    tableObj.setObj('lable','tagValue' + i ,tableSetStyle.lable,'tableDiv' + i)
                    tableObj.obj['tagValue' + i].innerHTML = tableColumn.product[i];
                    tableObj.setObj('input','tableValue' + i,tableSetStyle.tableTextBox,'tableDiv' + i);   
                    Arr.push(tableObj.obj['tableValue' + i].value);
                }
                break;
            case 'userInfo':
                for (let i = 0; i < columnCount[1]; i++) {
                    tableObj.setObj('div','tableDiv' + i ,tableSetStyle.tableDiv,'tableDiv')
                    
                    tableObj.setObj('lable','tagValue' + i ,tableSetStyle.lable,'tableDiv' + i)
                    tableObj.obj['tagValue' + i].innerHTML = tableColumn.product[i];
                    tableObj.setObj('input','tableValue' + i,tableSetStyle.tableTextBox,'tableDiv' + i);   
                    Arr.push(tableObj.obj['tableValue' + i].value);
                }
                break;
            case 'wishList':
                for (let i = 0; i < columnCount[2]; i++) {
                    tableObj.setObj('div','tableDiv' + i ,tableSetStyle.tableDiv,'tableDiv')
                    
                    tableObj.setObj('lable','tagValue' + i ,tableSetStyle.lable,'tableDiv' + i)
                    tableObj.obj['tagValue' + i].innerHTML = tableColumn.product[i];
                    tableObj.setObj('input','tableValue' + i,tableSetStyle.tableTextBox,'tableDiv' + i);   
                    Arr.push(tableObj.obj['tableValue' + i].value);
                }
                break;
            case 'cart':
                for (let i = 0; i < columnCount[3]; i++) {
                    tableObj.setObj('div','tableDiv' + i ,tableSetStyle.tableDiv,'tableDiv')
                    
                    tableObj.setObj('lable','tagValue' + i ,tableSetStyle.lable,'tableDiv' + i)
                    tableObj.obj['tagValue' + i].innerHTML = tableColumn.product[i];
                    tableObj.setObj('input','tableValue' + i,tableSetStyle.tableTextBox,'tableDiv' + i);   
                    Arr.push(tableObj.obj['tableValue' + i].value);
                }
                break;
            case 'category':
                for (let i = 0; i < columnCount[4]; i++) {
                    tableObj.setObj('div','tableDiv' + i ,tableSetStyle.tableDiv,'tableDiv')
                    
                    tableObj.setObj('lable','tagValue' + i ,tableSetStyle.lable,'tableDiv' + i)
                    tableObj.obj['tagValue' + i].innerHTML = tableColumn.product[i];
                    tableObj.setObj('input','tableValue' + i,tableSetStyle.tableTextBox,'tableDiv' + i);   
                    Arr.push(tableObj.obj['tableValue' + i].value);
                }
                break;
            case 'imgUrl':
                for (let i = 0; i < columnCount[5]; i++) {
                    tableObj.setObj('div','tableDiv' + i ,tableSetStyle.tableDiv,'tableDiv')
                    
                    tableObj.setObj('lable','tagValue' + i ,tableSetStyle.lable,'tableDiv' + i)
                    tableObj.obj['tagValue' + i].innerHTML = tableColumn.product[i];
                    tableObj.setObj('input','tableValue' + i,tableSetStyle.tableTextBox,'tableDiv' + i);   
                    Arr.push(tableObj.obj['tableValue' + i].value);
                }
                break;
            default:
                break;
        }
        Arr.push(selectTable);
        tableObj.obj.chageColumn.onclick = function(){
            createColumnSet('columnAdd.php',Arr);
        }
        tableObj.obj.tableSelectName.style.display = "none";
        tableObj.obj.tableButton.style.display = "none";
    }
}

function createColumnSet(url,tableName){
    httpRequest = new XMLHttpRequest();

    if(!httpRequest) {
        alert('XMLHTTP Err');
        return false;
    }
    
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('selectTable' +'=' + encodeURIComponent(tableName)); 
}

function createTableArr(url, tableArr) {
    httpRequest = new XMLHttpRequest();

    if(!httpRequest) {
        alert('XMLHTTP Err');
        return false;
    }
    
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('tableArr' +'=' + encodeURIComponent(tableArr));        
}
  