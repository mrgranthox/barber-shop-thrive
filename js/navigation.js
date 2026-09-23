// navigation setup — handles desktop nav, mobile drawer, and footer links

(function () {
  'use strict';

  // nav config
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

  // check if link matches current page
  function isLinkActive(linkHref) {
    let currentPath = window.location.pathname.replace(/\/$/, "").split("/").pop() || "index.html";
    if (currentPath === "") currentPath = "index.html";
    if (!currentPath.endsWith(".html")) {
      currentPath = currentPath + ".html";
    }

    if (currentPath === "recent-work.html") currentPath = "portfolio.html";
    if (currentPath === "contact-us.html") currentPath = "contact.html";
    if (currentPath === "home.html") currentPath = "index.html";

    const parts = linkHref.split("#");
    let targetPath = (parts[0].replace(/\/$/, "").split("/").pop()) || "index.html";
    if (!targetPath.endsWith(".html")) {
      targetPath = targetPath + ".html";
    }

    return currentPath === targetPath;
  }

  // render desktop nav
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

  // render mobile menu
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

  // render footer nav
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

  // render everything
  function renderAllNavigation() {
    renderDesktopNav();
    renderMobileDrawer();
    renderFooterNav();
  }

  // run on load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderAllNavigation);
  } else {
    renderAllNavigation();
  }

  // update on hash change
  window.addEventListener("hashchange", renderAllNavigation);

  // expose for testing
  window.EddieNav = {
    config: NAV_CONFIG,
    render: renderAllNavigation
  };
})();
