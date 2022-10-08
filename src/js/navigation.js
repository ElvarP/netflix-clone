const header = document.getElementById("header");
const navigation = document.getElementById("navigation");

window.addEventListener("scroll", function (e) {
	if (window.scrollY > 20) {
		header.classList.add("bg-neutral-900");
	} else {
		header.classList.remove("bg-neutral-900");
	}
});
