
function showCircle(element, isVisible) {
    const children = element.getElementsByClassName('parentCircle');
    for (const i of children) {
        i.querySelector('.chlidCircle').style.transition = null;
        if (isVisible) i.style.visibility = 'visible';
        else i.style.visibility = 'hidden';
    }
}

function inTransCir(element, isTrans) {
    const chlidCir = element.querySelector('.chlidCircle')
    if(isTrans) {
        element.style.width = '44px';
        element.style.height = '44px';
        element.style.border = '5px solid rgba(255,255,255,0.5)';
    
        chlidCir.style.width = '15px';
        chlidCir.style.height = '15px';

        chlidCir.style.transition = '0.25s 0.25s ease-in-out';
    } else {
        element.style.width = '50px';
        element.style.height = '50px';
        element.style.border = 'none';
    
        chlidCir.style.width = '20px';
        chlidCir.style.height = '20px';
        chlidCir.style.transition = '0.3s 0.3s ease-in-out';
    }
}


function Contaierbox(state) {
    // const imgState = state;
    for (const i in state) {

        const linkBox = document.createElement('a');
        const linkImg = document.createElement('img');
        const linkDiv = document.createElement('div');

        linkBox.appendChild(linkImg);
        linkDiv.appendChild(linkBox);
        document.body.appendChild(linkDiv);

        linkBox.id = 'imgLinkBox';
        linkBox.href =`${state.linkSrc}`;
        // linkBox.onmouseenter = () => { showCircle(linkBox, true); };
        // linkBox.onmouseleave = () => { showCircle(linkBox, false); };

        linkBox.className = 'imgLinkBoxClass';
        linkDiv.style.width = `${state.width}px`;
        linkDiv.style.height =`${state.height}px`;
        linkDiv.style.position = 'absolute';
        linkDiv.style.top = `${state.top}px`;
        linkDiv.style.left =`${state.left}px`;

        linkImg.src = `${state.imgSrc}`;
        linkImg.style.width = '100%';
        linkImg.style.height = '100%';

    };

}

Contaierbox(imageState);

// function createCir(arrPosition, element) {
//     arrPosition.forEach( () => {
//         const circleSrc = document.createElement('a');
//         const circle = document.createElement('div');
//         const circleChild = document.createElement('div');
//         circle.appendChild(circleChild);
//         circle.appendChild(circleSrc);
//         element.appendChild(circle);

//         circleSrc.href = arrPosition.href;
//         circle.id = 'idParentCircle';
//         circle.className = 'parentCircle';
//         circle.style.position = 'absolute';
//         circle.style.visibility = 'visible';
//         circle.style.top = arrPosition.top;
//         circle.style.left = arrPosition.left;
//         // circle.onmouseover = () => { inTransCir(circle, true); };
//         // circle.onmouseout = () => { inTransCir(circle, false); };

//         circleChild.className = 'chlidCircle';

//     });
// }
// createCir(imageState.innerCircle, document.getElementById('imgLinkBox'));


// function createArrowBox(element, name, info, price) {
//     const arrowBox = document.createElement('div');
//     const itemName = document.createElement('h2');
//     const itemInfo = document.createElement('p');
//     const itemPrice = document.createElement('p');
//     const arrowIcon = document.createElement('p');

//     arrowBox.appendChild(itemName);
//     arrowBox.appendChild(itemInfo);
//     arrowBox.appendChild(itemPrice);
//     arrowBox.appendChild(arrowIcon);
//     element.appendChild(arrowBox);

//     arrowBox.className = 'arrow_box';
//     arrowBox.style.position = 'absolute';
//     arrowBox.style.bottom = '70px';
//     arrowBox.style.width = '100px';
//     arrowBox.style.height = '80px';
//     arrowBox.style.left = '-27px';

//     itemName.innerHTML = name;
//     itemName.style.width = '70px';
//     itemName.style.padding = '5px 5px 5px 4px';
//     itemInfo.innerHTML = info;
//     itemInfo.style.width = '70px';
//     itemInfo.style.padding = '5px 5px 5px 4px';
//     itemPrice.innerHTML = price;
//     itemPrice.style.width = '70px';
//     itemPrice.style.padding = '5px 5px 5px 4px';
//     arrowIcon.innerHTML = '&gt;';
//     arrowIcon.style.position = 'absolute';
//     arrowIcon.style.left = '80px';
//     arrowIcon.style.top = '0px';


// }

// createArrowBox(document.querySelector('.parentCircle'), '가나다라', '마바사', '123123');


