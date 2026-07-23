/* ==========================================================================
   SCALES - DIGITAL ECOSYSTEM INTERACTIVE SCRIPT (FULL COMPLETE VERSION)
   Features: Preloader, Mouse Glow, Navbar Scroll, Smooth Scroll, 
             Filter Pengajar, & Card Ripple Effect
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------------------
       1. Preloader Progress Animation
       ---------------------------------------------------------------------- */
    const preloader = document.querySelector('.preloader');
    const loaderProgress = document.querySelector('.loader-progress');
    const loaderText = document.querySelector('.loader-text');

    if (preloader) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 15) + 5;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                
                if (loaderText) loaderText.textContent = "Sistem Siap!";
                
                setTimeout(() => {
                    preloader.classList.add('hidden');
                }, 400);
            }
            if (loaderProgress) loaderProgress.style.width = `${progress}%`;
        }, 100);
    }

    /* ----------------------------------------------------------------------
       2. Mouse Tracking Glow Effect
       ---------------------------------------------------------------------- */
    const mouseGlow = document.querySelector('.mouse-glow');
    
    if (mouseGlow && window.innerWidth > 768) {
        window.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            mouseGlow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
    }

    /* ----------------------------------------------------------------------
       3. Navbar Scroll Behavior & Mobile Toggle
       ---------------------------------------------------------------------- */
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Sticky / Glass Navbar on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });

        // Close menu when link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }

    /* ----------------------------------------------------------------------
       4. Filter Pengajar (Filterable Teacher Cards)
       ---------------------------------------------------------------------- */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const pengajarCards = document.querySelectorAll('.pengajar-card');

    if (filterButtons.length > 0 && pengajarCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update button active state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                // Filter cards with smooth fade
                pengajarCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    
                    if (filterValue === 'all' || filterValue === category) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.9)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    /* ----------------------------------------------------------------------
       5. Smooth Scroll for Internal Anchors (#)
       ---------------------------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ----------------------------------------------------------------------
       6. Clickable Card Subtle Interaction Effect
       ---------------------------------------------------------------------- */
    const clickableCards = document.querySelectorAll('.clickable-card');
    
    clickableCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

});