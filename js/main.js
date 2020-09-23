const likesBtn = document.querySelector('.likesBtn');
const cartBtn = document.querySelector('.cartBtn');

const menuOn = () => {
 document.querySelector('.overlay').style.display = 'block';
 document.querySelector('.menu').classList.remove('menuHidden');
 document.body.classList.add('lockScroll');
};
const menuOff = () => {
 document.querySelector('.overlay').style.display = 'none';
 document.querySelector('.menu').classList.add('menuHidden');
 document.body.classList.remove('lockScroll');
};
const searchFocus = () => {
 document.querySelector('.overlay').style.display = 'block';
 document.querySelector('.searchFieldInput').style.border = '2px solid #111';
 document.querySelector('.searchFieldInput').style.background = '#fff';
 document.querySelector('.searchWrapper').classList.add('searchBoxFx');
 document.querySelector('.dropdown').style.display = 'block';
 document.body.classList.add('lockScroll');
};
const searchBlur = () => {
 document.querySelector('.overlay').style.display = 'none';
 document.querySelector('.searchFieldInput').style.border =
  '2px solid transparent';
 document.querySelector('.searchFieldInput').style.background = '#eee';
 document.querySelector('.searchWrapper').classList.remove('searchBoxFx');
 document.querySelector('.dropdown').style.display = 'none';
};

document
 .querySelector('.searchFieldInput')
 .addEventListener('focus', () => searchFocus());

document.querySelector('.menuBtn').addEventListener('click', () => menuOn());

document
 .querySelector('.menuCloseBtn')
 .addEventListener('click', () => menuOff());

document.querySelector('.overlay').addEventListener('click', () => {
 searchBlur();
 menuOff();
});

document.querySelector('.allCategory').addEventListener('click', () => {
 document.querySelector('.menuSubNav').classList.remove('menuSubHidden');
 document.querySelector('.menuNav').classList.add('menuSubHidden');
 document.querySelector('.menuBack').style.display = 'block';
 document.querySelector('.menuBack').style.visibility = 'visible';
});

document.querySelector('.menuBackBtn').addEventListener('click', () => {
 document.querySelector('.menuSubNav').classList.add('menuSubHidden');
 document.querySelector('.menuNav').classList.remove('menuSubHidden');
 document.querySelector('.menuBack').style.display = 'none';
 document.querySelector('.menuBack').style.visibility = 'hidden';
});

let arrAccor = document.querySelectorAll('.accordionBtn');
for (let i = 0; i < arrAccor.length; i++) {
    arrAccor[i].addEventListener('click', ()=>{
        arrAccor[i].parentNode.nextElementSibling.classList.toggle('accoItemActive');
        arrAccor[i].parentNode.parentNode.classList.toggle('itemActive');
        arrAccor[i].querySelector('.svgIcon').classList.toggle('svgIconRot');
    })
    
}