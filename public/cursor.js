let cursor = document.querySelector(".cursor");

const handleCursor = (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
};

document.addEventListener("mousemove", handleCursor);
