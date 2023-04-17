const socialSlider = new Swiper('.social__slide', {
	speed: 600,
	slidesPerView: 5,
	spaceBetween: 20,
	navigation: {
        nextEl: ".social__slide-arrow-next",
        prevEl: ".social__slide-arrow-prev",
    },
    pagination: {
        el: ".social__slide-num",
        type: "fraction",
    },
	// breakpoints: {
	// 	0: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 10,
	// 	},
	// 	680: {
	// 		slidesPerView: 3,
	// 		spaceBetween: 60,
	// 		autoplay: false
	// 	}
	// },
});

const scheduleSlider = new Swiper('.schedule__slider', {
	speed: 700,
	slidesPerView: 1,
	spaceBetween: 50,
	navigation: {
        nextEl: ".schedule__arrow-next",
        prevEl: ".schedule__arrow-prev",
    },
    pagination: {
        el: ".schedule__pagination",
		clickable: true,
    },
	// breakpoints: {
	// 	0: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 10,
	// 	},
	// 	680: {
	// 		slidesPerView: 3,
	// 		spaceBetween: 60,
	// 		autoplay: false
	// 	}
	// },
});

const partnersSlider = new Swiper('.partners__content-wrapper', {
	speed: 700,
	slidesPerView: 5.1,
	spaceBetween: 20,
	navigation: {
        nextEl: ".schedule__arrow-next",
        prevEl: ".schedule__arrow-prev",
    },
    pagination: {
        el: ".partners__item-pagination",
		clickable: true,
    },
	// breakpoints: {
	// 	0: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 10,
	// 	},
	// 	680: {
	// 		slidesPerView: 3,
	// 		spaceBetween: 60,
	// 		autoplay: false
	// 	}
	// },
});

const basicSlider = new Swiper('.basic__item-wrapper-gallery', {
	speed: 700,
    slidesPerView: 2.5,
	spaceBetween: 20,
});

const sessionSlider = new Swiper('.study__item-content-wrapper', {
	speed: 700,
    slidesPerView: 1,
	spaceBetween: 0,
	navigation: {
        nextEl: ".study__session-arrow-next",
        prevEl: ".study__session-arrow-prev",
    },
    pagination: {
        el: ".study__session-pagination",
		clickable: true,
    },
});

const groupSlider = new Swiper('.study__item-block-wrapper-group', {
	speed: 700,
    slidesPerView: 5,
	spaceBetween: 20,
	navigation: {
        nextEl: ".study__item-group-arrow-next",
        prevEl: ".study__item-group-arrow-prev",
    },
    pagination: {
        el: ".study__item-group-pagination",
		clickable: true,
    },
});