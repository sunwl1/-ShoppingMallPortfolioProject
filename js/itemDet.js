document.querySelector('.itemImgContainer').addEventListener('wheel', (e) => {
    const delta = Math.sign(e.deltaY);
    const imgs = document.querySelectorAll('.itemImage').length;
    if(delta > 0) {
        document.querySelector('.itemImgContainer').scrollLeft += document.querySelector('.itemImgContainer').scrollWidth / imgs;
        console.log('scrollWidth: '+document.querySelector('.itemImgContainer').scrollWidth)
    }
    else{
        document.querySelector('.itemImgContainer').scrollLeft -= document.querySelector('.itemImgContainer').scrollWidth / imgs;
    } 
    document.querySelector('.scrollIndicatorBar').style.left = document.querySelector('.itemImgContainer').scrollLeft;
    console.log('scrollLeft: '+document.querySelector('.itemImgContainer').scrollLeft);
});