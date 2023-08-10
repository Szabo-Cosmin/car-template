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
