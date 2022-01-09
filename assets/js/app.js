const hamBtn = document.getElementById("ham-btn");
const mobileNav = document.querySelector(".mobile-nav");
const closeBtn = document.getElementById("close-btn");

hamBtn.addEventListener("click", () => {
  mobileNav.classList.add("active");

  hamBtn.style.display = "none";
  closeBtn.style.display = "block";

  closeBtn.addEventListener("click", () => {
    hamBtn.style.display = "block";
    closeBtn.style.display = "none";
    mobileNav.classList.remove("active");
  });
});
