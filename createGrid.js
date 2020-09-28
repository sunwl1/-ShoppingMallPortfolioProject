const imgsContainer = document.createElement('div');
imgsContainer.id = 'container';
document.body.appendChild(imgsContainer);

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

  linkBox.id = 'imgLinkBox';
  linkBox.href = obj.linkSrc;
  linkBox.className = 'imgLinkBoxClass';

  linkImg.src = obj.imgSrc;
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

    itemName.innerHTML = i.ItemBox.Name;
    itemName.className = 'item-name';

    itemInfo.innerHTML = i.ItemBox.subInfo;
    itemInfo.className = 'item-info';

    itemPrice.innerHTML = `&bsol; ${i.ItemBox.price}`;
    itemPrice.className = 'item-price';

    arrowIcon.className = 'arrow-icon';
    arrowIcon.innerHTML = '&gt;';
  }
}

contaierBox(imageState);
contaierBox(imageState1);
contaierBox(imageState2);
contaierBox(imageState3);
contaierBox(imageState4);
contaierBox(imageState5);
contaierBox(imageState6);
