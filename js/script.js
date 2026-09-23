// main script for the site
// handles nav, slider, filters, form

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // sticky header effect
  const header = document.getElementById('site-header');

  function handleHeaderScroll() {
    const scrollY = window.scrollY;
    if (header) {
      if (scrollY > 35) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // mobile menu toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerScrim = document.getElementById('mobile-drawer-scrim');

  function openMobileMenu() {
    if (mobileToggle) {
      mobileToggle.classList.add('active');
      mobileToggle.setAttribute('aria-expanded', 'true');
    }
    if (mobileDrawer) {
      mobileDrawer.classList.add('open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
    }
    if (drawerScrim) {
      drawerScrim.classList.add('open');
    }
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileToggle) {
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
    }
    if (drawerScrim) {
      drawerScrim.classList.remove('open');
    }
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      const isOpen = mobileDrawer && mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (drawerScrim) {
    drawerScrim.addEventListener('click', closeMobileMenu);
  }

  // Close on link click
  document.querySelectorAll('.mobile-nav-link').forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // Close mobile drawer automatically if window is resized above tablet breakpoint
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024 && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // before-after slider logic
  const sliderContainer = document.getElementById('before-after-container');
  const beforeImageClip = document.getElementById('before-image-clip');
  const beforeImage = document.querySelector('.slider-img-before');
  const sliderHandle = document.getElementById('slider-handle');

  if (sliderContainer && beforeImageClip && sliderHandle) {
    let isSliding = false;

    // match before image width to container
    function syncSliderWidth() {
      if (!sliderContainer || !beforeImage) return;
      const containerWidth = sliderContainer.offsetWidth;
      beforeImage.style.width = containerWidth + 'px';
    }

    syncSliderWidth();
    window.addEventListener('resize', syncSliderWidth);
    window.addEventListener('orientationchange', syncSliderWidth);

    function setSliderPosition(clientX) {
      const rect = sliderContainer.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      if (offsetX < 0) offsetX = 0;
      if (offsetX > rect.width) offsetX = rect.width;
      const percentage = (offsetX / rect.width) * 100;

      beforeImageClip.style.width = percentage + '%';
      sliderHandle.style.left = percentage + '%';
    }

    // Mouse events
    sliderContainer.addEventListener('mousedown', function (e) {
      isSliding = true;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mousemove', function (e) {
      if (!isSliding) return;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mouseup', function () {
      isSliding = false;
    });

    // Touch events for mobile
    sliderContainer.addEventListener('touchstart', function (e) {
      isSliding = true;
      if (e.touches && e.touches[0]) {
        setSliderPosition(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('touchmove', function (e) {
      if (!isSliding) return;
      if (e.touches && e.touches[0]) {
        setSliderPosition(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('touchend', function () {
      isSliding = false;
    });
  }

  // portfolio category filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const workCards = document.querySelectorAll('.work-card');

  if (filterButtons.length > 0 && workCards.length > 0) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetCategory = btn.getAttribute('data-filter');

        // Update active button state
        filterButtons.forEach(function (b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');

        // Filter cards smoothly
        workCards.forEach(function (card) {
          const cardCat = card.getAttribute('data-category') || '';
          if (targetCategory === 'all' || cardCat.includes(targetCategory)) {
            card.style.display = 'flex';
            setTimeout(function () {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(8px)';
            setTimeout(function () {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // form validation
  const contactForm = document.getElementById('contact-form');
  const demoAlert = document.getElementById('demo-alert');

  if (contactForm) {
    const nameInput = document.getElementById('client-name');
    const emailInput = document.getElementById('client-email');
    const messageInput = document.getElementById('client-message');

    function isValidEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(String(email).trim());
    }

    function setError(inputElement, msg) {
      inputElement.classList.add('is-invalid');
      const errSpan = document.getElementById(inputElement.id + '-error');
      if (errSpan) {
        errSpan.textContent = msg;
        errSpan.classList.add('visible');
      }
    }

    function clearError(inputElement) {
      inputElement.classList.remove('is-invalid');
      const errSpan = document.getElementById(inputElement.id + '-error');
      if (errSpan) {
        errSpan.textContent = '';
        errSpan.classList.remove('visible');
      }
    }

    [nameInput, emailInput, messageInput].forEach(function (input) {
      if (input) {
        input.addEventListener('input', function () {
          clearError(input);
        });
      }
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let hasErrors = false;

      // Name Validation
      if (!nameInput.value.trim()) {
        setError(nameInput, 'Full name is required.');
        hasErrors = true;
      } else if (nameInput.value.trim().length < 2) {
        setError(nameInput, 'Name must be at least 2 characters.');
        hasErrors = true;
      } else {
        clearError(nameInput);
      }

      // Email Validation
      if (!emailInput.value.trim()) {
        setError(emailInput, 'Email address is required.');
        hasErrors = true;
      } else if (!isValidEmail(emailInput.value)) {
        setError(emailInput, 'Please enter a valid email address (e.g., kofi@domain.com).');
        hasErrors = true;
      } else {
        clearError(emailInput);
      }

      // Message Validation
      if (!messageInput.value.trim()) {
        setError(messageInput, 'Please include your request or preferred time notes.');
        hasErrors = true;
      } else if (messageInput.value.trim().length < 5) {
        setError(messageInput, 'Message must be at least 5 characters long.');
        hasErrors = true;
      } else {
        clearError(messageInput);
      }

      if (hasErrors) {
        const firstInvalid = contactForm.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Show Demo Alert Confirmation
      if (demoAlert) {
        const patronName = nameInput.value.trim();
        const alertTitle = demoAlert.querySelector('.demo-alert-title');
        if (alertTitle) {
          alertTitle.textContent = 'Demo Confirmation: Akwaaba, ' + patronName + '!';
        }
        demoAlert.classList.add('visible');
        demoAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      contactForm.reset();
    });
  }

  // back to top button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
