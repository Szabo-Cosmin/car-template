jQuery ? console.log("Working!") : console.log("Error!");
console.log("pateu");



const utilities = {
  backToTopButton: function () {
    const button = document.getElementById("btn-scroll");
    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  },

  toggleTab: function () {},
};

document.addEventListener("DOMContentLoaded", function () {
  utilities.backToTopButton();
  utilities.toggleTab();
});
