const $menuBurguer = document.querySelector(".bars-menu-content");
const $menuList = document.querySelector(".navbar-list");
const $iconExitMenu = document.querySelector(".icon-exit");

// Cuando se hace click al menu hamburguesa se habre
const showMenu = () => {
	$menuList.classList.toggle("show-menu");
	$menuBurguer.classList.toggle("hidden");
	$iconExitMenu.classList.toggle("show");
};
// Evento que cuando se hace click se cierra el menu
const closeMenu = () => {
	$menuList.classList.toggle("show-menu");
	$menuBurguer.classList.toggle("hidden");
	$iconExitMenu.classList.toggle("show");
};

const init = () => {
	$menuBurguer.addEventListener("click", showMenu);
	$iconExitMenu.addEventListener("click", closeMenu);
};

init();
