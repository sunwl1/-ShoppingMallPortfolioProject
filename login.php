<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="../css/reset.css" />
    <link rel="stylesheet" href="../css/login.css" />
  </head>
  <body>
    <div class="wrapper">
      <div class="loginHeader">
        <div class="loginHeaderTop">
          <a href="../" class="goBackBtn">
            <svg
              focusable="false"
              viewBox="0 0 24 24"
              class="goBackIcon"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.70613 11.2927L3.99902 11.9997L4.70606 12.7069L11.999 20.0008L13.4133 18.5867L7.82744 13.0001H19.9999V11.0001H7.82729L13.4144 5.41328L12.0002 3.99902L4.70613 11.2927Z"
              ></path>
            </svg>
          </a>
          <img
            class="topLogo"
            src="https://kr.accounts.ikea.com/resources/kr//logo.svg"
            alt="이케아 로고"
          />
        </div>
        <div class="loginTitle">
          <h1>지금 IKEA에<br />로그인하세요!</h1>
          <p>
            휴대폰 번호를 인증하시면 해당 번호로 간편 로그인이 가능해집니다.
          </p>
        </div>
        <div class="loginFooter">
          <span>IKEA.kr - </span>
          <a href="https://www.ikea.com/kr/ko/customer-service/privacy-policy"
            >개인정보처리방침</a
          >
          <div>© Inter IKEA Systems B.V. 1999-2020</div>
        </div>
      </div>
      <div class="loginFormContainer">
        <form class="loginForm" name="Login" novalidate>
          <div class="formField">
            <div class="inputWrap">
              <input
                name="userid"
                type="text"
                id="username"
                placeholder=""
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                autocomplete="username"
                aria-required="false"
                value=""
              /><label for="username" class="username"
                >이메일 또는 휴대폰 번호</label
              >
            </div>
          </div>
          <div class="formField">
            <div class="inputWrap">
              <input
                name="userpwd"
                type="password"
                id="password"
                placeholder=""
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                autocomplete="current-password"
                aria-required="false"
                value=""
              />
              <label for="password" class="password">비밀번호</label>
              <button type="button" class="visBtn">
                <svg
                  focusable="false"
                  viewBox="0 0 24 24"
                  class="visicon"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 8C9.79084 8 7.99998 9.79086 7.99998 12C7.99998 14.2091 9.79084 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM9.99998 12C9.99998 10.8954 10.8954 10 12 10C13.1045 10 14 10.8954 14 12C14 13.1046 13.1045 14 12 14C10.8954 14 9.99998 13.1046 9.99998 12Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.8298 11.442C21.8298 11.442 21.8298 11.7947 21.6245 12C21.9328 12.3082 21.8298 12.558 21.8298 12.558L21.8282 12.5605L21.8247 12.5656L21.8133 12.5823C21.8038 12.5962 21.7903 12.6157 21.7731 12.6404C21.7386 12.6897 21.6888 12.7599 21.6245 12.8478C21.4961 13.0236 21.3092 13.2712 21.0699 13.5668C20.5926 14.1563 19.9005 14.9444 19.0414 15.7356C17.359 17.2851 14.8705 19 12 19C9.12949 19 6.64099 17.2851 4.95858 15.7356C4.09951 14.9444 3.40736 14.1563 2.93005 13.5668C2.69078 13.2712 2.5039 13.0236 2.37544 12.8478C2.31117 12.7599 2.26141 12.6897 2.22691 12.6404C2.20966 12.6157 2.19621 12.5962 2.18667 12.5823L2.17529 12.5656L2.17181 12.5605L2.17063 12.5587C2.17063 12.5587 2.18667 12.3016 2.48828 12C2.30078 12 2.17018 11.442 2.17018 11.442L2.17181 11.4395L2.17529 11.4344L2.18667 11.4177C2.19621 11.4038 2.20966 11.3843 2.22691 11.3596C2.26141 11.3103 2.31117 11.2401 2.37544 11.1522C2.5039 10.9764 2.69078 10.7288 2.93005 10.4332C3.40736 9.84372 4.09951 9.05563 4.95858 8.26443C6.64099 6.71494 9.12949 5 12 5C14.8705 5 17.359 6.71494 19.0414 8.26443C19.9005 9.05563 20.5926 9.84372 21.0699 10.4332C21.3092 10.7288 21.4961 10.9764 21.6245 11.1522C21.6888 11.2401 21.7386 11.3103 21.7731 11.3596C21.7903 11.3843 21.8038 11.4038 21.8133 11.4177L21.8247 11.4344L21.8282 11.4395L21.8298 11.442ZM4.48445 12.3082C4.39437 12.197 4.31287 12.0937 4.24038 12C4.31287 11.9063 4.39437 11.803 4.48445 11.6918C4.918 11.1563 5.54387 10.4444 6.31348 9.73557C7.88843 8.28506 9.89992 7 12 7C14.1001 7 16.1116 8.28506 17.6865 9.73557C18.4561 10.4444 19.082 11.1563 19.5155 11.6918C19.6056 11.803 19.6871 11.9063 19.7596 12C19.6871 12.0937 19.6056 12.197 19.5155 12.3082C19.082 12.8437 18.4561 13.5556 17.6865 14.2644C16.1116 15.7149 14.1001 17 12 17C9.89992 17 7.88843 15.7149 6.31348 14.2644C5.54387 13.5556 4.918 12.8437 4.48445 12.3082Z"
                  ></path>
                  <path
                    d="M21.6245 12L21.8298 11.442L22.2046 12L21.8298 12.558L21.6245 12Z"
                  ></path>
                  <path
                    d="M2.17018 11.442L2.48828 12L2.17529 12.5656L1.79541 12L2.17018 11.442Z"
                  ></path>
                </svg>
                <span class="visBtnLabel">Show password</span>
              </button>
            </div>
          </div>
          <a name="forgotPassword" href="#" class="findPwd">비밀번호 찾기</a>
          <button type="submit" class="loginSubmitBtn">로그인</button>
        </form>
        <button type="button" class="signupBtn">회원가입</button>
        <footer class="loginFooter">
          <span>IKEA.kr - </span>
          <a href="https://www.ikea.com/kr/ko/customer-service/privacy-policy"
            >개인정보처리방침</a
          >
          <div>© Inter IKEA Systems B.V. 1999-2020</div>
        </footer>
      </div>
    </div>
    <script src="../js/login.js"></script>
    <script src="../js/validation.js"></script>
  </body>
</html>
