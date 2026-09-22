/**
 * Eddie's Grooming Lounge — Navigation Component
 * Shared navigation config for desktop header, mobile drawer, and footer.
 */

(function () {
  'use strict';

  // Navigation configuration
  const NAV_CONFIG = {
    brand: {
      name: "EDDIE'S",
      tagline: "Tarkwa, Western Region",
      logo: "images/logo.png",
      homeUrl: "index.html"
    },
    links: [
      { label: "Home", href: "index.html" },
      { label: "Our Services", href: "services.html" },
      { label: "Recent Work", href: "portfolio.html" },
      { label: "Contact Us", href: "contact.html" }
    ],
    headerCta: {
      label: "Book a Chair",
      href: "contact.html",
      icon: "calendar_month"
    },
    drawerCta: {
      label: "Book an Appointment",
      href: "contact.html"
    }
  };

  // Check if link matches current page path
  function isLinkActive(linkHref) {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // Target link parts
    const parts = linkHref.split("#");
    const targetPath = parts[0];

    if (currentPath === targetPath) return true;
    if (currentPath === "" && targetPath === "index.html") return true;

    return false;
  }

  // Render desktop navigation links
  function renderDesktopNav() {
    const containers = document.querySelectorAll('[data-component="nav-menu"], .nav-menu');
    containers.forEach(function (container) {
      const html = NAV_CONFIG.links.map(function (item) {
        const active = isLinkActive(item.href) ? " active" : "";
        return '<a href="' + item.href + '" class="nav-link' + active + '">' + item.label + '</a>';
      }).join("\n        ");

      container.innerHTML = "\n        " + html + "\n      ";
      container.setAttribute("aria-label", "Primary navigation");
    });
  }

  // Render mobile drawer navigation
  function renderMobileDrawer() {
    const drawers = document.querySelectorAll('[data-component="mobile-drawer"], .mobile-drawer');
    drawers.forEach(function (drawer) {
      const linksHtml = NAV_CONFIG.links.map(function (item) {
        const active = isLinkActive(item.href) ? " active" : "";
        return '<a href="' + item.href + '" class="mobile-nav-link' + active + '">' + item.label + '</a>';
      }).join("\n    ");

      drawer.innerHTML = [
        '<!-- Brand Header -->',
        '<div style="display: flex; align-items: center; gap: 0.875rem; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--color-border);">',
        '  <img src="' + NAV_CONFIG.brand.logo + '" alt="' + NAV_CONFIG.brand.name + ' Logo" style="width: 42px; height: 42px; border-radius: 50%;" />',
        '  <div>',
        '    <div style="font-family: var(--font-serif); font-size: 1.375rem; font-weight: 700; color: var(--color-primary); line-height: 1;">' + NAV_CONFIG.brand.name + '</div>',
        '    <div style="font-size: 0.625rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-text-muted); margin-top: 2px;">' + NAV_CONFIG.brand.tagline + '</div>',
        '  </div>',
        '</div>',
        linksHtml,
        '<div style="margin-top: auto; padding-top: 1.5rem;">',
        '  <a href="' + NAV_CONFIG.drawerCta.href + '" class="btn-terracotta" style="width: 100%;">',
        '    <span>' + NAV_CONFIG.drawerCta.label + '</span>',
        '  </a>',
        '</div>'
      ].join("\n    ");

      drawer.setAttribute("aria-label", "Mobile navigation");

      // Bind close action to newly generated mobile links
      drawer.querySelectorAll(".mobile-nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
          const mobileToggle = document.getElementById("mobile-toggle");
          const drawerScrim = document.getElementById("mobile-drawer-scrim");
          if (mobileToggle) {
            mobileToggle.classList.remove("active");
            mobileToggle.setAttribute("aria-expanded", "false");
          }
          drawer.classList.remove("open");
          drawer.setAttribute("aria-hidden", "true");
          if (drawerScrim) drawerScrim.classList.remove("open");
          document.body.style.overflow = "";
          document.documentElement.style.overflow = "";
        });
      });
    });
  }

  // Render footer links
  function renderFooterNav() {
    const containers = document.querySelectorAll('[data-component="footer-nav"]');
    containers.forEach(function (container) {
      const listItems = NAV_CONFIG.links.map(function (item) {
        return '<li><a href="' + item.href + '" class="footer-link">' + item.label + '</a></li>';
      }).join("\n            ");

      container.innerHTML = [
        '<div class="footer-col-title">Navigation</div>',
        '<ul class="footer-links">',
        '  ' + listItems,
        '</ul>'
      ].join("\n          ");
    });
  }

  // Render all navigation mount points
  function renderAllNavigation() {
    renderDesktopNav();
    renderMobileDrawer();
    renderFooterNav();
  }

  // Initialize on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderAllNavigation);
  } else {
    renderAllNavigation();
  }

  // Update on hash changes
  window.addEventListener("hashchange", renderAllNavigation);

  // Expose on window for testing or inspection
  window.EddieNav = {
    config: NAV_CONFIG,
    render: renderAllNavigation
  };
})();
