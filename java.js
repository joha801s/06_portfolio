const btn = document.querySelector(".toggle-btn");
const nav = document.querySelector(".banner nav");

function toggleMenu() {
  nav.classList.toggle("shown");

  const menuShown = nav.classList.contains("shown");

  if (menuShown) {
    btn.textContent = "Lukk";
  } else {
    btn.textContent = "Meny";
  }
}

btn.addEventListener("click", toggleMenu);
