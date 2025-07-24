// ========== Typewriter Effect ==========
const typingElement = document.getElementById("typing");
const phrases = [
  "MERN Stack Developer",
  "Creative Problem Solver",
  "JavaScript Enthusiast",
  "React & Node Specialist"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = phrases[phraseIndex];
  const partial = isDeleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  typingElement.textContent = partial;

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 40 : 100);
  }
}

document.addEventListener("DOMContentLoaded", type);

// ========== GSAP Animations ==========
gsap.registerPlugin(ScrollTrigger);

// Fade-in glass boxes
gsap.utils.toArray('.glass-box').forEach((box) => {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: "power3.out"
  });
});

gsap.to('.skills-cloud span', {
  scrollTrigger: {
    trigger: '.skills',
    start: 'top 85%',
    toggleActions: 'play none none none'
  },
  opacity: 1,
  y: 0,
  stagger: 0.1,
  duration: 0.8,
  ease: 'power2.out'
});



// Project cards pop
gsap.from('.project-card', {
  scrollTrigger: {
    trigger: '.project-grid',
    start: 'top 80%'
  },
  opacity: 0,
  scale: 0.8,
  stagger: 0.2,
  duration: 0.8,
  ease: 'back.out(1.7)'
});

// Floating orb motion
gsap.to(".orb-1", {
  y: 50,
  duration: 6,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
gsap.to(".orb-2", {
  x: 60,
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
gsap.to(".orb-3", {
  y: -40,
  duration: 7,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Optional: Form Submit Feedback
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for reaching out, Prerak will get back to you soon!");
  this.reset();
});
