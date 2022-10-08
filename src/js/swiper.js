import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper-container", {
	slidesPerView: 2,
	slidesPerGroup: 1,
	centeredSlides: true,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		// when window width is >= 600px
		640: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 5,
			centeredSlides: true,
		},
		// when window width is >= 900px
		768: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 5,
			centeredSlides: false,
		},
		// when window width is >= 1200px
		1024: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 5,
			centeredSlides: false,
		},

		// when window width is >= 1500px
		1280: {
			slidesPerView: 5,
			slidesPerGroup: 5,
			spaceBetween: 5,
			centeredSlides: false,
		},

		// when window width is >= 1800px
		1536: {
			slidesPerView: 6,
			slidesPerGroup: 6,
			spaceBetween: 5,
			centeredSlides: false,
		},
	},
});
