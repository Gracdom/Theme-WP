/**
 *counter();
 *step();
 *tabs();
 *headerFixed();
 *openNavMobile();
 *goTop();
 *animateText();
 *preloader();
 **/

(function ($) {
    ("use strict");

    var headerFixed = function () {
        if ($("header").hasClass("header-fixed")) {
            var nav = $("#header_main");
            var nav1 = $(".header-inner");

            if (nav.length) {
                var offsetTop = nav.offset().top,
                    headerHeight = nav.height(),
                    headerHeight1 = nav1.height(),
                    injectSpace = $("<div>", {
                        height: headerHeight1,
                    });
                injectSpace.hide();
                if ($("header").hasClass("style-absolute")) {
                    injectSpace.hide();
                } else {
                    injectSpace.insertAfter(nav);
                }
                $(window).on("load scroll", function () {
                    if ($(window).scrollTop() > offsetTop + headerHeight) {
                        nav.addClass("is-fixed");
                        injectSpace.show();
                    } else {
                        nav.removeClass("is-fixed");
                        injectSpace.hide();
                    }

                    if ($(window).scrollTop() > 500) {
                        nav.addClass("is-small");
                    } else {
                        nav.removeClass("is-small");
                    }
                });
            }
        }
    };

    var openNavMobile = () => {
        if ($(".tf-header").hasClass("tf-header")) {
            $(".mobile-button").on("click", () => {
                $(".mobile-nav-wrap").toggleClass("active");
                $("body").toggleClass("no-scroll");
            });

            $(".overlay-mobile-nav").on("click", () => {
                $(".mobile-nav-wrap").toggleClass("active");
                $("body").toggleClass("no-scroll");
            });
            $(".mobile-nav-close").on("click", () => {
                $(".mobile-nav-wrap").toggleClass("active");
                $("body").toggleClass("no-scroll");
            });

            $(document).on(
                "click",
                ".menu-item-has-children-mobile",
                function () {
                    var args = { duration: 200 };
                    if ($(this).hasClass("active")) {
                        $(this).children(".sub-menu-mobile").slideUp(args);
                        $(this).removeClass("active");
                    } else {
                        $(".sub-menu-mobile").slideUp(args);
                        $(this).children(".sub-menu-mobile").slideDown(args);
                        $(".menu-item-has-children-mobile").removeClass(
                            "active"
                        );
                        $(this).addClass("active");
                    }
                }
            );
        }
    };
    var counter = function () {
        if ($(document.body).hasClass("counter-scroll")) {
            var a = 0;
            $(window).scroll(function () {
                var oTop = $(".counter").offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    if ($().countTo) {
                        $(".counter")
                            .find(".number")
                            .each(function () {
                                var to = $(this).data("to"),
                                    speed = $(this).data("speed");
                                $(this).countTo({
                                    to: to,
                                    speed: speed,
                                });
                            });
                    }
                    a = 1;
                }
            });
        }
    };
    var step = function () {
        var currentIndex = 0;
        var tabCount = $(".btn-tab-item").length;
        var tabInterval;

        var switchTab = function () {
            $(".btn-tab-item").removeClass("active");
            $(".tab-item").removeClass("active");

            $(".btn-tab-item").eq(currentIndex).addClass("active");
            $(".tab-item").eq(currentIndex).addClass("active");

            currentIndex = (currentIndex + 1) % tabCount;
        };
        var startInterval = function () {
            tabInterval = setInterval(switchTab, 3000);
        };
        var stopInterval = function () {
            clearInterval(tabInterval);
        };
        $(".btn-tab-item").click(function () {
            const index = $(this).index();
            currentIndex = index;
            switchTab();
            stopInterval();
            startInterval();
        });

        startInterval();
    };

    var tabs = function () {
        $(".wg-tabs").each(function () {
            $(this).find(".widget-content-tab").children().hide();
            $(this).find(".widget-content-tab").children(".active").show();
            $(this)
                .find(".menu-tab")
                .children(".item")
                .on("click", function () {
                    var liActive = $(this).index();
                    var contentActive = $(this)
                        .siblings()
                        .removeClass("active")
                        .parents(".wg-tabs")
                        .find(".widget-content-tab")
                        .children()
                        .eq(liActive);
                    contentActive.addClass("active").fadeIn("slow");
                    contentActive.siblings().removeClass("active");
                    $(this)
                        .addClass("active")
                        .parents(".wg-tabs")
                        .find(".widget-content-tab")
                        .children()
                        .eq(liActive)
                        .siblings()
                        .hide();
                });
        });
    };
    var goTop = function () {
        if ($("div").hasClass("progress-wrap")) {
            var progressPath = document.querySelector(".progress-wrap path");
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition =
                progressPath.style.WebkitTransition = "none";
            progressPath.style.strokeDasharray = pathLength + " " + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition =
                progressPath.style.WebkitTransition =
                    "stroke-dashoffset 10ms linear";
            var updateprogress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
            };
            updateprogress();
            $(window).scroll(updateprogress);
            var offset = 200;
            var duration = 0;
            jQuery(window).on("scroll", function () {
                var offset = 200;
                var scrollTop = jQuery(this).scrollTop();
                var footerOffsetTop = jQuery(".footer-bottom").offset().top;
                var windowHeight = jQuery(window).height();

                if (
                    scrollTop > offset &&
                    scrollTop + windowHeight < footerOffsetTop
                ) {
                    jQuery(".progress-wrap").addClass("active-progress");
                } else {
                    jQuery(".progress-wrap").removeClass("active-progress");
                }
            });

            jQuery(".progress-wrap").on("click", function (event) {
                event.preventDefault();
                jQuery("html, body").animate({ scrollTop: 0 }, duration);
                return false;
            });
        }
    };
    var animateText = function () {
        if ($(".text-zoom-in-out").length) {
            let animatedTextElements =
                document.querySelectorAll(".text-zoom-in-out");
            animatedTextElements.forEach((element) => {
                if (element.animation) {
                    element.animation.progress(1).kill();
                    element.split.revert();
                }

                element.split = new SplitText(element, {
                    type: "words",
                });

                element.split.words.forEach((word, index) => {
                    gsap.set(word, {
                        opacity: 0,
                        scale: index % 2 === 0 ? 1.5 : 0.8,
                        transformOrigin: "center center",
                    });
                });

                element.animation = gsap.to(element.split.words, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%",
                        toggleActions: "play reverse play reverse",
                    },
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                });
            });
        }

        if ($(".text-fade").length) {
            let animatedTextElements = document.querySelectorAll(".text-fade");
            animatedTextElements.forEach((element) => {
                if (element.animation) {
                    element.animation.progress(1).kill();
                    element.split.revert();
                }

                element.split = new SplitText(element, {
                    type: "lines",
                    linesClass: "split-line",
                });

                gsap.set(element.split.lines, {
                    opacity: 1,
                    y: 0,
                    rotateY: -90,
                });

                element.animation = gsap.to(element.split.lines, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%",
                        toggleActions: "play reverse play reverse",
                    },
                    y: 0,
                    rotateY: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    stagger: 0.1,
                });
            });
        }
        if ($(".text-color-change").length) {
            let animatedTextElements =
                document.querySelectorAll(".text-color-change");

            animatedTextElements.forEach((element) => {
                if (element.wordSplit) {
                    element.wordSplit.revert();
                }
                if (element.charSplit) {
                    element.charSplit.revert();
                }

                element.wordSplit = new SplitText(element, {
                    type: "words",
                    wordsClass: "word-wrapper",
                });

                element.charSplit = new SplitText(element.wordSplit.words, {
                    type: "chars",
                    charsClass: "char-wrapper",
                });

                gsap.set(element.charSplit.chars, {
                    color: "#73799b",
                    opacity: 1,
                });

                element.animation = gsap.to(element.charSplit.chars, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%",
                        end: "bottom 35%",
                        toggleActions: "play none none reverse",
                        scrub: true,
                    },
                    color: "#ffffff",
                    stagger: {
                        each: 0.05,
                        from: "start",
                    },
                    duration: 0.5,
                    ease: "power2.out",
                });
            });
        }

        if ($(".text-anime-wave").length > 0) {
            let animatedTextElements =
                document.querySelectorAll(".text-anime-wave");
            animatedTextElements.forEach((element) => {
                if (element.animation) {
                    element.animation.progress(1).kill();
                    element.split.revert();
                }
                element.split = new SplitText(element, {
                    type: "lines,words,chars",
                    linesClass: "split-line",
                });
                gsap.set(element, { perspective: 400 });

                gsap.set(element.split.chars, {
                    opacity: 0,
                    y: "30px",
                });
                element.animation = gsap.to(element.split.chars, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%",
                        toggleActions: "play reverse play reverse",
                    },
                    opacity: 1,
                    y: "0",
                    duration: 0.6,
                    ease: "back",
                    transformOrigin: "0% 50% -50",
                    stagger: {
                        amount: 1,
                        from: "start",
                        ease: "sine.inOut",
                    },
                });
            });
        }
    };
    
    // Dom Ready
    $(function () {
        counter();
        step();
        tabs();
        headerFixed();
        openNavMobile();
        goTop();
        animateText();
    });

    document.addEventListener("DOMContentLoaded", function () {
  // Select all <li> elements in .nav-list and <a> elements in #menu-mobile-menu
  var desktopMenuItems = document.querySelectorAll(".nav-list li");
  var mobileMenuLinks = document.querySelectorAll("#menu-mobile-menu li a");

  // Function to normalize URLs (removes trailing slashes and lowercase for consistency)
  function normalizeURL(url) {
    return url.replace(/\/$/, "").toLowerCase();
  }

  // Get the current page URL (normalized)
  var currentURL = normalizeURL(window.location.href);

  // Set active class for desktop menu <li> elements
  desktopMenuItems.forEach(function (li) {
    var link = li.querySelector("a");
    if (link && normalizeURL(link.href) === currentURL) {
      li.classList.add("current"); // Add the `current` class to the <li> parent
    }
  });

  // Set active class for mobile menu <a> elements
  mobileMenuLinks.forEach(function (link) {
    if (normalizeURL(link.href) === currentURL) {
      link.classList.add("current"); // Add the `current` class to the <a> element
    }
  });
});



})(jQuery);
