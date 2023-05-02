const section = document.querySelectorAll("section");
const container_fluid = document.querySelectorAll("container-fluid");
console.log("container_fluid");

const containerMobile = () =>
	container_fluid.forEach((element) => {
		const sectionHasFluid = element.closest("section");

		if (!sectionHasFluid.classList.contains("first-screen")) {
			null;
		} else {
			sectionHasFluid.closest("section").style.padding = "0 50px";
		}
	});

function adopContainer(x) {
	if (x.matches) {
		// If media query matches
		null;
	} else {
		containerMobile();
	}
}

var x = window.matchMedia("(max-width: 991px)");
adopContainer(x); // Call listener function at run time
x.addListener(adopContainer); // Attach listener function on state changes

$(document).ready(function () {
	$(".banner").slick({
		dots: true,
		arrows: true,
		appendArrows: ".banner-nav",
		responsive: [
			{
				breakpoint: 991,
				settings: {
					arrows: false,
				},
			},
		],
	});

	mobileOnlySlider("#slider-advantages", true, false, 991);

	function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
		var slider = $($slidername);
		var settings = {
			mobileFirst: true,
			dots: $dots,
			arrows: $arrows,
			responsive: [
				{
					breakpoint: $breakpoint,
					settings: "unslick",
				},
			],
		};

		slider.slick(settings);

		$(window).on("resize", function () {
			if ($(window).width() > $breakpoint) {
				return;
			}
			if (!slider.hasClass("slick-initialized")) {
				return slider.slick(settings);
			}
		});
	} // Mobile Only Slider

	$(".slider-template").slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1540,
				settings: {
					slidesToShow: 2,
					infinite: true,
				},
			},
			{
				breakpoint: 1131,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false,
				},
			},

			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});
});

const btnBox = document.querySelectorAll(".btn-box");

btnBox.forEach((item) => {
	item.closest(".col-md-6").classList.add("button-group");
});
document.getElementById("fileInput").onchange = function () {
	document.getElementById("file-name").innerHTML = this.files[0].name;
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const title = entry.target.querySelector("h2");

		if (entry.isIntersecting) {
			title.classList.add("animate__animated");
			title.classList.add("animate__fadeInUp");
			return; // if we added the class, exit the function
		}

		// We're not intersecting, so remove the class!
		title.classList.remove("animate__animated");
		title.classList.remove("animate__fadeInUp");
	});
});

const titles = document.querySelectorAll(".template-title");
titles.forEach((entry) => {
	observer.observe(entry);
});

const observerLeft = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const title = entry.target.querySelector("h2");

		if (entry.isIntersecting) {
			title.classList.add("animate__animated");
			title.classList.add("animate__fadeInTopLeft");
			return; // if we added the class, exit the function
		}

		// We're not intersecting, so remove the class!
		title.classList.remove("animate__animated");
		title.classList.remove("animate__fadeInTopLeft");
	});
});

const titlesLeft = document.querySelectorAll(".template-title-left");
titlesLeft.forEach((entry) => {
	observerLeft.observe(entry);
});

const accordionItems = document.querySelectorAll(".acordion-item");

accordionItems.forEach((item) => {
	item.addEventListener("click", (event) => {
		item.classList.toggle("active");
	});
});
