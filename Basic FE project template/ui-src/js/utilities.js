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
