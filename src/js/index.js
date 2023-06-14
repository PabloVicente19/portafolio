const $menuBurguer = document.querySelector(".bars-menu-content");
const $menuList = document.querySelector(".navbar-list");
const $iconExit = document.querySelector(".icon-exit-content");

$menuBurguer.addEventListener("click", () => {
	$menuList.classList.toggle("show-menu");
	$menuBurguer.classList.toggle("hidden");
	$iconExit.classList.toggle("show");
});
