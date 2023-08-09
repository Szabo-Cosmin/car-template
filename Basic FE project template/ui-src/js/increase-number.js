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

document.addEventListener("DOMContentLoaded", () => {
  counterAnim(".count1", 0, 1200, 2000);
  counterAnim(".count2", 0, 4, 2000);
  counterAnim(".count3", 0, 5, 2000);
  counterAnim(".count4", 0, 15000, 2000);
});
