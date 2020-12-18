const loginForm = document.querySelector('.loginForm');
const loginBtn = document.querySelector('.loginSubmitBtn');
const userLogin;

const checkEmpty = (value, dataName) => {
  if (value == '') {
    alert(dataName + ' 입력해주세요!');
    return false;
  }
  return true;
};

const checkId = (ids) => {
  if (!checkEmpty(ids, '아이디를')) return false;

  const emailRegExp = /^[A-Xa-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  if (!emailRegExp.test(ids)) {
    alert('아이디(이메일) 형식이 올바르지 않습니다!');
    loginForm.userid.value = '';
    loginForm.userid.focus();
    return false;
  }
  return true;
};

const checkPwd = (pwds) => {
  if (!checkEmpty(pwds, '비밀번호를')) return false;

  const pwdRegExp = /^[a-zA-Z0-9]{4,12}$/;
  const pwdMock = 1234;
  //if (!pwdRegExp.test(pwd)) {
  if (pwds != pwdMock) {
    alert('비밀번호가 틀렸습니다!');
    loginForm.userpwd.value = '';
    loginForm.userpwd.focus();
    return false;
  }
  return true;
};

const checkAll = () => {
  if (checkId(loginForm.userid.value) && checkPwd(loginForm.userpwd.value)){
  userLogin = true;
  }
  return false;
};

loginBtn.addEventListener('click', checkAll);