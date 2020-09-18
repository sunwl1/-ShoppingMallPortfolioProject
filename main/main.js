const searchBox = document.querySelector('.searchFieldInput');
const overlay = document.querySelector('.overlay');
const searchFieldInput = document.querySelector('.searchFieldInput');
const likesBtn = document.querySelector('.likesBtn');
const cartBtn = document.querySelector('.cartBtn');
const menuBtn = document.querySelector('.menuBtn');


searchBox.addEventListener('focus',()=>{
    overlay.style.display = 'block';
    searchFieldInput.style.border = '2px solid #111';
    searchFieldInput.style.background = '#fff';
    document.querySelector('.searchWrapper').classList.add('searchBoxFx');
    document.querySelector('.dropdown').style.display = 'block';
});

overlay.addEventListener('click',()=>{
    overlay.style.display = 'none';
    searchFieldInput.style.border = '2px solid transparent';
    searchFieldInput.style.background = '#eee';
    document.querySelector('.searchWrapper').classList.remove('searchBoxFx');
    document.querySelector('.dropdown').style.display = 'none';
    document.querySelector('.menu').classList.add('menuHidden');
})

menuBtn.addEventListener('click',()=>{
    overlay.style.display = 'block';
    document.querySelector('.menu').classList.remove('menuHidden');
})