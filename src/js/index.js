const $menuBurger = document.querySelector(".bars-menu-content");
const $menuList = document.querySelector(".navbar-list");
const $iconCloseMenu = document.querySelector(".icon-exit");
const $projectsContainer = document.querySelector(".projects-container");

$menuBurger.addEventListener("click", (e) => {
	$menuList.classList.toggle("show-menu");
});
$iconCloseMenu.addEventListener("click", (e) => {
	$menuList.classList.remove("show-menu");
});

// Creo las cards de los proyectos
const createCard = (arr) => {
	const { name, image, link } = arr;
	//<img src=${image} alt=${name} class="projets-img">
	return `
  <div class="project-content" 
        style="background-image:url(${image})">
   <div class="projets-text">
      <a href=${link} target="_blank">Ver Proyecto</a>
    </div>
  </div>
  `;
};
// Renderizo las cards en el contenedo html
const renderCards = (container) => {
	return (container.innerHTML = projects.map(createCard).join(""));
};

const init = () => {
	renderCards($projectsContainer);
};

init();
