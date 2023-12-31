/*ocument.addEventListener("DOMContentLoaded", function () {
  const interactiveBg = document.getElementById("interactive-bg");
  const rippleContainer = document.createElement("div");
  rippleContainer.classList.add("ripple-container");
  interactiveBg.appendChild(rippleContainer);

  interactiveBg.addEventListener("mousemove", function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const dimSize = 150; // Adjust the size of the dimming effect
    const numCircles = 5; // Number of concentric circles

    rippleContainer.innerHTML = ""; // Clear previous circles

    for (let i = 0; i < numCircles; i++) {
      const circle = document.createElement("div");
      const circleSize = dimSize + i * 20; // Adjust the size of each circle
      const opacity = 1 - i / numCircles; // Calculate opacity

      circle.style.width = `${circleSize}px`;
      circle.style.height = `${circleSize}px`;
      circle.style.left = `${mouseX - circleSize / 2}px`;
      circle.style.top = `${mouseY - circleSize / 2}px`;
      circle.style.opacity = opacity;
      circle.classList.add("ripple-circle"); // Add a class for additional styling

      rippleContainer.appendChild(circle);
    }
  });

  interactiveBg.addEventListener("mouseleave", function () {
    rippleContainer.innerHTML = ""; // Clear circles on mouse leave
  });
});*/
