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
