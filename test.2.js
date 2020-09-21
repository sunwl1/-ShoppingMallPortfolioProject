
// class Container {
//     constructor(link, imgSrc){
//         let createContainer = document.createElement('div');
//         createContainer.style.width = '500px';
//         createContainer.style.height = '500px';
//         createContainer.style.position = 'relative';
//         let createContainerBox = document.createElement('div');
//         createContainerBox.id = 'container-circle';
//         createContainerBox.style.width ='100%';
//         createContainerBox.style.height ='100%';
//         createContainerBox.onmouseover = () => {showCircle(); };
//         createContainerBox.onmouseout = () => {deleteCircle(); };
//         let img = document.createElement('img');
//         img.src = imgSrc;
//         img.style.width = '100%';
//         img.style.height = '100%';
//         let linkSrc = document.createElement('a')
//         linkSrc.href = link;
//         linkSrc.style.width = '100%';
//         linkSrc.style.height = '100%';
        
//         createContainerBox.appendChild(img);
//         linkSrc.appendChild(createContainerBox);
//         createContainer.appendChild(linkSrc);
//         document.body.appendChild(createContainer);
       
//     }
//    createCir(n, src, tops, left) {
//        for(let i =0; i < n;i++){
//         let circleSrc = document.createElement('a');
//         circleSrc.className = 'circle'
//         circleSrc.href = src[i];
        
//         let box = document.getElementById('container-circle');
//         let createParentCircle = document.createElement('div');
//         createParentCircle.className = 'parentCircle';
//         createParentCircle.style.position = 'absolute';
//         createParentCircle.style.visibility = 'visible';
//         createParentCircle.style.top = tops[i];
//         createParentCircle.style.left = left[i]; 
//         createParentCircle.onmouseover = () => {inTransCircle(i) };
//         createParentCircle.onmouseout = () => {outTransCircle(i) };
        
//         let createChlidCircle = document.createElement('div');
//         createChlidCircle.className = 'chlidCircle';
        
//         createParentCircle.appendChild(createChlidCircle);
//         circleSrc.appendChild(createParentCircle);
//         box.appendChild(circleSrc);
//        }
//     }
//     createArrowBox(name, sub, price) {
//         let circleLength = document.getElementsByClassName('circle')
//         for (let i = 0; i < circleLength.length; i++) {
//             let infoBoxLink = document.getElementById('circle')
//             let infoBox = document.createElement('div');
//             infoBox.className = 'arrow_box';
//             let itemName = document.createElement('h2');
//             itemName.innerHTML = name[i];
//             let itemSubInfo = document.createElement('h4');
//             itemSubInfo.innerHTML = sub[i];
//             let itemPrice = document.createElement('p');
//             itemPrice.innerHTML = price[i];
    
//             infoBox.appendChild(itemName);
//             infoBox.appendChild(itemSubInfo);
//             infoBox.appendChild(itemPrice);
//             infoBoxLink[i].appendChlid(infoBox);
            
            
//         }
     
//     }
// }

// let first = new Container('https://www.naver.com/',"./라이언 이미지.png")
//     .createCir(3,Pinterest.firstSrc,Pinterest.posArr.tops,Pinterest.posArr.left)
//     .createArrowBox('가나다','라마바사','1600원');
    

// function showCircle() {
//     let showParentCircle = document.getElementsByClassName('parentCircle');
//     let showChlidCircle = document.getElementsByClassName('chlidCircle');
//     for(let i =0;i <showParentCircle.length; i++){
//         showParentCircle[i].style.visibility = 'visible';
//         showChlidCircle[i].style.visibility = 'visible';
//     }
    
// }

// function deleteCircle() {
//     let deleteShowParentCircle = document.getElementsByClassName('parentCircle');
//     let deleteShowChlidCircle = document.getElementsByClassName('chlidCircle');
//     for(let i =0;i <deleteShowParentCircle.length; i++){
//         deleteShowParentCircle[i].style.visibility = 'hidden';
//         deleteShowChlidCircle[i].style.visibility = 'hidden';
//         deleteShowChlidCircle[i].style.transition = 'all ease-in-out';     
//     }
    
// }

// function inTransCircle(index) {
//     let inTransParentCircle = document.getElementsByClassName('parentCircle');
//     let outTrnasChlidCircle = document.getElementsByClassName('chlidCircle');
//     for (let i = 0; i < inTransParentCircle.length; i++) {
//         inTransParentCircle[i].style.visibility = 'visible';
//         outTrnasChlidCircle[i].style.visibility = 'visible';
//     }
//     inTransParentCircle[index].style.width = '44px';
//     inTransParentCircle[index].style.height = '44px';
//     inTransParentCircle[index].style.border = '5px solid rgba(255,255,255,0.5)';
      
//     outTrnasChlidCircle[index].style.width = '15px';
//     outTrnasChlidCircle[index].style.height = '15px';
//     outTrnasChlidCircle[index].style.transition = '0.25s 0.25s ease-in-out';
// }

// function outTransCircle(index) {
//     let outTransParentCircle = document.getElementsByClassName('parentCircle');
//     let outTransChlidCircle = document.getElementsByClassName('chlidCircle');
//     outTransParentCircle[index].style.visibility = 'visible';
//     outTransParentCircle[index].style.width = '50px';
//     outTransParentCircle[index].style.height = '50px';
//     outTransParentCircle[index].style.border = 'none';
//     outTransChlidCircle[index].style.visibility = 'visible';
//     outTransChlidCircle[index].style.width = '20px';
//     outTransChlidCircle[index].style.height = '20px';
//     outTransChlidCircle[index].style.transition = '0.3s 0.3s ease-in-out';
// }


