const hoverTrigger = document.querySelector(".hover-trigger");
const hiddenDiv = document.querySelector(".hover-container");

hoverTrigger.addEventListener("mouseover", () => {
  hiddenDiv.style.display = "block";
});

hiddenDiv.addEventListener("mouseover", () => {
  hiddenDiv.style.display = "block";
});

hiddenDiv.addEventListener("mouseout", () => {
  hiddenDiv.style.display = "none";
});

hiddenDiv.style.display = "none";

const menu = document.querySelector(".sidebar");
const hamburger = document.querySelector(".btn-bar");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");
const overlay = document.querySelector(".overlay");

function toggle() {
  if (menu.classList.contains("sidebar-translate")) {
    menu.classList.remove("sidebar-translate");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    overlay.style.display = "none";
  } else {
    menu.classList.add("sidebar-translate");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    overlay.style.display = "block";
  }
}

hamburger.addEventListener("click", toggle);

document.onclick = function (e) {
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove("sidebar-translate");
    hamburger.classList.remove("sidebar-translate");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    overlay.style.display = "none";
  }
};
