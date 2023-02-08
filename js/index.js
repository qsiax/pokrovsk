gsap.registerPlugin(ScrollTrigger, TweenMax);

window.onload = function () {
	TweenMax.to('.overlay-preloader-logo', 1.5, {
		delay: .5,
		x: "0%",
		ease: Expo.easeInOut
	})
	TweenMax.to('.overlay-preloader', 1.5, {
		delay: 3,
		width: 0,
		ease: Expo.easeInOut
	})
	TweenMax.to('.overlay-preloader-logo', 1.5, {
		delay: 2.8,
		x: "-100%",
		ease: Expo.easeInOut
	})
	TweenMax.to('.overlay-preloader-el01', 1.5, {
		delay: 3,
		right: "100%",
		ease: Expo.easeInOut
	})
};

VanillaTilt.init(document.querySelectorAll(".social__item"), {
	max: 10,
	speed: 400,
	glare: true,
	"max-glare": 1,
	reverse: true,
	scale: 0.95,
});