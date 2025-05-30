// Redirect to login if not authenticated
document.addEventListener("DOMContentLoaded", function() {
  // Initialize Firebase if not already initialized
  if (!firebase.apps.length) {
   const firebaseConfig = {
        apiKey: "AIzaSyBjJr29_O7TQ2GugO6yUvQKgzGCAsf1sh8",
        authDomain: "k-on-login-page.firebaseapp.com",
        projectId: "k-on-login-page",
        storageBucket: "k-on-login-page.firebasestorage.app",
        messagingSenderId: "1029468598680",
        appId: "1:1029468598680:web:156f1c0426e62da296bbed",
        measurementId: "G-30B4FS9RZ9"
    };
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      window.location.href = "https://k-on-login-page.firebaseapp.com/"; // Change to your login page URL
    }
  });
});
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
