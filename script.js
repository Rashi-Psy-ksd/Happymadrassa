// Happy Madrassa — interactions
(function () {
  "use strict";

  /* ---------- floating gold star field ---------- */
  var STAR_GLYPHS = ["✦", "✧", "✷", "☾"];
  var field = document.getElementById("starField");
  if (field) {
    var count = window.innerWidth < 760 ? 14 : 26;
    for (var i = 0; i < count; i++) {
      var mote = document.createElement("span");
      mote.className = "mote";
      mote.textContent = STAR_GLYPHS[i % STAR_GLYPHS.length];
      mote.style.left = Math.random() * 100 + "vw";
      mote.style.top = Math.random() * 100 + "vh";
      mote.style.fontSize = 10 + Math.random() * 22 + "px";
      var duration = 14 + Math.random() * 22;
      mote.style.animationDuration =
        duration + "s, " + (3 + Math.random() * 4) + "s";
      mote.style.animationDelay =
        -Math.random() * duration + "s, " + -Math.random() * 5 + "s";
      field.appendChild(mote);
    }
  }

  /* ---------- nav background on scroll ---------- */
  var nav = document.querySelector(".nav");
  var onScroll = function () {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ---------- gentle parallax on hero photo ---------- */
  var heroPhoto = document.querySelector(".hero-photo");
  if (heroPhoto && window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", function (e) {
      var x = (e.clientX / window.innerWidth - 0.5) * 10;
      var y = (e.clientY / window.innerHeight - 0.5) * 10;
      heroPhoto.style.transform =
        "translate(" + x + "px," + y + "px)";
    });
  }

  /* ---------- mobile nav: simple show/hide ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }
})();
