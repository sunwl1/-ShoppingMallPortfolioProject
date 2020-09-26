// function showCircle(element, isVisible) {
//   let children = element.getElementsByClassName('parentCircle');
//   for (const i of children) {
//     i.querySelector('.chlidCircle').style.transition = 'none';
//     i.querySelector('.item_infoBox').style.transition = 'none';
//     if (isVisible)
//       (i.style.opacity = '1'),
//         (i.style.visibility = 'visible'),
//         (i.style.transition = 'all 0.3s ease-in-out');
//     else (i.style.opacity = '0'), (i.style.transition = 'all 0.3s ease-in-out');
//   }
// }

// function showItem(element, isVisible) {
//   const childItem = element.getElementsByClassName('parentCircle');
//   for (const i of childItem) {
//     if (isVisible) i.style.visibility = 'visible';
//     else i.style.visibility = 'hidden';
//   }
// }

// function inTransCir(element, isTrans) {
//   const chlidCir = element.querySelector('.chlidCircle');
//   const chliditem = element.querySelector('.item_infoBox');
//   if (isTrans) {
//     element.style.width = '1.2rem';
//     element.style.height = '1.2rem';
//     element.style.border = '0.1rem solid rgba(255,255,255,0.5)';
//     chlidCir.style.width = '0.2rem';
//     chlidCir.style.height = '0.2rem';
//     chlidCir.style.transition = 'all 0.2s ease-in-out';
//     chliditem.style.visibility = 'visible';
//     chliditem.style.opacity = '1';
//     chliditem.style.transition = 'all 0.2s ease-in-out';

//     // if (matchMedia('min-wiedth: 56.25em').matches) {
//     //   element.style.width = '2.5rem';
//     //   element.style.height = '2.5rem';
//     //   element.style.border = '0.3rem solid rgba(255,255,255,0.5)';
//     //   chlidCir.style.width = '0.9rem';
//     //   chlidCir.style.height = '0.9rem';
//     //   chlidCir.style.transition = 'all 0.2s ease-in-out';
//     //   chliditem.style.visibility = 'visible';
//     //   chliditem.style.opacity = '1';
//     //   chliditem.style.transition = 'all 0.2s ease-in-out';
//     // }
//     // if (matchMedia('min-width: 37.5em')) {
//     //   element.style.width = '1.6rem';
//     //   element.style.height = '1.6rem';
//     //   element.style.border = '0.2rem solid rgba(255,255,255,0.5)';
//     //   chlidCir.style.width = '0.6rem';
//     //   chlidCir.style.height = '0.6rem';
//     //   chlidCir.style.transition = 'all 0.2s ease-in-out';
//     //   chliditem.style.visibility = 'visible';
//     //   chliditem.style.opacity = '1';
//     //   chliditem.style.transition = 'all 0.2s ease-in-out';
//     // }
//   } else {
//     element.style.width = '1.2rem';
//     element.style.height = '1.2rem';
//     element.style.border = '0.1rem solid transparent';
//     chlidCir.style.width = '0.5rem';
//     chlidCir.style.height = '0.5rem';
//     chlidCir.style.transition = 'all 0.2s ease-in-out';
//     chliditem.style.visibility = 'hidden';
//     chliditem.style.opacity = '0';
//     chliditem.style.transition = 'all 0.2s ease-in-out';

// if (matchMedia('min-width: 56.25em')) {
//   element.style.width = '2.5rem';
//   element.style.height = '2.5rem';
//   element.style.border = '0.3rem solid transparent';
//   chlidCir.style.width = '1.4rem';
//   chlidCir.style.height = '1.4rem';
//   chlidCir.style.transition = 'all 0.2s ease-in-out';
//   chliditem.style.visibility = 'hidden';
//   chliditem.style.opacity = '0';
//   chliditem.style.transition = 'all 0.2s ease-in-out';
// }
// if (matchMedia('min-width: 37.5em')) {
//   element.style.width = '1.6rem';
//   element.style.height = '1.6rem';
//   element.style.border = '0.2rem solid transparent';
//   chlidCir.style.width = '0.8rem';
//   chlidCir.style.height = '0.8rem';
//   chlidCir.style.transition = 'all 0.2s ease-in-out';
//   chliditem.style.visibility = 'hidden';
//   chliditem.style.opacity = '0';
//   chliditem.style.transition = 'all 0.2s ease-in-out';
// }
//   }
// }
const imgsContainer = document.createElement('div');
imgsContainer.id = 'container';
document.body.appendChild(imgsContainer);

// function homzzang() {
//   var w = window.outerWidth;

//   var h = window.outerHeight;

//   var txt = 'Window size: width=' + w + ', height=' + h;

//   document.getElementById('demo').innerHTML = txt;
// }

