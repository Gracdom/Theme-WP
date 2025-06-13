if (jQuery(".slider-app-1").length > 0) {
    var swiper = new Swiper(".slider-app-1", {
        spaceBetween: 10,
        loop: true,
        speed: 5000,
        slidesPerView: 5,
        slidesPerView: "auto",
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });
}
if (".slider-partner".length > 0) {
    var swiper = new Swiper(".slider-partner", {
        slidesPerView: 6,
        loop: true,
        autoplay: {
            pauseOnMouseEnter: true,
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 7000,
        breakpoints: {
            0: {
                slidesPerView: 1.5,
            },
            550: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 5,
            },
            1600: {
                slidesPerView: 6,
            },
        },
    });
}

if (".slider-testimonial.default".length > 0) {
    var swiper = new Swiper(".slider-testimonial.default", {
        slidesPerView: 3.8,
        spaceBetween: 100,
        centeredSlides: true,
        effect: "cards",
        grabCursor: true,
        initialSlide: 2,
        cardsEffect: {
            slideShadows: false,
            rotate: 10,
            perSlideOffset: 30,
            perSlideRotate: 10,
        },
        pagination: {
            el: ".testimonial-pagination.default",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            550: {
                slidesPerView: 1.5,
                spaceBetween: 0,
            },
            767: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3.8,
                spaceBetween: 0,
            },
        },
    });
}
if (".slider-testimonial.style-2".length > 0) {
    var swiper = new Swiper(".slider-testimonial.style-2", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".testimonial-pagination.style-2",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            550: {
                slidesPerView: 1.5,
            },
            767: {
                slidesPerView: 2,
            },
        },
    });
}

if (".slider-mobile-app".length > 0) {
    var swiper = new Swiper(".slider-mobile-app", {
        slidesPerView: 4.5,
        spaceBetween: 40,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 15,
            },
            550: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 4.5,
            },
        },
        speed: 10000,
        autoplay: {
            delay: 0,
        },
    });
}
if (jQuery(".slider-contact").length > 0) {
    var swiper = new Swiper(".slider-contact", {
        spaceBetween: 65,
        loop: true,
        slidesPerView: 3,
        autoplay: {
            delay: 0,
        },
        speed: 10000,
        breakpoints: {
            0: {
                spaceBetween: 30,
                slidesPerView: 1,
            },
            575: {
                spaceBetween: 30,
                slidesPerView: 1.5,
            },
            767: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
            991: {
                spaceBetween: 30,
                slidesPerView: 2.5,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
}

if (jQuery(".slider-build").length > 0) {
    var swiper = new Swiper(".slider-build", {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        centeredSlides: true,
        grabCursor: true,
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: ".slider-build-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 1000,
        },
        speed: 1000,
    });
}