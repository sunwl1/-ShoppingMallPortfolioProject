let objCrate = {
    objId : '',
    obj : null,
    create : function(Ele,id,style,childId){    
        try {
            if(arguments.length <= 1 ) throw '최소 형태, 아이디,스타일 설정해주세요'
            let isChild = arguments.length > 3 ? true : false;
            obj = document.createElement(Ele);
            obj.id = id;
            objId = id;
            
            if(style !='')
            {
                let styleLength = style.length;            
                for (let i = 0; i < styleLength; i++) {
                  let objSetting = 'obj.style.' + style[i];
                  let temp = eval(objSetting);  
                }          
            }

            if(isChild == true)
            {
                let parents = document.getElementById(childId);
                parents.appendChild(obj);
            }
            else document.body.appendChild(obj);
        } catch (error) {
            console.log('Div crate :' +error);
        }
    },
    getObj : (myobj=>obj),
  }