const $menuBurguer = document.querySelector(".bars-menu-content");
const $menuList = document.querySelector(".navbar-list");
const $iconExitMenu = document.querySelector(".icon-exit");
const $projectsContainer = document.getElementById('projects')

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


// Creo las cards de los proyectos
const createCard = (arr) => {
  const {name, image, link} = arr;
  return `
  <div class="projets-content">
    <img src=${image} alt=${name} class="projets-img">
   <div class="projets-text">
      <a href=${link} target="_blank">Ver Proyecto</a>
    </div>
  </div>
  `
}
// Renderizo las cards en el contenedo html
const renderCards = (container) => {
  return container.innerHTML = projects.map(createCard).join("")
}



const init = () => {
	$menuBurguer.addEventListener("click", showMenu);
	$iconExitMenu.addEventListener("click", closeMenu);
  renderCards($projectsContainer);
};

init();
