document.addEventListener("DOMContentLoaded", function() {
  // Wait for Firebase to check auth state before running anything else
  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      window.location.href = "https://valuedoblieg.github.io/login/"; // Redirect to your login page on GitHub Pages
      return;
    }
    // Only run the rest of your code if the user is authenticated
    startMainApp();
  });
});

function startMainApp() {
  const fadeEls = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  fadeEls.forEach(el => observer.observe(el));

  let currentIndex = 0;
  const slider = document.getElementById("characterSlider");
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Optional: Auto slide every 7 seconds
  setInterval(nextSlide, 7000);
}
