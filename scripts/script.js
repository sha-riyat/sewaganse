// --- SMOOTH SCROLL (Lenis) ---
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// --- LOGO CLICK TO TOP ---
document.getElementById("site-logo").addEventListener("click", (e) => {
  e.preventDefault();
  lenis.scrollTo(0); // Scroll to top smoothly
});

// --- LANGUAGE SWITCHER LOGIC ---
const langOptions = document.querySelectorAll(".lang-opt");
let currentLang = "fr";

langOptions.forEach((opt) => {
  opt.addEventListener("click", () => {
    const selectedLang = opt.getAttribute("data-lang");
    if (selectedLang !== currentLang) {
      setLanguage(selectedLang);
    }
  });
});

function setLanguage(lang) {
  currentLang = lang;
  langOptions.forEach((opt) => {
    if (opt.getAttribute("data-lang") === lang) opt.classList.add("active");
    else opt.classList.remove("active");
  });
  if (lang === "fr") {
    document
      .querySelectorAll(".lang-en")
      .forEach((el) => (el.style.display = "none"));
    document
      .querySelectorAll(".lang-fr")
      .forEach((el) => (el.style.display = "block"));
    document.querySelector(".cta-btn .lang-fr").style.display = "inline";
  } else {
    document
      .querySelectorAll(".lang-fr")
      .forEach((el) => (el.style.display = "none"));
    document
      .querySelectorAll(".lang-en")
      .forEach((el) => (el.style.display = "block"));
    document.querySelector(".cta-btn .lang-en").style.display = "inline";
  }
  ScrollTrigger.refresh();
}

// --- THEME SWITCHER LOGIC ---
const themeBtn = document.getElementById("theme-toggle");
const themeIcon = themeBtn.querySelector("i");
const htmlElement = document.documentElement;

themeBtn.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  htmlElement.setAttribute("data-theme", newTheme);
  if (newTheme === "light") {
    themeIcon.classList.replace("ri-moon-line", "ri-sun-line");
  } else {
    themeIcon.classList.replace("ri-sun-line", "ri-moon-line");
  }
});

gsap.registerPlugin(ScrollTrigger);

// --- CURSOR LOGIC ---
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;
  cursorOutline.animate(
    { left: `${posX}px`, top: `${posY}px` },
    { duration: 500, fill: "forwards" }
  );
});

document
  .querySelectorAll(".hover-target, a, .magnetic, .magnetic-area")
  .forEach((elem) => {
    elem.addEventListener("mouseenter", () =>
      document.body.classList.add("hovering")
    );
    elem.addEventListener("mouseleave", () =>
      document.body.classList.remove("hovering")
    );
  });

// --- ANIMATIONS ---
const tlIntro = gsap.timeline();
tlIntro
  .from(".hero-title span", {
    y: 150,
    opacity: 0,
    stagger: 0.1,
    duration: 1.2,
    ease: "power4.out",
    delay: 0.2,
  })
  .from(".hero-footer", { opacity: 0, y: 20, duration: 0.8 }, "-=0.8")
  .from("header", { y: -50, opacity: 0, duration: 0.8 }, "-=0.8");

if (window.innerWidth > 768) {
  const works = document.querySelector(".work-container");
  gsap.to(works, {
    x: () => -(works.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: () => "+=" + works.scrollWidth,
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true,
    },
  });
}

gsap.to(".marquee-track", {
  xPercent: -50,
  repeat: -1,
  duration: 12,
  ease: "linear",
});

gsap.utils.toArray(".work-img img").forEach((img) => {
  gsap.to(img, {
    scale: 1.2,
    scrollTrigger: {
      trigger: img.parentElement,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});
