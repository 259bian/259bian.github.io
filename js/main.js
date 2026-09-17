/* =========================================================
   CAROUSEL
========================================================= */

function initCarousel(wrapDom) {

    const inner = wrapDom.querySelector(".carousel-inner");
    const imgs = inner.querySelectorAll("img");

    const prevBtn = wrapDom.querySelector(".prev");
    const nextBtn = wrapDom.querySelector(".next");

    const dots = wrapDom.querySelectorAll(".dot");

    let index = 0;
    const total = imgs.length;

    let timer = null;


    /* =========================
       切换
    ========================= */

    function goTo(idx) {

        if (idx < 0) {
            idx = total - 1;
        }

        if (idx >= total) {
            idx = 0;
        }

        index = idx;

        inner.style.transform =
            `translateX(-${index * 100}%)`;


        dots.forEach((dot, i) => {

            dot.classList.toggle(
                "active",
                i === index
            );

        });

    }


    /* =========================
       下一张
    ========================= */

    function nextSlide() {

        goTo(index + 1);

    }


    /* =========================
       上一张
    ========================= */

    function prevSlide() {

        goTo(index - 1);

    }


    /* =========================
       自动播放
    ========================= */

    function startAutoPlay() {

        stopAutoPlay();

        timer = setInterval(
            nextSlide,
            4000
        );

    }


    function stopAutoPlay() {

        if (timer !== null) {

            clearInterval(timer);

            timer = null;

        }

    }


    /* =========================
       按钮
    ========================= */

    if (prevBtn) {

        prevBtn.addEventListener(
            "click",
            () => {

                prevSlide();

                startAutoPlay();

            }
        );

    }


    if (nextBtn) {

        nextBtn.addEventListener(
            "click",
            () => {

                nextSlide();

                startAutoPlay();

            }
        );

    }


    /* =========================
       Dots
    ========================= */

    dots.forEach((dot, i) => {

        dot.addEventListener(
            "click",
            () => {

                goTo(i);

                startAutoPlay();

            }
        );

    });


    /* =========================
       鼠标悬停暂停
    ========================= */

    wrapDom.addEventListener(
        "mouseenter",
        stopAutoPlay
    );

    wrapDom.addEventListener(
        "mouseleave",
        startAutoPlay
    );


    /* =========================
       键盘操作
    ========================= */

    wrapDom.addEventListener(
        "keydown",
        event => {

            if (event.key === "ArrowLeft") {

                prevSlide();

                startAutoPlay();

            }

            if (event.key === "ArrowRight") {

                nextSlide();

                startAutoPlay();

            }

        }
    );


    /* =========================
       初始化
    ========================= */

    goTo(0);

    startAutoPlay();


    /* =========================
       页面不可见时暂停
    ========================= */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (document.hidden) {

                stopAutoPlay();

            } else {

                startAutoPlay();

            }

        }
    );

}



/* =========================================================
   DOM READY
========================================================= */

window.addEventListener(
    "DOMContentLoaded",
    () => {

        const carouselList =
            document.querySelectorAll(
                ".carousel-wrap"
            );


        carouselList.forEach(
            carousel => {

                initCarousel(carousel);

            }
        );


    }
);