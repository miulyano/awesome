var menuButton = document.querySelector(".menu");
var exit = document.querySelector(".close");
var menu = document.querySelector(".menu-list-block");

menuButton.addEventListener("click", function (evt) { 
  evt.preventDefault();
  menu.classList.add("menu-list-block-active");
});

exit.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.remove("menu-list-block-active");	
});