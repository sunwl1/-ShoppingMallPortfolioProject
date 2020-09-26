const lockScreen = (e) => {
  if (e === true) {
    document.querySelector('.overlay').style.display = 'block';
    document.body.classList.add('lockScroll');
  } else {
    document.querySelector('.overlay').style.display = 'none';
    document.body.classList.remove('lockScroll');
  }
};

const burgerMenu = (e) => {
  if (e === true) {
    lockScreen(true);
    document.querySelector('.menu').classList.remove('menuHidden');
  } else {
    lockScreen(false);
    document.querySelector('.menu').classList.add('menuHidden');
  }
};

const searchBox = (e) => {
  if (e === true) {
    lockScreen(true);
    document.querySelector('.searchBox').classList.add('active');
  } else {
    lockScreen(false);
    document.querySelector('.searchBox').classList.remove('active');
  }
};
const burgerInner = (e) => {
  if (e === true) {
    document.querySelector('.menuSubNav').classList.remove('menuSubHidden');
    document.querySelector('.menuNav').classList.add('menuSubHidden');
    document.querySelector('.menuBack').style.display = 'block';
    document.querySelector('.menuBack').style.visibility = 'visible';
  } else {
    document.querySelector('.menuSubNav').classList.add('menuSubHidden');
    document.querySelector('.menuNav').classList.remove('menuSubHidden');
    document.querySelector('.menuBack').style.display = 'none';
    document.querySelector('.menuBack').style.visibility = 'hidden';
  }
};
document.querySelector('.menuBtn').addEventListener('click', () => burgerMenu(true));
document.querySelector('.allCategory').addEventListener('click', () => burgerInner(true));

document.querySelector('.menuBackBtn').addEventListener('click', () => burgerInner(false));
document.querySelector('.searchBoxClose').addEventListener('click', () => searchBox(false));

document.querySelector('.menuCloseBtn').addEventListener('click', () => {
  burgerMenu(false);
  burgerInner(false);
});

document.querySelector('.overlay').addEventListener('click', () => {
  searchBox(false);
  burgerMenu(false);
  burgerInner(false);
});

document.querySelector('.searchFieldInput').addEventListener('blur', () => {
  document.querySelector('.dropdownInner').style.border = '1px solid #dfdfdf';
});
document.querySelector('.searchFieldInput').addEventListener('focus', () => {
  searchBox(true);
  document.querySelector('.dropdownInner').style.border = '2px solid #0058a3';
});

let arrAccor = document.querySelectorAll('.accordionBtn');
for (let i = 0; i < arrAccor.length; i++) {
  arrAccor[i].addEventListener('click', () => {
    arrAccor[i].parentNode.nextElementSibling.classList.toggle('accoItemActive');
    arrAccor[i].parentNode.parentNode.classList.toggle('itemActive');
    arrAccor[i].querySelector('.svgIcon').classList.toggle('svgIconRot');
  });
}