function contaierBox(obj) {
  const linkBox = document.createElement('a');
  const linkImg = document.createElement('img');
  const linkDiv = document.createElement('div');
  const linkSpan = document.createElement('span');

  linkSpan.appendChild(linkImg);
  linkBox.appendChild(linkSpan);
  linkDiv.appendChild(linkBox);
  imgsContainer.appendChild(linkDiv);

  linkDiv.className = 'grid-item';

  // linkDiv.onmouseenter = () => {
  //   showCircle(linkDiv, true);
  // };
  // linkDiv.onmouseleave = () => {
  //   showCircle(linkDiv, false);
  // };

  linkBox.id = 'imgLinkBox';
  linkBox.href = obj.linkSrc;
  linkBox.className = 'imgLinkBoxClass';

  linkImg.src = obj.imgSrc;
  linkImg.sizes = obj.imgSize;
  linkImg.srcset = obj.imgSrcset;
  linkImg.style.width = '100%';
  linkImg.style.height = '100%';
  linkImg.style.objectFit = 'cover';

  linkSpan.className = 'contaierWrap';

  const circlePosition = document.createElement('div');
  linkSpan.appendChild(circlePosition);
  circlePosition.classList.add('allCircle');
  circlePosition.style.position = 'absolute';
  circlePosition.style.width = '100%';
  circlePosition.style.height = '100%';
  let tempWidth;
  for (const i of obj.inner) {
    const circleSrc = document.createElement('a');
    const circle = document.createElement('div');
    const circleChild = document.createElement('div');
    circle.appendChild(circleChild);
    circleSrc.appendChild(circle);
    circlePosition.appendChild(circleSrc);

    circleSrc.href = i.circle.src;
    circle.id = 'idParentCircle';
    circle.className = 'parentCircle';

    circleSrc.style.position = 'absolute';
    circleSrc.className = 'circle-position';
    circleSrc.style.top = `${i.circle.top}%`;
    circleSrc.style.left = `${i.circle.left}%`;
    // console.log(circlePosition.offsetTop);

    // circle.onmouseover = () => {
    //   inTransCir(circle, true), showItem(circle, true);
    // };
    // circle.onmouseout = () => {
    //   inTransCir(circle, false), showItem(circle, false);
    // };

    circleChild.className = 'chlidCircle';
    tempWidth = circle.offsetWidth / 2;

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
    // itemInfoBox.onmouseover = () => {
    //   showItem(circle, true);
    // };
    // itemInfoBox.onmouseout = () => {
    //   showItem(circle, false);
    // };

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
  }

  // circlePosition.style.top = `-${tempWidth}px`;
  // circlePosition.style.left = `-${tempWidth}px`;
}

contaierBox(imageState);
contaierBox(imageState1);
contaierBox(imageState2);
contaierBox(imageState3);
contaierBox(imageState4);
contaierBox(imageState5);
contaierBox(imageState6);
contaierBox(imageState7);
contaierBox(imageState8);
contaierBox(imageState9);
contaierBox(imageState10);
contaierBox(imageState11);
contaierBox(imageState12);
contaierBox(imageState13);
contaierBox(imageState14);
contaierBox(imageState15);
contaierBox(imageState16);

// switch (matchMedia) {
//     case 'min-width: 56.25em':
//       element.style.width = '2.5rem';
//       element.style.height = '2.5rem';
//       element.style.border = '0.3rem solid rgba(255,255,255,0.5)';
//       chlidCir.style.width = '0.9rem';
//       chlidCir.style.height = '0.9rem';
//       chlidCir.style.transition = 'all 0.2s ease-in-out';
//       chliditem.style.visibility = 'visible';
//       chliditem.style.opacity = '1';
//       chliditem.style.transition = 'all 0.2s ease-in-out';
//       break;
//     case 'min-width: 37.5em':
//       element.style.width = '1.6rem';
//       element.style.height = '1.6rem';
//       element.style.border = '0.2rem solid rgba(255,255,255,0.5)';
//       chlidCir.style.width = '0.6rem';
//       chlidCir.style.height = '0.6rem';
//       chlidCir.style.transition = 'all 0.2s ease-in-out';
//       chliditem.style.visibility = 'visible';
//       chliditem.style.opacity = '1';
//       chliditem.style.transition = 'all 0.2s ease-in-out';
//       break;

//     default:
//       element.style.width = '1.2rem';
//       element.style.height = '1.2rem';
//       element.style.border = '0.1rem solid rgba(255,255,255,0.5)';
//       chlidCir.style.width = '0.2rem';
//       chlidCir.style.height = '0.2rem';
//       chlidCir.style.transition = 'all 0.2s ease-in-out';
//       chliditem.style.visibility = 'visible';
//       chliditem.style.opacity = '1';
//       chliditem.style.transition = 'all 0.2s ease-in-out';
//       break;
//   }
// } else {
//   switch (matchMedia) {
//     case 'min-width: 56.25em':
//       element.style.width = '2.5rem';
//       element.style.height = '2.5rem';
//       element.style.border = '0.3rem solid transparent';
//       chlidCir.style.width = '1.4rem';
//       chlidCir.style.height = '1.4rem';
//       chlidCir.style.transition = 'all 0.2s ease-in-out';
//       chliditem.style.visibility = 'hidden';
//       chliditem.style.opacity = '0';
//       chliditem.style.transition = 'all 0.2s ease-in-out';
//       break;
//     case 'min-width: 37.5em':
//       element.style.width = '1.6rem';
//       element.style.height = '1.6rem';
//       element.style.border = '0.2rem solid transparent';
//       chlidCir.style.width = '0.8rem';
//       chlidCir.style.height = '0.8rem';
//       chlidCir.style.transition = 'all 0.2s ease-in-out';
//       chliditem.style.visibility = 'hidden';
//       chliditem.style.opacity = '0';
//       chliditem.style.transition = 'all 0.2s ease-in-out';
//       break;
//     default:
//       element.style.width = '1.2rem';
//       element.style.height = '1.2rem';
//       element.style.border = '0.1rem solid transparent';
//       chlidCir.style.width = '0.5rem';
//       chlidCir.style.height = '0.5rem';
//       chlidCir.style.transition = 'all 0.2s ease-in-out';
//       chliditem.style.visibility = 'hidden';
//       chliditem.style.opacity = '0';
//       chliditem.style.transition = 'all 0.2s ease-in-out';
//       break;
//   }
