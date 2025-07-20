document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      document.body.style.cursor = "pointer";
    });
    link.addEventListener("mouseleave", () => {
      document.body.style.cursor = "default";
    });
  });

  const backToTop = document.createElement("button");
  backToTop.textContent = "↑ Top";
  backToTop.style.position = "fixed";
  backToTop.style.bottom = "20px";
  backToTop.style.right = "20px";
  backToTop.style.padding = "10px 15px";
  backToTop.style.backgroundColor = "#238636";
  backToTop.style.color = "white";
  backToTop.style.border = "none";
  backToTop.style.borderRadius = "4px";
  backToTop.style.cursor = "pointer";
  backToTop.style.display = "none";

  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
