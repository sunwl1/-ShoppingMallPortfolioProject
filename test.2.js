function showCircle(element, isVisible) {
    const children = element.getElementsByClassName('parentCircle');
    for (const i of children) {
        i.querySelector('.chlidCircle').style.transition = 'none';
        i.querySelector('.item_infoBox').style.transition = 'none';
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
    const chliditem = element.querySelector('.item_infoBox')
    if(isTrans) {
        element.style.border = '0.2rem solid rgba(255,255,255,0.5)';
        chlidCir.style.width = '0.6rem';
        chlidCir.style.height = '0.6rem';
        chlidCir.style.transition = 'all 0.2s ease-in-out';
        chliditem.style.visibility = 'visible';
        chliditem.style.opacity = '1';
        chliditem.style.transition = 'all 0.2s ease-in-out';
    } else {
        element.style.border = '0.2rem solid transparent';
        chlidCir.style.width = '1rem';
        chlidCir.style.height = '1rem';
        chlidCir.style.transition = 'all 0.2s ease-in-out';

        chliditem.style.visibility = 'hidden'
        chliditem.style.opacity = '0';
        chliditem.style.transition = 'all 0.2s ease-in-out';
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
        circle.style.top = `${obj.innerCircle[i].top}px`;
        circle.style.left = `${obj.innerCircle[i].left}px`;
        circle.onmouseover = () => { inTransCir(circle, true), showItem(circle, true); };
        circle.onmouseout = () => { inTransCir(circle, false), showItem(circle, false); };
    
        circleChild.className = 'chlidCircle';

        const itemInfoBox = document.createElement('div');
        const itemName = document.createElement('h2');
        const itemInfo = document.createElement('p');
        const itemPrice = document.createElement('p');
        const arrowIcon = document.createElement('p');

        itemInfoBox.appendChild(itemName);
        itemInfoBox.appendChild(itemInfo);
        itemInfoBox.appendChild(itemPrice);
        itemInfoBox.appendChild(arrowIcon);
        circle.appendChild(itemInfoBox);
    
        itemInfoBox.className = 'item_infoBox';
        itemInfoBox.onmouseover = () => { showItem(circle, true); };
        itemInfoBox.onmouseout = () => { showItem(circle, false); };
    
        itemName.innerHTML = obj.innerItemBox[i].Name;
        itemName.className = 'item-name';
    
        itemInfo.innerHTML = obj.innerItemBox[i].subInfo;
        itemInfo.className = 'item-info';
   
        itemPrice.innerHTML = obj.innerItemBox[i].price;
        itemPrice.className = 'item-price';
    
        arrowIcon.className = 'arrow-icon';
        arrowIcon.innerHTML = '&gt;';
    };
}

Contaierbox(imageState);
Contaierbox(imageState2);


