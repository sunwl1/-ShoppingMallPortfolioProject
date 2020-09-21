// src="https://kit.fontawesome.com/de6911476d.js"
// crossorigin="anonymous"



// class movieInfo {
//     movieName = '';
//     summary = '';
//     runningTime = '';
//     reservationRate = '';
//     director = '';
//     actor = '';
//     openingDate = '';
//     grade = '';
//     photo = '';
//     trailer = '';
//     constructor(movieName, summary, runningTime, reservationRate, director,
//          actor, openingDate, grade, photo, trailer) {
//              this.movieName = movieName;
//              this.summary = summary;
//              this.runningTime = runningTime;
//              this.reservationRate = reservationRate;
//              this.director = director;
//              this.actor = actor;
//              this.openingDate = openingDate;
//              this.grade = grade;
//              this.photo = photo;
//              this.trailer = trailer;
//          }
// }


// let createI = document.createElement('div');
// let createI2 = document.createElement('div');
// createI.style.border = '1px solid white';
// createI.style.border


// // class Icon {
// //     constructor(position, top, right, bottom, left){
// //         let createI = document.createElement('i');
// //        createI.className ='far fa-dot-circle';
// //        createI.style.width = '15px';
// //        createI.style.height = '15px';
// //        createI.style.position = position;
// //        createI.style.top = top;
// //        createI.style.right = right;
// //        createI.style.bottom = bottom;
// //        createI.style.left = left;
           
     
// //        document.body.appendChild(createI);

// //     }
// // }

// let first = new Icon('absolute','0px','0px','0px','0px')
// let s = new Icon('absolute','20px','20px','20px','20px')
// let t = new Icon('absolute','30px','50px','30px','100px')
// let f = new Icon('absolute','40px','40px','40px','90px')

// let img = document.getElementById('img')


// class Circle {
    
//     constructor() {
//         this.createCircle = document.createElement('div')
//         this.createCircle.className = 'circle'
//         this.createCircle.style.width = '30px';
//         this.createCircle.style.height = '30px';
//         this.createCircle.style.borderRadius = '50%';
//         this.createCircle.style.border = '10px solid rgba(0,0,0,0.4)';
//         this.createCircle.style.margin = '10px';
//         this.createCircle.style.background = 'white';
//         this.createCircle.style.transition = 'all .2s ease-in-out';
//         this.createCircle.style.position = 'absolute';
//         document.body.appendChild(this.createCircle);
//          }

//     setPos = function(top,left) 
    
//     {
//         this.createCircle.style.top = top;
//         this.createCircle.style.left = left;   
//     }
// };



// let first = 
// [
// ];

// tops = ['5%','10%','30%','45%','60%'],
// left =['40px','50px','70px','80px','90px']

// for (let i = 0; i < 5; i++) {
//     first[i] =  new Circle(); 
//     first[i].setPos(tops[i],left[i]);
// }

function Contaierbox(link, imgSrc){
    let createContainer = document.createElement('div');
    createContainer.style.width = '500px';
    createContainer.style.height = '500px';
    createContainer.style.position = 'relative';
    let createContainerBox = document.createElement('div');
    createContainerBox.id = 'container-circle';
    createContainerBox.style.width ='100%';
    createContainerBox.style.height ='100%';
    createContainerBox.onmouseover = () => {showCircle(); };
    createContainerBox.onmouseout = () => {deleteCircle(); };
    let img = document.createElement('img');
    img.src = imgSrc;
    img.style.width = '100%';
    img.style.height = '100%';
    let linkSrc = document.createElement('a')
    linkSrc.href = link;
    linkSrc.style.width = '100%';
    linkSrc.style.height = '100%';
    
    createContainerBox.appendChild(img);
    linkSrc.appendChild(createContainerBox);
    createContainer.appendChild(linkSrc);
    document.body.appendChild(createContainer);
}
Contaierbox('https://www.google.com/search?q=xhr.send(null)&oq=xhr.send(null)&aqs=chrome..69i57j0l7.1553j0j15&sourceid=chrome&ie=UTF-8','라이언 이미지.png');
function createCir(n, src, tops, left) {
    for(let i =0; i < n;i++){
        let circleSrc = document.createElement('a');
        circleSrc.className = 'circle'
        circleSrc.href = src[i];
        
        let box = document.getElementById('container-circle');
        let createParentCircle = document.createElement('div');
        createParentCircle.className = 'parentCircle';
        createParentCircle.style.position = 'absolute';
        createParentCircle.style.visibility = 'visible';
        createParentCircle.style.top = tops[i];
        createParentCircle.style.left = left[i]; 
        createParentCircle.onmouseover = () => {inTransCircle(i) };
        createParentCircle.onmouseout = () => {outTransCircle(i) };
        
        let createChlidCircle = document.createElement('div');
        createChlidCircle.className = 'chlidCircle';
         CircleTop = createParentCircle.offsetTop[i];
         console.log(CircleTop);
        createParentCircle.appendChild(createChlidCircle);
        circleSrc.appendChild(createParentCircle);
        box.appendChild(circleSrc);
    }
}

