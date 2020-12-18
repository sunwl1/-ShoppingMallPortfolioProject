<div class="wrapper">
    <div class="locaNavContainer">
        <nav class="locaNav">
            <ol class="locaNavList">
                <li><a href="">전체보기</a></li>
                <li><a href="<?=$root ?>/itemList.php">가구</a></li>
            </ol>
        </nav>
    </div>
    <div class="itemContainer">
        <div class="itemImg">
            <div class="itemImgContainer">
                <!-- <div class="imgPageNumb"></div> -->
                <div class="imgContainerEach">
                    <img class="itemImage" src="<?= $imgDir ?>itemimg1.webp" alt="상품 이미지" />
                </div>
                <div class="imgContainerEach">
                    <img class="itemImage" src="<?= $imgDir ?>itemimg2.webp" alt="상품 이미지" />
                </div>
                <div class="imgContainerEach">
                    <img class="itemImage" src="<?= $imgDir ?>itemimg3.webp" alt="상품 이미지" />
                </div>
                <div class="imgContainerEach">
                    <img class="itemImage" src="<?= $imgDir ?>itemimg4.webp" alt="상품 이미지" />
                </div>
            </div>
            <div class="scrollIndicator">
                <!-- <div class="scrollIndicatorMobile">
       <div class="scrollIndicatorBar"></div>
      </div> -->
            </div>
        </div>
        <div class="itemDetail">
            <div class="productSummary">
                <p class="description">상품 간단설명</p>
                <span class="productId">상품아이디코드</span>
            </div>
            <div class="productInformationSection">
                <div class="informationSectionBtn">
                    <button type="button">
                        <span class="title">제품 설명</span>
                        <svg focusable="false" viewBox="0 0 24 24" class="svgIcon" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5996 11.9999L9.81456 17.7857L8.40026 16.3716L12.7714 11.9999L8.40026 7.62823L9.81457 6.21411L15.5996 11.9999Z"></path>
                        </svg>
                    </button>
                </div>
                <div class="informationSectionBtn">
                    <button type="button">
                        <span class="title">제품 크기</span>
                        <svg focusable="false" viewBox="0 0 24 24" class="svgIcon" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5996 11.9999L9.81456 17.7857L8.40026 16.3716L12.7714 11.9999L8.40026 7.62823L9.81457 6.21411L15.5996 11.9999Z"></path>
                        </svg>
                    </button>
                </div>
                <div class="informationSectionBtn">
                    <button type="button">
                        <div>
                            <span class="title">상품평</span>
                            <span class="rates"><img src="<?= $imgDir ?>stars.svg" alt="평점" /> (336)</span>
                        </div>
                        <svg focusable="false" viewBox="0 0 24 24" class="svgIcon" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5996 11.9999L9.81456 17.7857L8.40026 16.3716L12.7714 11.9999L8.40026 7.62823L9.81457 6.21411L15.5996 11.9999Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="productBuyModule">
            <div class="buyModuleContent">
                <div class="pricePackage">
                    <div class="pricePackageWrapper">
                        <div class="productName">
                            <h1>
                                <div class="titleBig">상품명</div>
                                <div class="description">상품설명</div>
                            </h1>
                        </div>
                        <div class="priceWrapper">
                            <span class="price">
                                <span class="currency">&#8361;</span>
                                <span class="priceInteger">25,000</span>
                            </span>
                        </div>
                    </div>
                    <button class="rating">
                        <span class="rates">
                            <img src="../img/stars.svg" alt="평점" />
                            (336)
                        </span>
                    </button>
                </div>
                <div class="buymodule">
                    <div class="buttonWrapper">
                        <button class="btn buyBtn">
                            <svg focusable="false" viewBox="0 0 24 24" class="svgIcon" aria-hidden="true">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5591 7.5L18 8.96081L10.5636 16.5L6 11.8732L7.44089 10.4124L10.5636 13.5784L16.5591 7.5Z"></path>
                            </svg>
                            <span class="btnLabel">구매하기</span>
                        </button>
                        <button class="btn wishListBtn">
                            <svg focusable="false" viewBox="0 0 24 24" class="svgIcon" aria-hidden="true">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.336 5.52055C14.2336 3.62376 17.3096 3.62401 19.2069 5.52129C20.2067 6.52115 20.6796 7.85005 20.6259 9.15761C20.6151 12.2138 18.4184 14.8654 16.4892 16.6366C15.4926 17.5517 14.5004 18.2923 13.7593 18.8036C13.3879 19.0598 13.0771 19.2601 12.8574 19.3973C12.7475 19.466 12.6601 19.519 12.5992 19.5555C12.5687 19.5737 12.5448 19.5879 12.5279 19.5978L12.5079 19.6094L12.502 19.6129L12.5001 19.614C12.5001 19.614 12.4989 19.6147 11.9999 18.748C11.501 19.6147 11.5005 19.6144 11.5005 19.6144L11.4979 19.6129L11.4919 19.6094L11.472 19.5978C11.4551 19.5879 11.4312 19.5737 11.4007 19.5555C11.3397 19.519 11.2524 19.466 11.1425 19.3973C10.9227 19.2601 10.612 19.0598 10.2405 18.8036C9.49947 18.2923 8.50726 17.5517 7.51063 16.6366C5.58146 14.8654 3.38477 12.2139 3.37399 9.15765C3.32024 7.85008 3.79314 6.52117 4.79301 5.52129C6.69054 3.62376 9.76704 3.62376 11.6646 5.52129L11.9993 5.856L12.3353 5.52129L12.336 5.52055ZM11.9999 18.748L11.5005 19.6144L11.9999 19.9019L12.4989 19.6147L11.9999 18.748ZM11.9999 17.573C12.1727 17.462 12.384 17.3226 12.6236 17.1573C13.3125 16.6821 14.2267 15.9988 15.1366 15.1634C17.0157 13.4381 18.6259 11.2919 18.6259 9.13506V9.11213L18.627 9.08922C18.6626 8.31221 18.3844 7.52727 17.7926 6.9355C16.6762 5.81903 14.866 5.81902 13.7495 6.9355L13.7481 6.93689L11.9965 8.68166L10.2504 6.9355C9.13387 5.81903 7.3237 5.81903 6.20722 6.9355C5.61546 7.52727 5.33724 8.31221 5.3729 9.08922L5.37395 9.11213V9.13507C5.37395 11.2919 6.98418 13.4381 8.86325 15.1634C9.77312 15.9988 10.6874 16.6821 11.3762 17.1573C11.6159 17.3226 11.8271 17.462 11.9999 17.573Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="productAvailability">
                    <div class="ableItems">
                        <svg focusable="false" viewBox="0 0 24 24" class="svgIcon" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4H16V7.00001L19.0246 7L23.0039 12.6848V18H20.3472C19.9254 19.3056 18.6999 20.25 17.2539 20.25C15.8079 20.25 14.5824 19.3056 14.1607 18H10.2563C9.83456 19.3056 8.60911 20.25 7.16309 20.25C5.71707 20.25 4.49161 19.3056 4.06984 18H1V4ZM4.06984 16C4.49161 14.6944 5.71707 13.75 7.16309 13.75C8.60911 13.75 9.83456 14.6944 10.2563 16H14V6H3V16H4.06984ZM16 14.0007C16.3858 13.8392 16.8095 13.75 17.2539 13.75C18.6999 13.75 19.9254 14.6944 20.3472 16H21.0039V13.3152L17.9833 9L16 9.00001V14.0007ZM7.16309 15.75C6.47273 15.75 5.91309 16.3096 5.91309 17C5.91309 17.6904 6.47273 18.25 7.16309 18.25C7.85344 18.25 8.41309 17.6904 8.41309 17C8.41309 16.3096 7.85344 15.75 7.16309 15.75ZM17.2539 15.75C16.5635 15.75 16.0039 16.3096 16.0039 17C16.0039 17.6904 16.5635 18.25 17.2539 18.25C17.9443 18.25 18.5039 17.6904 18.5039 17C18.5039 16.3096 17.9443 15.75 17.2539 15.75Z"></path>
                        </svg>
                        <span class="innerText">배송 가능</span>
                        <span class="statusIcon"></span>
                    </div>
                    <div class="ableItems">
                        <svg focusable="false" viewBox="0 0 24 24" class="svgIcon" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 20V4H2V20H22ZM20 6H4V18H7V10H17V18H20V6ZM11 12H9V18H11V12ZM13 18H15V12H13V18Z"></path>
                        </svg>
                        <span class="innerText"><u>고양</u>에 재고가 있습니다.</span>
                        <span class="statusIcon"></span>
                    </div>
                    <div class="ableItems">
                        <svg focusable="false" viewBox="0 0 24 24" class="svgIcon" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3341 5.59721C14.2317 3.70042 17.3076 3.70067 19.2049 5.59795C20.2048 6.59781 20.6777 7.92671 20.6239 9.23427C20.6132 12.2905 18.4165 14.942 16.4873 16.7133C15.4907 17.6283 14.4984 18.369 13.7574 18.8802C13.3859 19.1365 13.0752 19.3367 12.8554 19.474C12.7455 19.5426 12.6582 19.5957 12.5972 19.6322C12.5667 19.6504 12.5428 19.6645 12.5259 19.6744L12.506 19.6861L12.5001 19.6895L12.4981 19.6906L12.0038 18.8349V17.6459C12.1756 17.5355 12.3847 17.3974 12.6217 17.234C13.3105 16.7588 14.2248 16.0754 15.1347 15.24C17.0137 13.5148 18.624 11.3685 18.624 9.21172V9.18879L18.625 9.16588C18.6607 8.38887 18.3825 7.60393 17.7907 7.01216C16.6742 5.89569 14.864 5.89568 13.7476 7.01216L13.7462 7.01355L11.9945 8.75832L10.2484 7.01216C9.13192 5.89569 7.32175 5.89569 6.20527 7.01217C5.61351 7.60393 5.33529 8.38887 5.37094 9.16588L5.37199 9.18879V9.21173C5.37199 10.4952 5.94133 11.7912 6.84588 13.0277C7.19716 13.5079 7.59014 13.9669 8.00204 14.3987L8.0018 11.9529L10.0018 11.9527L10.0024 17.64L4.30215 17.6394L4.30234 15.6394L6.42318 15.6396C6.00479 15.1916 5.60085 14.7132 5.23168 14.2085C4.19817 12.7957 3.37862 11.0967 3.37203 9.23431C3.31828 7.92674 3.79118 6.59783 4.79106 5.59795C6.68858 3.70043 9.76508 3.70042 11.6626 5.59795L11.9973 5.93266L12.3334 5.59795L12.3341 5.59721ZM12.0038 18.8349L12.4969 19.6913L12.0038 19.9752V18.8349Z"></path>
                        </svg>
                        <span class="innerText">마음이 바뀌어도 괜찮아요. 365일 이내에 영수증과 온전한 상태의 제품을 가져오시면 전액
                            환불해드립니다.</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="itemDetailHead"></div>
    </div>
</div>
<script src="<?= $scriptDir ?>itemDet.js"></script>