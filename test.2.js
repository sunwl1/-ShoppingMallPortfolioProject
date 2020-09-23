
function showCircle(element, isVisible) {
    const children = element.getElementsByClassName('parentCircle');
    for (const i of children) {
        i.querySelector('.chlidCircle').style.transition = 'none';
        i.querySelector('.item_box').style.transition = 'none';
        if (isVisible) i.style.opacity = '1', i.style.visibility = 'visible',
        i.style.transition = 'all 0.3s ease-in-out';

        else i.style.opacity = '0',
        i.style.transition = 'all 0.3s ease-in-out';
    }
}
function showItem(element, isVisible) {
    const childItem = element.getElementsByClassName('parentCircle');
    for (const i of childItem) {
        if (isVisible) i.style.visibility = 'visible';
        else i.style.visibility = 'hidden';
    }
}

function inTransCir(element, isTrans) {
    const chlidCir = element.querySelector('.chlidCircle')
    const chliditem = element.querySelector('.item_box')
    if(isTrans) {
        element.style.width = '1.7rem';
        element.style.height = '1.7rem';
        element.style.border = '0.2rem solid rgba(255,255,255,0.5)';
        element.style.transition = 'all 0.2s 0.2s ease-in-out';
        
        chlidCir.style.width = '0.5rem';
        chlidCir.style.height = '0.5rem';
        chlidCir.style.transition = 'all 0.3s 0.3s ease-in-out';

        chliditem.style.visibility = 'visible'
        chliditem.style.opacity = '1';
        chliditem.style.transition = 'all 0.7s ease-in-out';
        chliditem.style.bottom = '35px';
      
    } else {
        element.style.width = '2rem';
        element.style.height = '2rem';
        element.style.border = 'none';
        element.style.transition = 'none';
        
        chlidCir.style.width = '1rem';
        chlidCir.style.height = '1rem';
        chlidCir.style.transition = 'all 0.3s 0.3s ease-in-out';

        chliditem.style.visibility = 'hidden'
        chliditem.style.opacity = '0';
        chliditem.style.transition = 'all 0.2s ease-in-out';
        chliditem.style.bottom = '35px';
     
    }
}

function Contaierbox(obj) {

        const linkBox = document.createElement('a');
        const linkImg = document.createElement('img');
        const linkDiv = document.createElement('div');

        linkBox.appendChild(linkImg);
        linkDiv.appendChild(linkBox);
        document.body.appendChild(linkDiv);

        linkBox.onmouseenter = () => { showCircle(linkBox, true); };
        linkBox.onmouseleave = () => { showCircle(linkBox, false); };


    for (const i in obj) {
        linkBox.id = 'imgLinkBox';
        linkBox.href = obj.linkSrc;
        
        linkBox.className = 'imgLinkBoxClass';
        linkDiv.style.width = `${obj.width}px`;
        linkDiv.style.height =`${obj.height}px`;
        linkDiv.style.position = 'absolute';
        linkDiv.style.top = `${obj.top}px`;
        linkDiv.style.left =`${obj.left}px`;

        linkImg.src = obj.imgSrc;
        linkImg.style.width = '100%';
        linkImg.style.height = '100%';
    }
    for (const i in obj.innerCircle,  obj.innerItemBox) {
        const circleSrc = document.createElement('a');
        const circle = document.createElement('div');
        const circleChild = document.createElement('div');
        circle.appendChild(circleChild);
        circleSrc.appendChild(circle);
        linkBox.appendChild(circleSrc);
    
        circleSrc.href = obj.innerCircle[i].src;
        circle.id = 'idParentCircle';
        circle.className = 'parentCircle';
        circle.style.position = 'absolute';
        circle.style.visibility = 'hidden';
        circle.style.opacity = '0';
        circle.style.transition = 'all 0.5s ease-in-out';
        circle.style.top = `${obj.innerCircle[i].top}px`;
        circle.style.left = `${obj.innerCircle[i].left}px`;
        circle.onmouseover = () => { inTransCir(circle, true), showItem(circle, true); };
        circle.onmouseout = () => { inTransCir(circle, false), showItem(circle, false); };
    
        circleChild.className = 'chlidCircle';

        const itemBox = document.createElement('div');
        const itemName = document.createElement('h2');
        const itemInfo = document.createElement('p');
        const itemPrice = document.createElement('p');
        const arrowIcon = document.createElement('p');

        itemBox.appendChild(itemName);
        itemBox.appendChild(itemInfo);
        itemBox.appendChild(itemPrice);
        itemBox.appendChild(arrowIcon);
        circle.appendChild(itemBox);
    
        itemBox.className = 'item_box';
        itemBox.style.position = 'absolute';
        itemBox.style.visibility = 'hidden';
        itemBox.style.width = '100px';
        itemBox.style.height = '80px';
        itemBox.style.bottom = '35px';
        itemBox.style.left = '-45px';
   
        itemBox.onmouseover = () => { showItem(circle, true); };
        itemBox.onmouseout = () => { showItem(circle, false); };
    

        itemBox.style.backgroundColor = 'white';
        itemBox.style.padding = '10px';
        itemBox.style.boxShadow = '0px 0px 1px 1px rgba(214, 214, 214, 0.9)';      

        itemName.innerHTML = obj.innerItemBox[i].Name;
        itemName.style.fontSize = '0.87rem';
        itemName.style.width = '70px';
        itemName.style.padding = '5px 5px 5px 4px';
    
        itemInfo.innerHTML = obj.innerItemBox[i].subInfo;
        itemInfo.style.fontSize = '0.87rem';
        itemInfo.style.width = '70px';
        itemInfo.style.padding = '5px 5px 5px 4px';
    
        itemPrice.innerHTML = obj.innerItemBox[i].price;
        itemPrice.style.fontSize = '0.87rem';
        itemPrice.style.width = '70px';
        itemPrice.style.padding = '5px 5px 5px 4px';
    
        arrowIcon.style.position = 'absolute';
        arrowIcon.style.left = '90px';
        arrowIcon.style.top = '15px';
        arrowIcon.innerHTML = '&gt;';
    
    };
    

}

Contaierbox(imageState)
Contaierbox(imageState2);


