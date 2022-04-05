let lightTheme = false;

//change opacity on header
window.addEventListener("scroll", function () {
  const scrollFromTop = window.scrollY;
  const headerChange = document.querySelector("header");
  const headerHeight = document.querySelector(".about").offsetTop;

  headerChange.style.opacity = 1 - scrollFromTop / headerHeight;
});

//change class in skills-container - jQuery
$("button.show-skills").on("click", function () {
  $("button.show-skills").attr("id", "inactive");
  $("div.skills-container").removeAttr("id", "inactive");
});

//page reload
document.querySelector(".reload").addEventListener("click", function () {
  window.location.reload();
});

//dark or light mode
document.querySelector("span.slider").addEventListener("click", function () {
  const divContainer = document.querySelector("div.container");
  if (lightTheme === false) {
    divContainer.setAttribute("data-theme", "light");
  } else {
    divContainer.setAttribute("data-theme", "");
  }

  lightTheme = !lightTheme;
});
