const $menuBurguer = document.querySelector(".bars-menu-content");
const $menuList = document.querySelector(".navbar-list");
$menuBurguer.addEventListener("click", () => {
	$menuList.classList.toggle("show-menu");
});
