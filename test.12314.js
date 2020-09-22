function showCircle(element, isVisible) {
    const children = element.getElementsByClassName('parentCircle');
    for (const i of children) {
        i.querySelector('.chlidCircle').style.transition = null;
        if (isVisible) i.style.visibility = 'visible';
        else i.style.visibility = 'hidden';
    }

  
}

function inTrnasCircle(element, isTrans) {
    const circleChild = element.querySelector('.chlidCircle');
    if (isTrans) {
        element.style.width = '44px';
        element.style.height = '44px';
        element.style.border = '5px solid rgba(255,255,255,0.5)';
    
        circleChild.style.width = '15px';
        circleChild.style.height = '15px';
        circleChild.style.transition = '0.25s 0.25s ease-in-out';
    } else {
        element.style.width = '50px';
        element.style.height = '50px';
        element.style.border = 'none';
    
        circleChild.style.width = '20px';
        circleChild.style.height = '20px';
        circleChild.style.transition = '0.3s 0.3s ease-in-out';
    }
}




function Contaierbox(link, imgSrc){
   

    const linkBox = document.createElement('a');
    const linkImg = document.createElement('img');
    const linkDiv = document.createElement('div');

    linkBox.appendChild(linkImg);
    linkDiv.appendChild(linkBox);
    document.body.appendChild(linkDiv);

    linkBox.id = 'imgLinkBox';
    linkBox.href = link;
    linkBox.onmouseenter = () => { showCircle(linkBox, true); };
    linkBox.onmouseleave = () => { showCircle(linkBox, false); };

    linkDiv.style.top = '100px';
    linkDiv.style.left = '100px';
    linkDiv.style.width = '500px';
    linkDiv.style.height = '500px';
    linkDiv.style.position = 'relative';

    linkImg.src = imgSrc;
    linkImg.style.width = '100%';
    linkImg.style.height = '100%';
}

Contaierbox('#','라이언 이미지.png')

function createCir(arrPosition, element) {
    arrPosition.forEach(e => {   //몰라 확실히
        
        const circle = document.createElement('div');
        const circleChild = document.createElement('div');
        element.appendChild(circle);
        circle.appendChild(circleChild);
        
        circle.className = 'parentCircle';
        circle.style.position = 'absolute';
        circle.style.visibility = 'hidden';
        circle.style.top = e[0] - (circle.offsetWidth / 2);
        circle.style.left = e[1] - (circle.offsetWidth / 2);
        circle.onmouseenter = () => { inTrnasCircle(circle, true); };
        circle.onmouseleave = () => { inTrnasCircle(circle, false); };

        circleChild.className = 'chlidCircle';
    });

 
}

createCir([[0, 0], [30, 30], [100, 50]], document.getElementById('imgLinkBox'));
