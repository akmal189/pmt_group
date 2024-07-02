const myObj = {
    queue: [],
    init: function () {
        let queue = this.queue;

        for (key in queue) {
            let f = queue[key];
            if (typeof f == 'function') {
                f();
            }
        }
    }
};
document.addEventListener('DOMContentLoaded', function () {
    myObj.init();
});

(function () {
    let IsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    myObj.queue = {
        // HEADER BEGIN
        headerFunctions: function () {
            const LANG_BTN = document.querySelector('.site-header__langs-active');
            const HEADER_WR = document.querySelector('.site-header__inner');
            const BURGER_MENU = document.querySelector('.site-header__menu');
            const BURGER_BTN = document.querySelector('.site-header__burgerBtn');

            LANG_BTN.addEventListener('click', () => {
                LANG_BTN.classList.toggle('active');
                document.querySelector('.site-header__langs-list').classList.toggle('active');

            })

            document.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    HEADER_WR.classList.add('fixed')
                } else {
                    HEADER_WR.classList.remove('fixed')
                }
            })

            

            BURGER_BTN.addEventListener('click', (e) => {
                BURGER_BTN.classList.toggle('active')
                document.querySelector('.burger_menu').classList.toggle('opened')
                document.querySelector('.site-header__inner').classList.toggle('menuOpened')
                document.querySelector('html').classList.toggle('overflow_hidden')
            });
            if (window.innerWidth <= 1200 || IsMobile) {
                window.addEventListener('resize', () => {
                    document.querySelector('.burger_menu__inner').append(BURGER_MENU);
                })
                document.querySelector('.burger_menu__inner').append(BURGER_MENU);
            }

        },
        // HEADER END

        // OUR PROJECTS BEGIN
        ourProjects: function () {
            const SWIPER = new Swiper('.swiper.our-projects__slider', {
                slidesPerView: 2,
                loop: true,
                effect: 'slide',
                speed: 1000,
                spaceBetween: 30,
                lazy: {
                    loadPrevNext: true, // pre-loads the next image to avoid showing a loading placeholder if possible
                    loadPrevNextAmount: 2 //or, if you wish, preload the next 2 images
                },
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                pagination: {
                    el: '.our-projects__slider .swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.our-projects__slider .swiper-button-next',
                    prevEl: '.our-projects__slider .swiper-button-prev',
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 1
                    },
                    1025: {
                        slidesPerView: 2
                    }
                }
            });

            if (document.querySelector('.swiper.our-projects__slider')) {
                document.querySelector('.swiper.our-projects__slider').addEventListener('mouseenter', () => {
                    SWIPER.autoplay.stop();
                })
                document.querySelector('.swiper.our-projects__slider').addEventListener('mouseleave', () => {
                    SWIPER.autoplay.start();
                })
            }
        },
        // OUR PROJECTS END

        // PROJECT PAGE BEGIN
        projectSliders: function () {
            const SWIPER = new Swiper('.swiper.project-info__left-slider', {
                slidesPerView: 1,
                loop: true,
                effect: 'slide',
                speed: 1000,
                spaceBetween: 0,
                lazy: {
                    loadPrevNext: true, // pre-loads the next image to avoid showing a loading placeholder if possible
                    loadPrevNextAmount: 2 //or, if you wish, preload the next 2 images
                },
                autoplay: {
                    delay: 999999,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                navigation: {
                    nextEl: '.project-info__left-slider .swiper-button-next',
                    prevEl: '.project-info__left-slider .swiper-button-prev',
                }
            });

            const SWIPER2 = new Swiper('.swiper.project-info__result-slider', {
                slidesPerView: 1,
                loop: true,
                effect: 'slide',
                speed: 1000,
                spaceBetween: 0,
                lazy: {
                    loadPrevNext: true, // pre-loads the next image to avoid showing a loading placeholder if possible
                    loadPrevNextAmount: 2 //or, if you wish, preload the next 2 images
                },
                autoplay: {
                    delay: 999999,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                navigation: {
                    nextEl: '.project-info__result-slider .swiper-button-next',
                    prevEl: '.project-info__result-slider .swiper-button-prev',
                }
            });

            const SWIPER3 = new Swiper('.swiper.other-projects__slider', {
                slidesPerView: 3,
                loop: true,
                effect: 'slide',
                speed: 1000,
                spaceBetween: 30,
                lazy: {
                    loadPrevNext: true, // pre-loads the next image to avoid showing a loading placeholder if possible
                    loadPrevNextAmount: 2 //or, if you wish, preload the next 2 images
                },
                autoplay: {
                    delay: 999999,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                navigation: {
                    nextEl: '.other-projects .swiper-button-next',
                    prevEl: '.other-projects .swiper-button-prev',
                }
            });
        },
        // PROJECT PAGE END

        // BLOCK ANIMATIONS BEGIN
        blockAnimations: function () {
            gsap.registerPlugin(ScrollTrigger);

            const blocks = document.querySelectorAll(".main-blocks__item-title, .main-blocks__item-image, .main-blocks__item-text, .main-blocks__item-body .body-title, .main-blocks__item-body .body-text, .site-header__text .list .item .title, .site-header__text .list .item .body, .main-blocks__title, .industrial-block__body-inner");

            blocks.forEach((block) => {
            gsap.set(block, { opacity: 0, y: 100 });

                ScrollTrigger.create({
                    trigger: block,
                    start: "top 95%",
                    onEnter: () => {
                    gsap.to(block, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
                    }
                });
            });
        }
        // BLOCK ANIMATIONS END
    }
}())