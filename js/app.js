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

            LANG_BTN.addEventListener('click', () => {
                LANG_BTN.classList.toggle('active');
                document.querySelector('.site-header__langs-list').classList.toggle('active');

            })
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
                }
            });

            if(document.querySelector('.swiper.our-projects__slider')) {
                document.querySelector('.swiper.our-projects__slider').addEventListener('mouseenter', () => {
                    SWIPER.autoplay.stop();
                })
                document.querySelector('.swiper.our-projects__slider').addEventListener('mouseleave', () => {
                    SWIPER.autoplay.start();
                })
            }
        }
        // OUR PROJECTS END
    }
}())