function showCircle(element, isVisible) {
    const children = element.getElementsByClassName('parentCircle');
    for (const i of children) {
        i.querySelector('.chlidCircle').style.transition = null;
        if (isVisible) i.style.visibility = 'visible';
        else i.style.visibility = 'hidden';
    }

    // let ShowParentCircle = document.getElementsByClassName('parentCircle');
    // let ShowChlidCircle = document.getElementsByClassName('chlidCircle');
    // for (let i = 0; i < ShowParentCircle.length; i++) {
    //     ShowParentCircle[i].style.visibility = 'visible'
    //     ShowChlidCircle[i].style.visibility = 'visible'
    // }
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


// function inTransSecondCircle() {
//     let inTransSecondParentCircle = document.getElementById('secondCircle');
//     let inTrnasSecondChlidCircle = document.getElementById('secondChlidCircle');
//     inTransSecondParentCircle.style.width = '44px';
//     inTransSecondParentCircle.style.height = '44px';
//     inTransSecondParentCircle.style.border = '5px solid rgba(255,255,255,0.5)';
//     inTrnasSecondChlidCircle.style.width = '15px';
//     inTrnasSecondChlidCircle.style.height = '15px';
//     inTrnasSecondChlidCircle.style.transition = '0.25s 0.25s ease-in-out';
// }

// function outTransSecondCircle() {
//     let outTransParentCircle = document.getElementById('secondCircle');
//     let outTrnasChlidCircle = document.getElementById('secondChlidCircle');
//     outTransParentCircle.style.visibility = 'visible';
//     outTransParentCircle.style.width = '50px';
//     outTransParentCircle.style.height = '50px';
//     outTransParentCircle.style.border = 'none';
//     outTrnasChlidCircle.style.visibility = 'visible';
//     outTrnasChlidCircle.style.width = '20px';
//     outTrnasChlidCircle.style.height = '20px';
//     outTrnasChlidCircle.style.transition = '0.3s 0.3s ease-in-out';
// }


function Contaierbox(link, imgSrc){
    // let createContainer = document.createElement('div');
    // createContainer.style.top = '100px';
    // createContainer.style.left = '100px';
    // createContainer.style.width = '500px';
    // createContainer.style.height = '500px';
    // createContainer.style.position = 'relative';
    // let img = document.createElement('img');
    // img.src = imgSrc;
    // img.style.width = '100%';
    // img.style.height = '100%';

    // let linkSrc = document.createElement('a');
    // linkSrc.href = link;
    // linkSrc.style.width = '100%';
    // linkSrc.style.height = '100%';

    // linkSrc.appendChild(img);
    // createContainer.appendChild(linkSrc);
    // document.body.appendChild(createContainer);

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
    arrPosition.forEach(e => {
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

    // let box = document.getElementById('container-circle');
    // let createFirstParentCircle = document.createElement('div');
    // createFirstParentCircle.className = 'parentCircle';
    // createFirstParentCircle.id = 'firstCircle'
    // createFirstParentCircle.style.position = 'absolute';
    // createFirstParentCircle.style.visibility = 'hidden';
    // createFirstParentCircle.style.top = tops;
    // createFirstParentCircle.style.left = left; 
    
    
    // let createFirstChlidCircle = document.createElement('div');
    // createFirstChlidCircle.className = 'chlidCircle';
    // createFirstChlidCircle.id = 'firstChlidCircle';
    
    // createFirstParentCircle.appendChild(createFirstChlidCircle);
    // box.appendChild(createFirstParentCircle);
}

createCir([[0, 0], [30, 30], [100, 50]], document.getElementById('imgLinkBox'));

// function createCirSecond(tops, left) {
//     let box = document.getElementById('container-circle');
//     let createSecondParentCircle = document.createElement('div');
//     createSecondParentCircle.className = 'parentCircle';
//     createSecondParentCircle.id = 'secondCircle'
//     createSecondParentCircle.style.position = 'relative';
//     createSecondParentCircle.style.visibility = 'hidden';
//     createSecondParentCircle.style.top = tops;
//     createSecondParentCircle.style.left = left; 
//     createSecondParentCircle.onmouseenter = () => {inTransSecondCircle() };
//     createSecondParentCircle.onmouseout = () => {outTransSecondCircle() };
    
//     let createSecondChlidCircle = document.createElement('div');
//     createSecondChlidCircle.id = 'secondChlidCircle';
//     createSecondChlidCircle.className = 'chlidCircle';
//     createSecondChlidCircle.onmouseenter = () => {inTransSecondCircle() };
//     createSecondChlidCircle.onmouseout = () => {outTransSecondCircle() };
    
//     createSecondParentCircle.appendChild(createSecondChlidCircle);
//     box.appendChild(createSecondParentCircle);
// }

// createCirSecond('100px','100px');

// function inTransSecondCircle() {
//     let inTransSecondParentCircle = document.getElementById('secondCircle');
//     let inTrnasSecondChlidCircle = document.getElementById('secondChlidCircle');
//     inTransSecondParentCircle.style.width = '44px';
//     inTransSecondParentCircle.style.height = '44px';
//     inTransSecondParentCircle.style.border = '5px solid rgba(255,255,255,0.5)';
//     inTrnasSecondChlidCircle.style.width = '15px';
//     inTrnasSecondChlidCircle.style.height = '15px';
//     inTrnasSecondChlidCircle.style.transition = '0.25s 0.25s ease-in-out';
// }


// function outTransSecondCircle() {
//     let outTransParentCircle = document.getElementById('secondCircle');
//     let outTrnasChlidCircle = document.getElementById('secondChlidCircle');
//     outTransParentCircle.style.visibility = 'visible';
//     outTransParentCircle.style.width = '50px';
//     outTransParentCircle.style.height = '50px';
//     outTransParentCircle.style.border = 'none';
//     outTrnasChlidCircle.style.visibility = 'visible';
//     outTrnasChlidCircle.style.width = '20px';
//     outTrnasChlidCircle.style.height = '20px';
//     outTrnasChlidCircle.style.transition = '0.3s 0.3s ease-in-out';
// }
// function showCircle() {
//     let ShowParentCircle = document.getElementsByClassName('parentCircle');
//     let ShowChlidCircle = document.getElementsByClassName('chlidCircle');
//     for (let i = 0; i < ShowParentCircle.length; i++) {
//         ShowParentCircle[i].style.visibility = 'visible'
//         ShowChlidCircle[i].style.visibility = 'visible'
//     }
   
// }

// function deleteCircle() {
//     let deleteShowParentCircle = document.getElementsByClassName('parentCircle');
//     let deleteShowChlidCircle = document.getElementsByClassName('chlidCircle');


    
// }
// //클래스로만 지우기