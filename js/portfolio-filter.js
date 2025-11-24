// Portfolio Filter Functionality
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const emptyState = document.getElementById('emptyState');

  // Filter function
  const filterPortfolio = (category) => {
    let visibleCount = 0;

    portfolioItems.forEach((item, index) => {
      const itemCategory = item.getAttribute('data-category');
      
      if (category === 'all' || itemCategory === category) {
        // Show item with staggered animation
        setTimeout(() => {
          item.classList.remove('hidden');
          item.style.animation = 'fadeInUp 0.5s ease forwards';
        }, index * 50);
        visibleCount++;
      } else {
        // Hide item
        item.classList.add('hidden');
      }
    });

    // Show/hide empty state
    if (visibleCount === 0) {
      emptyState.style.display = 'block';
    } else {
      emptyState.style.display = 'none';
    }
  };

  // Add click event to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get filter category
      const category = button.getAttribute('data-filter');
      
      // Filter portfolio
      filterPortfolio(category);
      
      // Update URL without reload (optional)
      if (history.pushState) {
        const newUrl = category === 'all' 
          ? window.location.pathname 
          : `${window.location.pathname}?filter=${category}`;
        history.pushState({ filter: category }, '', newUrl);
      }
    });
  });

  // Check URL for filter parameter on page load
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');
  
  if (filterParam) {
    const targetButton = document.querySelector(`[data-filter="${filterParam}"]`);
    if (targetButton) {
      targetButton.click();
    }
  }

  // Handle browser back/forward buttons
  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.filter) {
      const targetButton = document.querySelector(`[data-filter="${event.state.filter}"]`);
      if (targetButton) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        targetButton.classList.add('active');
        filterPortfolio(event.state.filter);
      }
    } else {
      // No filter, show all
      const allButton = document.querySelector('[data-filter="all"]');
      if (allButton) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        allButton.classList.add('active');
        filterPortfolio('all');
      }
    }
  });

  // Add animation keyframes dynamically
  if (!document.querySelector('#portfolioAnimations')) {
    const style = document.createElement('style');
    style.id = 'portfolioAnimations';
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
  }
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px'
  });

  // Observe all images with data-src attribute
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
