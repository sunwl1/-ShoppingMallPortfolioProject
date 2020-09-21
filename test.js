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

let img = document.getElementById('img')


class Circle {
    
    constructor() {
        this.createCircle = document.createElement('div')
        this.createCircle.className = 'circle'
        this.createCircle.style.width = '30px';
        this.createCircle.style.height = '30px';
        this.createCircle.style.borderRadius = '50%';
        this.createCircle.style.border = '10px solid rgba(0,0,0,0.4)';
        this.createCircle.style.margin = '10px';
        this.createCircle.style.background = 'white';
        this.createCircle.style.transition = 'all .2s ease-in-out';
        this.createCircle.style.position = 'absolute';
        document.body.appendChild(this.createCircle);
         }

    setPos = function(top,left) 
    
    {
        this.createCircle.style.top = top;
        this.createCircle.style.left = left;   
    }
};



// let first = 
// [
// ];

// tops = ['5%','10%','30%','45%','60%'],
// left =['40px','50px','70px','80px','90px']

// for (let i = 0; i < 5; i++) {
//     first[i] =  new Circle(); 
//     first[i].setPos(tops[i],left[i]);
// }