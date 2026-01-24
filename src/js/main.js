// Import Bootstrap JS (for ScrollSpy/Collapse)
import 'bootstrap';

// Import Isotope and ImagesLoaded
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MASONRY LAYOUT (Isotope) ---
    const grid = document.querySelector('.grid');

    if (grid) {
        // Initialize Isotope
        let iso;

        // Wait for images to load before laying out
        imagesLoaded(grid, function () {
            iso = new Isotope(grid, {
                itemSelector: '.grid-item',
                layoutMode: 'masonry',
                percentPosition: true
            });
            // Trigger layout again just to be safe
            iso.layout();
        });

        // Filter functions
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Handle active class
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filter
                const filterValue = button.dataset.filter;
                iso.arrange({ filter: filterValue });
            });
        });
    }

    // --- 2. SMOOTH SCROLLING (Navbar) ---
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .btn-primary, .btn-outline-secondary');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only scroll if it's an anchor link
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
                        bsCollapse.toggle();
                    }

                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // --- 3. NAVBAR GLASS EFFECT ON SCROLL ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Initialize AOS
    AOS.init();

    // Back to Top Logic
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('d-none');
                // Small delay to allow d-none removal to take effect before opacity transition
                setTimeout(() => backToTopBtn.style.opacity = '1', 10);
            } else {
                backToTopBtn.style.opacity = '0';
                // Wait for transition to finish before hiding
                setTimeout(() => backToTopBtn.classList.add('d-none'), 300);
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Toggle Details Function
window.toggleDetails = function (button) {
    const details = button.querySelector('.experience-details');
    const icon = button.querySelector('.bi-chevron-down');

    if (details.classList.contains('d-none')) {
        details.classList.remove('d-none');
        icon.style.transform = 'rotate(180deg)';
    } else {
        details.classList.add('d-none');
        icon.style.transform = 'rotate(0deg)';
    }
};
