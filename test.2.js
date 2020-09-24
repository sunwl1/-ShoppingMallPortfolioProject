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

const imgsContainer = document.createElement('div');
    imgsContainer.id = 'container';
    document.body.appendChild(imgsContainer);



function Contaierbox(obj) {
 
    const linkBox = document.createElement('a');
    const linkImg = document.createElement('img');
    const linkDiv = document.createElement('div');

    linkBox.appendChild(linkImg);
    linkDiv.appendChild(linkBox);
    imgsContainer.appendChild(linkDiv);

    imgsContainer.id = 'container';
    linkDiv.className = 'grid-item';

    linkBox.onmouseenter = () => { showCircle(linkBox, true); };
    linkBox.onmouseleave = () => { showCircle(linkBox, false); };

    linkBox.id = 'imgLinkBox';
    linkBox.href = obj.linkSrc;
    linkBox.className = 'imgLinkBoxClass';

    linkImg.src = obj.imgSrc;
    linkImg.style.width = '100%';
    linkImg.style.height = '100%';
    
    for (const i of obj.inner) {
        const circlePosition = document.createElement('div');
        const circleSrc = document.createElement('a');
        const circle = document.createElement('div');
        const circleChild = document.createElement('div');
        circle.appendChild(circleChild);
        circleSrc.appendChild(circle);
        circlePosition.appendChild(circleSrc)
        linkBox.appendChild(circlePosition);

        circleSrc.href = i.circle.src;
        circle.id = 'idParentCircle';
        circle.className = 'parentCircle';
        circlePosition.style.position = 'absolute';
        circlePosition.className = 'circle-position';
        circlePosition.style.top = `${i.circle.top}%`;
        circlePosition.style.left = `${i.circle.left}%`;
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
    
        itemName.innerHTML = i.ItemBox.Name;
        itemName.className = 'item-name';
        itemName.id = i.ItemBox.Name;
    
        itemInfo.innerHTML = i.ItemBox.subInfo;
        itemInfo.className = 'item-info';
        itemInfo.id = i.ItemBox.subInfo;
    
   
        itemPrice.innerHTML = `&bsol; ${i.ItemBox.price}`;
        itemPrice.className = 'item-price';
        itemPrice.id = i.ItemBox.price;
    
    
        arrowIcon.className = 'arrow-icon';
        arrowIcon.innerHTML = '&gt;';
    };
}

Contaierbox(imageState);
Contaierbox(imageState2);
Contaierbox(imageState3);
Contaierbox(imageState4);
Contaierbox(imageState5);
Contaierbox(imageState6);
Contaierbox(imageState7);
Contaierbox(imageState8);
Contaierbox(imageState9);


