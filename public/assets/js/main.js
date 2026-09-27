/**
 * TecnoGen - Main Javascript Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const toggleBtn = document.getElementById('tg-mobile-toggle');
  const mobileMenu = document.getElementById('tg-mobile-menu');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      toggleBtn.innerHTML = isOpen ? '✕' : '☰';
    });
  }

  // 2. Tabs Selector
  const tabButtons = document.querySelectorAll('.tg-tab-btn');
  const tabContents = document.querySelectorAll('.tg-tab-content');

  if (tabButtons.length > 0) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  }

  // 3. Navbar scroll effect
  const header = document.querySelector('.tg-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }
});
