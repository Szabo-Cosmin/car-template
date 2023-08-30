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
