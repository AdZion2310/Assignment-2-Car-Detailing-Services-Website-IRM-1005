/* =====================================================================
   Bytown Shine Car Wash & Detailing — site script (no dependencies)
   - Mobile menu toggle
   - Scroll-to-top button
   - Contact form validation (client-side only; wire up your own backend)
   ===================================================================== */
(function () {
  "use strict";

  /* Mobile menu ------------------------------------------------------ */
  var toggle = document.querySelector(".menu-toggle");
  var mobileMenu = document.querySelector(".mobile-menu");
  if (toggle && mobileMenu) {
    toggle.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (e) {
      if (!mobileMenu.classList.contains("is-open")) return;
      if (mobileMenu.contains(e.target) || toggle.contains(e.target)) return;
      mobileMenu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 980) {
        mobileMenu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Scroll-to-top ---------------------------------------------------- */
  var scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    var onScroll = function () {
      scrollTop.classList.toggle("is-visible", window.scrollY > 800);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    scrollTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Contact form (client-side validation only) ------------------------ */
  var form = document.querySelector(".contact-form form");
  if (form) {
    form.setAttribute("novalidate", "novalidate");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll(".form-field").forEach(function (field) {
        var input = field.querySelector("input, textarea");
        if (!input) return;
        var value = input.value.trim();
        var bad = false;
        if (input.hasAttribute("required") && !value) bad = true;
        if (value && input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) bad = true;
        field.classList.toggle("has-error", bad);
        if (bad) valid = false;
      });
      if (!valid) {
        var first = form.querySelector(".has-error input, .has-error textarea");
        if (first) first.focus();
        return;
      }
      // Replace this with a real request to your form handler / backend.
      form.closest(".contact-form").classList.add("is-sent");
      form.reset();
    });
  }
})();
