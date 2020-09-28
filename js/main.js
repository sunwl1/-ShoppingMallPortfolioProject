let screenLocked = false;

const lockScreen = (e) => {
  if (e === true) {
    document.querySelector('.overlay').style.display = 'block';
    document.body.classList.add('lockScroll');
    screenLocked = true;
  } else {
    document.querySelector('.overlay').style.display = 'none';
    document.body.classList.remove('lockScroll');
    screenLocked = false;
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
  document.querySelector('.dropdownInner').style.borderTop = '1px solid #dfdfdf';
});
document.querySelector('.searchFieldInput').addEventListener('focus', () => {
  searchBox(true);
  document.querySelector('.dropdownInner').style.borderTop = '2px solid #0058a3';
});

let arrAccor = document.querySelectorAll('.accordionBtn');
for (let i = 0; i < arrAccor.length; i++) {
  arrAccor[i].addEventListener('click', () => {
    arrAccor[i].parentNode.nextElementSibling.classList.toggle('accoItemActive');
    arrAccor[i].parentNode.parentNode.classList.toggle('itemActive');
    arrAccor[i].querySelector('.svgIcon').classList.toggle('svgIconRot');
  });
}

window.addEventListener('wheel', (e) => {
  if (screenLocked === true) return;
  const delta = Math.sign(e.deltaY);
  const head = {
    offset: 0,
    height: 0,
  };
  if (window.matchMedia('(min-width: 56.25rem)').matches) {
    head.offset = 100;
    head.height = 80;
  } else {
    head.offset = 200;
    head.height = 150;
  }
  if (delta > 0 && window.scrollY > head.offset) {
    document.querySelector('header').classList.add('fixed');
    document.querySelector('header').classList.remove('scrollUp');
    document.querySelector('.pageContainer').style.marginTop = `${head.height}px`;
  } else {
    document.querySelector('header').classList.add('scrollUp');
    if (window.scrollY < head.height) {
      document.querySelector('header').classList.remove('fixed');
      document.querySelector('header').classList.remove('scrollUp');
      document.querySelector('.pageContainer').style.marginTop = 0;
    }
  }
});
