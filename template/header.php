<div class="overlay"></div>
<header>
    <div class="headContainer">
        <a href="<?= $root ?>" class="mainLogo"> <img src="./img/logo.svg" alt="메인로고" /></a>
        <div class="searchBoxContainer">
            <form action="" role="search" class="searchBox">
                <div class="searchWrapper">
                    <div class="sidebar">
                        <button class="searchBoxClose" type="button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6Z" fill="currentColor"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="searchField">
                        <input type="search" name="q" maxlength="150" class="searchFieldInput" spellcheck="false" aria-label="제품 및 아이디어, 신제품 검색" aria-placeholder="제품 및 아이디어, 신제품 검색" placeholder="검색어 입력" autocapitalize="off" autocomplete="off" autocorrect="off" />
                        <button type="button" class="visualSearchIcon" aria-label="이미지로 검색">
                            <img src="./img/005-photo-camera.svg" alt="이미지서치 아이콘" />
                        </button>
                        <img src="./img/loupe.svg" alt="돋보기 아이콘" class="loupeIcon" />
                    </div>
                </div>
                <div class="dropdown">
                    <div class="dropdownInner">
                        <ol class="searchResults">
                            <li class="universalItem">
                                <a tabindex="-1" class="universalItemLink" href="https://www.ikea.com/kr/ko/search/?q=의자">
                                    <div class="universalItemText">
                                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='#484848' class='svgIcon'>
                                            <path fill-rule='evenodd' clip-rule='evenodd' d='M13.98 15.395a6.294 6.294 0 111.414-1.414l4.602 4.601-1.414 1.414-4.602-4.601zm.607-5.101a4.294 4.294 0 11-8.587 0 4.294 4.294 0 018.587 0z' fill='currentColor' /></svg>
                                        <div class="universalItemTitle"><b>의자</b></div>
                                    </div>
                                </a>
                            </li>
                            <li class="universalItem">
                                <a tabindex="-1" class="universalItemLink" href="https://www.ikea.com/kr/ko/search/?q=의자">
                                    <div class="universalItemText">
                                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='#484848' class='svgIcon'>
                                            <path fill-rule='evenodd' clip-rule='evenodd' d='M13.98 15.395a6.294 6.294 0 111.414-1.414l4.602 4.601-1.414 1.414-4.602-4.601zm.607-5.101a4.294 4.294 0 11-8.587 0 4.294 4.294 0 018.587 0z' fill='currentColor' /></svg>
                                        <div class="universalItemTitle"><b>책상</b></div>
                                    </div>
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </form>
        </div>
        <ul class="tools">
            <li class="profileBtn">
                <a href="<?= $root ?>/profile.php">
                    <img src="./img/001-user.svg" alt="마이페이지 아이콘" />
                </a>
            </li>
            <li class="likesBtn">
                <a href="<?= $root ?>/wishList.php">
                    <img src="./img/002-heart-shape-outline.svg" alt="관심목록 아이콘" />
                </a>
            </li>
            <li class="cartBtn">
                <a href="<?= $root ?>/cart.php">
                    <img src="./img/003-shopping-cart.svg" alt="장바구니 아이콘" />
                </a>
            </li>
            <li class="menuBtn">
                <img src="./img/004-menu.svg" alt="전체카테고리 아이콘" />
            </li>
        </ul>
    </div>
</header>
<aside class="menu menuHidden">
    <div class="menuTop">
        <div class="menuClose">
            <button class="menuCloseBtn">
                <img src="./img/close.svg" alt="메뉴 닫기 버튼" />
            </button>
        </div>
        <div class="menuLogo">
            <a href="<?= $root ?>" class="menuLogoA"> <img src="./img/logo.svg" alt="메인로고" /></a>
        </div>
        <div class="menuBack">
            <button class="menuBackBtn">
                <img src="./img/back.svg" alt="뒤로가기 버튼" />
            </button>
        </div>
    </div>
    <div class="menuContainer">
        <nav class="menuNav">
            <ul class="menuNavMain">
                <li>
                    <a class="allCategory" role="button" data-index="0">모든 제품</a>
                </li>
                <li>
                    <a href="" role="button" data-index="1">디지털 쇼룸</a>
                </li>
                <li>
                    <a href="" role="button" data-index="2" class="navMainSmall">이달의 혜택</a>
                </li>
                <li>
                    <a href="" role="button" data-index="3" class="navMainSmall">신제품</a>
                </li>
                <li>
                    <a href="" role="button" data-index="4" class="navMainSmall">아이디어</a>
                </li>
                <li>
                    <a href="" role="button" data-index="5" class="navMainSmall">더 낮은 새로운 가격</a>
                </li>
                <li>
                    <a href="" role="button" data-index="6" class="navMainSmall">유용한 정보</a>
                </li>
            </ul>
            <ul class="menuNavAux">
                <li>
                    <a href="" role="button" data-index="7" class="navMainSmall">매장안내</a>
                </li>
                <li>
                    <a href="" role="button" data-index="8" class="navMainSmall">IKEA Family</a>
                </li>
                <li>
                    <a href="" role="button" data-index="9" class="navMainSmall">고객지원</a>
                </li>
                <li>
                    <a href="" role="button" data-index="10" class="navMainSmall">배송조회</a>
                </li>
                <li>
                    <a href="" role="button" data-index="11" class="navMainSmall">내 프로필</a>
                </li>
            </ul>
        </nav>
        <nav class="menuSubHidden menuSubNav">
            <span class="menuSubHeading">모든제품</span>
            <ul class="menuSubList">
                <li><a href="" role="button">가구</a></li>
                <li><a href="" role="button">소파/암체어</a></li>
                <li><a href="" role="button">침대/매트리스</a></li>
                <li><a href="" role="button">수납/정리</a></li>
                <li><a href="" role="button">어린이 IKEA</a></li>
            </ul>
        </nav>
    </div>
    <div class="menuAlter"></div>
</aside>
<div class="overlay"></div>