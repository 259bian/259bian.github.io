function initCarousel(wrapDom) {
    const inner = wrapDom.querySelector('.carousel-inner');
    const imgs = inner.querySelectorAll('img');
    const prevBtn = wrapDom.querySelector('.prev');
    const nextBtn = wrapDom.querySelector('.next');
    const dots = wrapDom.querySelectorAll('.dot');

    let index = 0;
    const total = imgs.length;
    let timer = null;

    function goTo(idx) {
        index = idx;
        inner.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        let newIdx = index + 1;
        if (newIdx >= total) newIdx = 0;
        goTo(newIdx);
    }

    function startAutoPlay() {
        timer = setInterval(nextSlide, 2000);
    }
    function stopAutoPlay() {
        clearInterval(timer);
    }

    prevBtn.addEventListener('click', () => {
        let newIdx = index - 1;
        if (newIdx < 0) newIdx = total - 1;
        goTo(newIdx);
    });
    nextBtn.addEventListener('click', nextSlide);
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => goTo(i));
    });

    wrapDom.addEventListener('mouseenter', stopAutoPlay);
    wrapDom.addEventListener('mouseleave', startAutoPlay);
    startAutoPlay();
}

// 直接遍历DOM元素，不再使用nth-child选择器！
window.addEventListener('DOMContentLoaded', function () {
    const carouselList = document.querySelectorAll('.carousel-wrap');
    carouselList.forEach(el => {
        initCarousel(el);
    })
})
