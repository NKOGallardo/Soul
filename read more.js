// Navbar animation on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar");
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });


const button = document.getElementById('social');

button.addEventListener('click', () => {
  window.location.href = 'My-work.html';
});

function Home() {
    window.location.href = "My-work.html";
}

function social() {
    window.location.href = "socials.html";
}
