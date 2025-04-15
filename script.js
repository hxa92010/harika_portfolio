console.log("Welcome to Aliza Harika's Portfolio!");
// Dark Mode Toggle
const themeBtn = document.getElementById('toggle-theme');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.innerHTML = document.body.classList.contains('dark') 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
});

// Scroll to Top
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typing effect in Hero (optional)
let typeText = "Web Developer | UI/UX Enthusiast | Cloud Explorer";
let i = 0;
const subtitle = document.querySelector(".subtitle");

function typing() {
  if (i < typeText.length) {
    subtitle.innerHTML += typeText.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
subtitle.innerHTML = ""; // clear initial text
typing();
