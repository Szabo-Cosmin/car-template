jQuery ? console.log("Working!") : console.log("Error!");
console.log("pateu");



const utilities = {
  backToTopButton: function () {
    const button = document.querySelector(".js-btn-scroll");
    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  },
};

document.addEventListener("DOMContentLoaded", function () {
  utilities.backToTopButton();
});

function animateStars() {
  setTimeout(() => {
    document.querySelector(".star1").style.cssText = `
    opacity: 1; 
    color: white;
  `;
  }, "800");
  setTimeout(() => {
    document.querySelector(".star2").style.cssText = `
    opacity: 1; 
    color: white;
  `;
  }, "1000");
  setTimeout(() => {
    document.querySelector(".star3").style.cssText = `
    opacity: 1; 
    color: white;
  `;
  }, "1200");
  setTimeout(() => {
    document.querySelector(".star4").style.cssText = `
    opacity: 1; 
    color: white;
  `;
  }, "1400");
  setTimeout(() => {
    document.querySelector(".star5").style.cssText = `
    opacity: 1; 
    color: white;
  `;
  }, "1600");
}
animateStars();


const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
  const target = document.querySelector(qSelector);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    target.innerText = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

function triggerAnimations() {
  counterAnim(".count1", 0, 1200, 2000);
  counterAnim(".count2", 0, 4, 2000);
  counterAnim(".count3", 0, 5, 2000);
  counterAnim(".count4", 0, 15000, 2000);
}

const section = document.getElementById("video");
let animationsTriggered = false;

function handleScroll() {
  let sectionPosition = section.getBoundingClientRect();

  if (
    sectionPosition.top <= window.innerHeight &&
    sectionPosition.bottom >= 0 &&
    !animationsTriggered
  ) {
    triggerAnimations();
    animationsTriggered = true;
    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);


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
