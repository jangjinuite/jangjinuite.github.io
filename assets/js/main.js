document.addEventListener('DOMContentLoaded', () => {
  // --- Dark Mode ---
  const themeToggle = document.getElementById('themeToggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // Check local storage or system preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  // --- Sidebar Toggle (Mobile) ---
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.querySelector('.sidebar');

  // Create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);

  if (sidebarToggle && sidebar) {
    // Toggle sidebar when button is clicked
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
    });

    // Close sidebar when overlay is clicked
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    });
  }

  // --- Scroll Indicator ---
  const scrollIndicator = document.createElement('div');
  scrollIndicator.className = 'scroll-indicator';
  scrollIndicator.innerHTML = 'Recent Post';
  document.body.appendChild(scrollIndicator);

  const recentPostsSection = document.querySelector('.recent-posts-section');

  // Click handler to scroll to Recent Posts
  scrollIndicator.addEventListener('click', () => {
    if (recentPostsSection) {
      const headerHeight = 70;
      const targetPosition = recentPostsSection.getBoundingClientRect().top + window.scrollY - headerHeight - 10;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });

  if (recentPostsSection) {
    const checkScrollIndicator = () => {
      const sectionTitle = recentPostsSection.querySelector('.section-title');
      if (sectionTitle) {
        const rect = sectionTitle.getBoundingClientRect();
        const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isFullyVisible) {
          scrollIndicator.classList.add('hidden');
        } else {
          scrollIndicator.classList.remove('hidden');
        }
      }
    };

    // Check on scroll
    window.addEventListener('scroll', checkScrollIndicator, { passive: true });

    // Initial check
    checkScrollIndicator();
  }
});
