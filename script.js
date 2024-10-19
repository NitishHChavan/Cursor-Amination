const cursor = document.querySelector(".cursor");
let timeout;

// Mouse movement handler
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  // Update cursor position and show it
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  // Stop animation after a period of no movement
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cursor.style.display = "none";
  }, 1000);
});

// Hide cursor when mouse leaves the viewport
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});
