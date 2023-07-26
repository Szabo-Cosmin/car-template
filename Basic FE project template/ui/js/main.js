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
    document.querySelector(".star1").style.opacity = 1;
  }, "800");
  setTimeout(() => {
    document.querySelector(".star2").style.opacity = 1;
  }, "1000");
  setTimeout(() => {
    document.querySelector(".star3").style.opacity = 1;
  }, "1200");
  setTimeout(() => {
    document.querySelector(".star4").style.opacity = 1;
  }, "1400");
  setTimeout(() => {
    document.querySelector(".star5").style.opacity = 1;
  }, "1600");
}
animateStars();
