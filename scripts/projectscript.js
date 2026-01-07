const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);

// --- THEME RESTORE & TOGGLE ---
const themeBtn = document.getElementById("theme-toggle");
const icon = themeBtn.querySelector("i");

// Initial icon set based on loaded theme
const currentTheme = document.documentElement.getAttribute("data-theme");
if (currentTheme === "light") icon.className = "ri-sun-line";
else icon.className = "ri-moon-line";

themeBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const newVal = current === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newVal);
  localStorage.setItem("theme", newVal);

  icon.className = newVal === "light" ? "ri-sun-line" : "ri-moon-line";
});

// --- LANGUAGE ---
const langOpts = document.querySelectorAll(".lang-opt");
let activeLang = "fr";

langOpts.forEach((opt) => {
  opt.addEventListener("click", () => {
    const lang = opt.getAttribute("data-lang");
    if (lang !== activeLang) {
      activeLang = lang;

      // UI updates
      langOpts.forEach((o) =>
        o.classList.toggle("active", o.getAttribute("data-lang") === lang)
      );

      if (lang === "fr") {
        document
          .querySelectorAll(".lang-en")
          .forEach((e) => (e.style.display = "none"));
        document
          .querySelectorAll(".lang-fr")
          .forEach((e) => (e.style.display = "block"));
      } else {
        document
          .querySelectorAll(".lang-fr")
          .forEach((e) => (e.style.display = "none"));
        document
          .querySelectorAll(".lang-en")
          .forEach((e) => (e.style.display = "block"));
      }
      ScrollTrigger.refresh();
    }
  });
});

// --- ANIMATIONS ---
const lenis = new Lenis({ duration: 1.2, smooth: true });
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

// Cursor
const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");
window.addEventListener("mousemove", (e) => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
  outline.animate(
    { left: `${e.clientX}px`, top: `${e.clientY}px` },
    { duration: 500, fill: "forwards" }
  );
});
document.querySelectorAll(".hover-target, a").forEach((el) => {
  el.addEventListener("mouseenter", () =>
    document.body.classList.add("hovering")
  );
  el.addEventListener("mouseleave", () =>
    document.body.classList.remove("hovering")
  );
});

// Reveal Animations
const tl = gsap.timeline();
tl.from(".reveal-text", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power4.out",
  delay: 0.2,
})
  .from(
    ".reveal-meta",
    { y: 20, opacity: 0, duration: 0.8, stagger: 0.05 },
    "-=0.5"
  )
  .from(".banner-wrapper", { scale: 0.9, opacity: 0, duration: 1 }, "-=0.8");

// Parallax Image
gsap.utils.toArray(".parallax-img-wrapper img").forEach((img) => {
  gsap.to(img, {
    scale: 1.15,
    scrollTrigger: {
      trigger: img.parentElement,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});
