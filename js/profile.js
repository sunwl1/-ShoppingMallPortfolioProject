const arrTabs = document.querySelectorAll('.tabList .tabBtn');
const arrPanel = document.querySelectorAll('.tabPanel');

arrTabs.forEach((e,i) =>
  e.addEventListener('click', () => {
    arrTabs.forEach(a => a.classList.remove('tabActive'));
    e.classList.add('tabActive');
    arrPanel.forEach(b => b.classList.remove('pActive'));
    arrPanel[i].classList.add('pActive');
  })
);