createCir(2,'https://www.naver.com/',Pinterest.posArr.tops,Pinterest.posArr.left)
function   createArrowBox(name, sub, price) {
    let circleLength = document.getElementsByClassName('circle')
    
    for (let i = 0; i < circleLength.length; i++) {
        let circleLength2 = document.getElementsByClassName('circle')
        let box2 = document.getElementById('container-circle');
        let infoBox = document.createElement('div');
        infoBox.className = 'arrow_box';
        infoBox.style.position = 'absolute';
        infoBox.style.width = '100px';
        infoBox.style.height = '100px';
        infoBox.style.top = CircleTop + '30px';

        let itemName = document.createElement('h2');
        itemName.style.width = '70px';
        itemName.style.height = '20px';
        itemName.innerHTML = name;
        let itemSubInfo = document.createElement('h4');
        itemSubInfo.innerHTML = sub;
        let itemPrice = document.createElement('p');
        itemPrice.innerHTML = price;

        infoBox.appendChild(itemName);
        infoBox.appendChild(itemSubInfo);
        infoBox.appendChild(itemPrice);
        box2.appendChild(infoBox); 
    }
}

createArrowBox('가나다라','마바사','순현');

function showCircle() {
    let showParentCircle = document.getElementsByClassName('parentCircle');
    let showChlidCircle = document.getElementsByClassName('chlidCircle');
    for(let i =0;i <showParentCircle.length; i++){
        showParentCircle[i].style.visibility = 'visible';
        showChlidCircle[i].style.visibility = 'visible';
    }
    
}

function deleteCircle() {
    let deleteShowParentCircle = document.getElementsByClassName('parentCircle');
    let deleteShowChlidCircle = document.getElementsByClassName('chlidCircle');
    for(let i =0;i <deleteShowParentCircle.length; i++){
        deleteShowParentCircle[i].style.visibility = 'hidden';
        deleteShowChlidCircle[i].style.visibility = 'hidden';
        deleteShowChlidCircle[i].style.transition = 'all ease-in-out';     
    }
    
}

function inTransCircle(index) {
    let inTransParentCircle = document.getElementsByClassName('parentCircle');
    let outTrnasChlidCircle = document.getElementsByClassName('chlidCircle');
    for (let i = 0; i < inTransParentCircle.length; i++) {
        inTransParentCircle[i].style.visibility = 'visible';
        outTrnasChlidCircle[i].style.visibility = 'visible';
    }
    inTransParentCircle[index].style.width = '44px';
    inTransParentCircle[index].style.height = '44px';
    inTransParentCircle[index].style.border = '5px solid rgba(255,255,255,0.5)';
      
    outTrnasChlidCircle[index].style.width = '15px';
    outTrnasChlidCircle[index].style.height = '15px';
    outTrnasChlidCircle[index].style.transition = '0.25s 0.25s ease-in-out';
}

function outTransCircle(index) {
    let outTransParentCircle = document.getElementsByClassName('parentCircle');
    let outTransChlidCircle = document.getElementsByClassName('chlidCircle');
    outTransParentCircle[index].style.visibility = 'visible';
    outTransParentCircle[index].style.width = '50px';
    outTransParentCircle[index].style.height = '50px';
    outTransParentCircle[index].style.border = 'none';
    outTransChlidCircle[index].style.visibility = 'visible';
    outTransChlidCircle[index].style.width = '20px';
    outTransChlidCircle[index].style.height = '20px';
    outTransChlidCircle[index].style.transition = '0.3s 0.3s ease-in-out';
}

