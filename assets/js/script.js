/**
 * ==============================================================================
 * SOUTH INDIAN WEDDING LANDING PAGE JAVASCRIPT — ASLESHA & VIVEK
 * ==============================================================================
 * Comprehensive interactive script for Aslesha & Vivek's traditional South Indian
 * wedding celebration web page.
 *
 * Core Features & Modules:
 *  1. Live Countdown Timer (Days, Hours, Minutes, Live Seconds to Muhurtham)
 *  2. Scroll-Triggered Reveal Animations (IntersectionObserver)
 *  3. Dynamic Sticky Header & Scrollspy Navigation Link Highlighting
 *  4. Mobile Navigation Drawer Overlay (Open, Close, Link Auto-Dismiss)
 *  5. Photo Gallery Category Filtering & Full-Screen Lightbox Modal
 *  6. RSVP Form Submission, LocalStorage Persistence & Festive Confetti Cannon
 *  7. Guest Blessings & Wishes Wall, Monogram Generator, Modal & Petal Shower
 *  8. Web Audio API Synthesized Festive Shehnai/Carnatic Ambient Melody
 *  9. Social Sharing Links (WhatsApp, Email, Copy Link) & Toast Notifications
 * 10. Venue Address One-Click Clipboard Copy with Feedback State
 * 11. Hero HTML5 Canvas Interactive Falling Rose & Marigold Petals Physics
 * 12. Save-the-Date Calendar Integration (Google Calendar URL & Apple/Outlook .ics)
 * 13. Hero Card Subtle 3D Perspective Tilt on Desktop Cursor Hover
 * 14. Floating Back to Top Arrow Button (Dynamically Revealed After 2 Sections)
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    /* ==========================================================================
       1. LIVE COUNTDOWN TIMER TO SACRED SUBHA MUHURTHAM
       ========================================================================== */
    /**
     * Auspicious Wedding Muhurtham Date: Sunday, November 22, 2026, 08:45:00 AM IST
     */
    const weddingDate = new Date("November 22, 2026 08:45:00").getTime();

    /**
     * Calculates the remaining time until the Muhurtham ceremony and updates
     * the Days, Hours, Minutes, and Seconds DOM elements with padded zero strings.
     */
    function updateCountdown() {
        const now = new Date().getTime();
        const difference = weddingDate - now;

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (difference > 0) {
            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Update DOM with 2 or 3 digit padding
            if (daysEl) daysEl.innerText = String(days).padStart(3, '0');
            if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
            if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, '0');
            if (secondsEl) secondsEl.innerText = String(seconds).padStart(2, '0');
        } else {
            // Auspicious ceremony has arrived
            if (daysEl) daysEl.innerText = '000';
            if (hoursEl) hoursEl.innerText = '00';
            if (minutesEl) minutesEl.innerText = '00';
            if (secondsEl) secondsEl.innerText = '00';
        }
    }

    // Initial call to set values immediately upon load, then tick every 1000ms
    updateCountdown();
    setInterval(updateCountdown, 1000);

    /* ==========================================================================
       2. SCROLL REVEAL (INTERSECTION OBSERVER)
       ========================================================================== */
    /**
     * Observes elements with the `.reveal` class and triggers entrance
     * animations once they intersect 15% of the viewport.
     */
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Unobserve to retain state & save CPU cycles
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* ==========================================================================
       3. HEADER STICKY STATE & SCROLLSPY NAVIGATION LINK HIGHLIGHTING
       ========================================================================== */
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    /**
     * Handles sticky header background transition and updates the active navigation
     * link based on the user's current scroll position.
     */
    const handleHeaderScroll = () => {
        // Toggle sticky blur background after 50px of vertical scroll
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Determine currently active section
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // 120px offset for top navbar height
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        // Highlight corresponding navigation link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    };

    // Attach passive scroll listener for smooth, jank-free 60fps scrolling
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll(); // Run immediately on load to set initial active nav state

    /* ==========================================================================
       4. MOBILE NAVIGATION DRAWER OVERLAY
       ========================================================================== */
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Open mobile navigation drawer
    if (menuToggle && mobileOverlay) {
        menuToggle.addEventListener('click', () => {
            mobileOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    }

    // Close mobile navigation drawer via close button
    if (closeMenu && mobileOverlay) {
        closeMenu.addEventListener('click', () => {
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close mobile navigation drawer on backdrop click
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', (e) => {
            if (e.target === mobileOverlay) {
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Close mobile navigation drawer on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileOverlay && mobileOverlay.classList.contains('active')) {
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Automatically close overlay whenever any navigation link is tapped
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileOverlay) {
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    /* ==========================================================================
       5. PHOTO GALLERY CATEGORY FILTERING & FULL-SCREEN LIGHTBOX
       ========================================================================== */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    let visibleGalleryItems = Array.from(galleryItems);
    let currentIndex = 0;

    /**
     * Category filter button click handler:
     * Toggles the active filter button and filters gallery images by data-category.
     */
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            visibleGalleryItems = [];
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    visibleGalleryItems.push(item);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    /**
     * Opens the full-screen lightbox modal displaying the selected image
     * and its corresponding caption from the active category set.
     * @param {number} index - Index in the currently visible items list.
     */
    function openLightbox(index) {
        currentIndex = index;
        const item = visibleGalleryItems[currentIndex];
        if (!item) return;

        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-overlay span');

        lightboxImg.src = img.src;
        lightboxCaption.innerText = caption ? caption.innerText : img.alt;
        lightbox.classList.add('active');
    }

    // Attach click events to gallery thumbnails
    galleryItems.forEach((item) => {
        item.addEventListener('click', () => {
            const index = visibleGalleryItems.indexOf(item);
            if (index !== -1) openLightbox(index);
        });
    });

    // Close lightbox modal
    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }

    // Previous image navigation (cyclic)
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + visibleGalleryItems.length) % visibleGalleryItems.length;
            openLightbox(currentIndex);
        });
    }

    // Next image navigation (cyclic)
    if (lightboxNext) {
        lightboxNext.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % visibleGalleryItems.length;
            openLightbox(currentIndex);
        });
    }

    // Keyboard accessibility shortcuts for lightbox (Escape to close, Left/Right arrows to navigate)
    document.addEventListener('keydown', (e) => {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') lightbox.classList.remove('active');
        if (e.key === 'ArrowLeft' && lightboxPrev) lightboxPrev.click();
        if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
    });

    /* ==========================================================================
       6. RSVP FORM SUBMISSION, LOCAL STORAGE & FESTIVE CONFETTI CANNON
       ========================================================================== */
    const rsvpForm = document.getElementById('wedding-rsvp-form');
    const rsvpThankYou = document.getElementById('rsvp-thankyou');
    const rsvpSummary = document.getElementById('submitted-details-summary');

    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Extract form values
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('emailAddress').value.trim();
            const attendance = rsvpForm.querySelector('input[name="attendance"]:checked').value;
            const guestCount = document.getElementById('guestCount').value;
            const dietary = document.getElementById('dietary').value;

            // Render confirmation summary inside thank you box
            if (rsvpSummary) {
                rsvpSummary.innerHTML = `
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Status:</strong> ${attendance === 'Yes' ? 'Attending with joy! 🎉' : 'Regretfully unable to attend'}</p>
                    <p><strong>Guests:</strong> ${guestCount}</p>
                    <p><strong>Dietary Choice:</strong> ${dietary}</p>
                `;
            }

            // Hide the form and reveal the festive thank you card
            rsvpForm.style.display = 'none';
            rsvpThankYou.classList.add('active');

            // Persist RSVP data safely in browser localStorage
            try {
                const savedRSVPs = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
                savedRSVPs.push({
                    fullName,
                    email,
                    attendance,
                    guestCount,
                    dietary,
                    date: new Date().toISOString()
                });
                localStorage.setItem('wedding_rsvps', JSON.stringify(savedRSVPs));
            } catch (err) {
                console.warn("Unable to save RSVP to localStorage:", err);
            }

            // Launch festive wedding celebration confetti
            triggerConfetti();
        });
    }

    /**
     * Spawns an animated HTML5 Canvas burst of traditional maroon and gold confetti
     * pieces fluttering across the screen upon successful RSVP submission.
     */
    function triggerConfetti() {
        const confettiCanvas = document.createElement('canvas');
        confettiCanvas.style.position = 'fixed';
        confettiCanvas.style.top = '0';
        confettiCanvas.style.left = '0';
        confettiCanvas.style.width = '100vw';
        confettiCanvas.style.height = '100vh';
        confettiCanvas.style.pointerEvents = 'none';
        confettiCanvas.style.zIndex = '500';
        document.body.appendChild(confettiCanvas);

        const ctx = confettiCanvas.getContext('2d');
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;

        const pieces = [];
        // Wedding palette: Maroon, Gold, Emerald, Rose, and Bright Gold
        const colors = ['#7A1C1C', '#D4AF37', '#0F4C3A', '#E89A9A', '#FFD700'];

        for (let i = 0; i < 100; i++) {
            pieces.push({
                x: Math.random() * confettiCanvas.width,
                y: Math.random() * confettiCanvas.height - confettiCanvas.height,
                size: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                speedY: Math.random() * 4 + 2,
                speedX: Math.random() * 2 - 1,
                rotation: Math.random() * 360,
                rotationSpeed: Math.random() * 10 - 5
            });
        }

        let animationFrame;
        let opacity = 1;

        function renderConfetti() {
            ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
            ctx.globalAlpha = opacity;

            pieces.forEach(p => {
                p.y += p.speedY;
                p.x += p.speedX;
                p.rotation += p.rotationSpeed;

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                ctx.restore();
            });

            // Gradually fade out confetti
            opacity -= 0.008;

            if (opacity > 0) {
                animationFrame = requestAnimationFrame(renderConfetti);
            } else {
                cancelAnimationFrame(animationFrame);
                confettiCanvas.remove();
            }
        }

        renderConfetti();
    }

    /* ==========================================================================
       7. BLESSINGS & WISHES WALL, MODAL POPUP & INTERACTIVE ASHIRWAD
       ========================================================================== */
    const wishForm = document.getElementById('wish-form');
    const wishesContainer = document.getElementById('wishes-container');
    const wishesCountText = document.getElementById('wishes-count-text');
    const openBlessingModalBtn = document.getElementById('open-blessing-modal-btn');
    const closeBlessingModalBtn = document.getElementById('close-blessing-modal-btn');
    const blessingModalBackdrop = document.getElementById('blessing-modal-backdrop');
    const blessingModal = document.getElementById('blessing-modal');
    const blessingChips = document.querySelectorAll('.blessing-chip');

    /**
     * Default authentic South Indian blessings pre-populating the wall.
     */
    const defaultBlessings = [
        {
            id: "default_1",
            author: "Sundaram (Grandfather)",
            badge: "Elder's Ashirwad",
            text: "Deepest blessings of Lord Venkateswara for a long, joyous, and virtuous married life. May peace, harmony, and abundance grace your home always. Shubh Vivah!",
            time: "2 days ago",
            likes: 48
        },
        {
            id: "default_2",
            author: "Karthik & Revathi (Uncle & Aunt)",
            badge: "Family Blessing",
            text: "May your sacred bond be blessed with eternal love, radiant health, and boundless prosperity. We are so overjoyed to welcome Vivek warmly into our family!",
            time: "1 day ago",
            likes: 39
        },
        {
            id: "default_3",
            author: "Ananya Ramesh (Bride's Best Friend)",
            badge: "Friend's Love",
            text: "From our school days daydreaming about fairy tales to this gorgeous traditional wedding! Vivek is truly the luckiest man. Can't wait to dance and celebrate at the Sangeet!",
            time: "Yesterday",
            likes: 34
        },
        {
            id: "default_4",
            author: "Dr. Lakshmi Narayanan (Family Elder)",
            badge: "Elder's Ashirwad",
            text: "Dharmo Rakshati Rakshitah. May your sacred saptapadi steps lead you both towards mutual respect, wisdom, and eternal togetherness. Ayushman Bhava!",
            time: "3 days ago",
            likes: 42
        },
        {
            id: "default_5",
            author: "Rajesh & Vikram (Groom's College Gang)",
            badge: "Friend's Love",
            text: "Vivek, brother, you found your absolute perfect half! Aslesha, welcome to the madness of our group. Wishing you both lifetime adventures, laughter, and endless happiness!",
            time: "4 days ago",
            likes: 27
        },
        {
            id: "default_6",
            author: "Deepa & Siddharth (Cousins)",
            badge: "Family Blessing",
            text: "Heartiest congratulations Aslesha & Vivek! May your journey together be as sweet as hot payasam and filled with golden moments. Cheers to a wonderful new chapter!",
            time: "5 days ago",
            likes: 31
        },
        {
            id: "default_7",
            author: "Arvind Swaminathan (Vivek's Colleague)",
            badge: "Well-wisher",
            text: "Wishing you both a wonderful journey ahead as partners in life. May every day bring new joy, companionship, and dreams fulfilled. Warmest congratulations!",
            time: "5 days ago",
            likes: 19
        }
    ];

    /**
     * Extracts clean author initials to render inside the circular monogram avatar.
     * @param {string} name - Full author name string.
     * @returns {string} 1-2 character initials.
     */
    function getInitials(name) {
        if (!name) return "❤️";
        const cleanName = name.split('(')[0].trim();
        const parts = cleanName.split(' ').filter(p => p.length > 0 && p !== '&');
        if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
        if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
        return "✨";
    }

    /**
     * Maps blessing category string to a themed FontAwesome icon and label.
     * @param {string} badge - Category name.
     * @returns {string} HTML string with icon and text.
     */
    function getBadgeIcon(badge) {
        switch (badge) {
            case "Family Blessing":
                return '<i class="fa-solid fa-house-chimney-window"></i> Family';
            case "Friend's Love":
                return '<i class="fa-solid fa-heart"></i> Friend';
            case "Elder's Ashirwad":
                return '<i class="fa-solid fa-hands-praying"></i> Elder Ashirwad';
            case "Well-wisher":
                return '<i class="fa-solid fa-star"></i> Well-wisher';
            default:
                return '<i class="fa-solid fa-heart"></i> Blessing';
        }
    }

    /**
     * Opens the Blessing Submission Modal popup and focuses the author field.
     */
    function openBlessingModal() {
        if (!blessingModal) return;
        blessingModal.classList.add('active');
        blessingModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        const authorInput = document.getElementById('wishAuthor');
        if (authorInput) setTimeout(() => authorInput.focus(), 250);
    }

    /**
     * Closes the Blessing Submission Modal popup and restores scrolling.
     */
    function closeBlessingModal() {
        if (!blessingModal) return;
        blessingModal.classList.remove('active');
        blessingModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (openBlessingModalBtn) {
        openBlessingModalBtn.addEventListener('click', openBlessingModal);
    }

    if (closeBlessingModalBtn) {
        closeBlessingModalBtn.addEventListener('click', closeBlessingModal);
    }

    if (blessingModalBackdrop) {
        blessingModalBackdrop.addEventListener('click', closeBlessingModal);
    }

    // Close modal on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && blessingModal && blessingModal.classList.contains('active')) {
            closeBlessingModal();
        }
    });

    /**
     * Pre-fills message textarea when clicking any of the inspiration chips.
     */
    blessingChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const textToInsert = chip.getAttribute('data-text');
            const textInput = document.getElementById('wishText');
            if (textInput && textToInsert) {
                textInput.value = textToInsert;
                textInput.focus();
            }
        });
    });

    /**
     * Renders celebratory falling flower petals (marigold, saffron, gold)
     * across the screen upon posting a new blessing to the wall.
     */
    function showerBlessingPetals() {
        const petalCanvas = document.createElement('canvas');
        petalCanvas.id = 'blessing-petals-canvas';
        petalCanvas.style.position = 'fixed';
        petalCanvas.style.top = '0';
        petalCanvas.style.left = '0';
        petalCanvas.style.width = '100vw';
        petalCanvas.style.height = '100vh';
        petalCanvas.style.pointerEvents = 'none';
        petalCanvas.style.zIndex = '10000';
        document.body.appendChild(petalCanvas);

        const ctx = petalCanvas.getContext('2d');
        petalCanvas.width = window.innerWidth;
        petalCanvas.height = window.innerHeight;

        const petals = [];
        const petalColors = ['#D4AF37', '#FFD700', '#FF8C00', '#7A1C1C', '#E89A9A', '#FFF8DC', '#0F4C3A'];

        for (let i = 0; i < 90; i++) {
            petals.push({
                x: Math.random() * petalCanvas.width,
                y: Math.random() * petalCanvas.height * 0.4 - petalCanvas.height * 0.4,
                size: Math.random() * 9 + 5,
                color: petalColors[Math.floor(Math.random() * petalColors.length)],
                speedY: Math.random() * 3 + 2,
                speedX: Math.random() * 2 - 1,
                rotation: Math.random() * 360,
                rotationSpeed: Math.random() * 6 - 3
            });
        }

        let opacity = 1;
        let animId;

        function animatePetals() {
            ctx.clearRect(0, 0, petalCanvas.width, petalCanvas.height);
            ctx.globalAlpha = opacity;

            petals.forEach(p => {
                p.y += p.speedY;
                p.x += Math.sin(p.y * 0.02) * 1.5 + p.speedX;
                p.rotation += p.rotationSpeed;

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.fillStyle = p.color;

                ctx.beginPath();
                ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });

            opacity -= 0.007;

            if (opacity > 0) {
                animId = requestAnimationFrame(animatePetals);
            } else {
                cancelAnimationFrame(animId);
                petalCanvas.remove();
            }
        }

        animatePetals();
    }

    /**
     * Renders all blessings to the wall grid, combining user-submitted
     * blessings from localStorage with default curated family blessings.
     * @param {string|null} highlightId - Optional ID of newly created wish to highlight.
     */
    function loadWishes(highlightId = null) {
        if (!wishesContainer) return;
        wishesContainer.innerHTML = '';

        let localWishes = [];
        let likedWishes = {};
        try {
            localWishes = JSON.parse(localStorage.getItem('wedding_wishes') || '[]');
            likedWishes = JSON.parse(localStorage.getItem('wedding_wishes_liked') || '{}');
        } catch (err) {
            console.warn("Unable to read wishes from localStorage:", err);
        }

        const allWishes = [...localWishes, ...defaultBlessings];

        // Update total counter pill
        if (wishesCountText) {
            wishesCountText.textContent = `${allWishes.length} Heartfelt Blessings Received`;
        }

        allWishes.forEach(wish => {
            const isLiked = !!likedWishes[wish.id];
            const displayLikes = (wish.likes || 0) + (isLiked ? 1 : 0);
            const initials = getInitials(wish.author);
            const badgeLabel = wish.badge || "Family Blessing";

            const card = document.createElement('div');
            card.className = 'wish-card';
            card.setAttribute('data-id', wish.id);
            if (highlightId && wish.id === highlightId) {
                card.classList.add('just-added');
            }

            card.innerHTML = `
                <div class="wish-card-header">
                    <div class="wish-avatar" aria-hidden="true">${initials}</div>
                    <div class="wish-meta">
                        <div class="wish-author">${wish.author}</div>
                        <span class="wish-badge">${getBadgeIcon(badgeLabel)}</span>
                    </div>
                </div>
                <p class="wish-text">"${wish.text}"</p>
                <div class="wish-card-footer">
                    <span class="wish-time"><i class="fa-regular fa-clock"></i> ${wish.time}</span>
                    <button type="button" class="wish-like-btn ${isLiked ? 'liked' : ''}" data-id="${wish.id}" aria-label="Bless and like this wish">
                        <i class="fa-solid fa-heart"></i>
                        <span class="like-num">${displayLikes}</span>
                    </button>
                </div>
            `;

            // Like / Ashirwad Button click handler
            const likeBtn = card.querySelector('.wish-like-btn');
            if (likeBtn) {
                likeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const wid = wish.id;
                    let currentlyLiked = {};
                    try {
                        currentlyLiked = JSON.parse(localStorage.getItem('wedding_wishes_liked') || '{}');
                    } catch (err) {
                        currentlyLiked = {};
                    }

                    const numSpan = likeBtn.querySelector('.like-num');
                    let currentNum = parseInt(numSpan.textContent, 10) || 0;

                    if (currentlyLiked[wid]) {
                        delete currentlyLiked[wid];
                        likeBtn.classList.remove('liked');
                        numSpan.textContent = Math.max(0, currentNum - 1);
                    } else {
                        currentlyLiked[wid] = true;
                        likeBtn.classList.add('liked');
                        numSpan.textContent = currentNum + 1;
                        showToast("Love & Ashirwad showered! ❤️");
                    }
                    localStorage.setItem('wedding_wishes_liked', JSON.stringify(currentlyLiked));
                });
            }

            wishesContainer.appendChild(card);
        });
    }

    // Initial render of the blessings wall
    loadWishes();

    /**
     * Handles submission of the new blessing modal form.
     */
    if (wishForm) {
        wishForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const authorInput = document.getElementById('wishAuthor');
            const textInput = document.getElementById('wishText');
            const selectedBadgeEl = document.querySelector('input[name="blessingBadge"]:checked');

            if (!authorInput || !textInput || !authorInput.value.trim() || !textInput.value.trim()) return;

            const selectedBadge = selectedBadgeEl ? selectedBadgeEl.value : "Family Blessing";
            const newWishId = "user_wish_" + Date.now();

            const newWish = {
                id: newWishId,
                author: authorInput.value.trim(),
                badge: selectedBadge,
                text: textInput.value.trim(),
                time: "Just now",
                likes: 1
            };

            // Prepend new wish to stored list
            try {
                const localWishes = JSON.parse(localStorage.getItem('wedding_wishes') || '[]');
                localWishes.unshift(newWish);
                localStorage.setItem('wedding_wishes', JSON.stringify(localWishes));

                // Mark this newly submitted wish as liked by the author
                const likedWishes = JSON.parse(localStorage.getItem('wedding_wishes_liked') || '{}');
                likedWishes[newWishId] = true;
                localStorage.setItem('wedding_wishes_liked', JSON.stringify(likedWishes));
            } catch (err) {
                console.warn("Unable to persist wish to localStorage:", err);
            }

            // Reset form fields
            wishForm.reset();

            // Close modal smoothly
            closeBlessingModal();

            // Re-render wall and highlight newly added blessing card
            loadWishes(newWishId);

            // Celebration petal shower and feedback toast
            showerBlessingPetals();
            showToast("Your sacred blessing has been posted to the wall! 🌸❤️");

            // Scroll gently to the blessings section
            const wallSection = document.getElementById('wishes');
            if (wallSection) {
                wallSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    /* ==========================================================================
       8. WEB AUDIO API SYNTHESIZED TRADITIONAL CARNATIC / SHEHNAI AMBIENT MELODY
       ========================================================================== */
    const audioBtn = document.getElementById('audio-toggle');
    let audioCtx = null;
    let isPlaying = false;
    let timerId = null;

    /**
     * Traditional Carnatic / Shehnai raga pentatonic scale notes (frequencies in Hz):
     * C4, D4, E4, G4, A4, C5 (Mohanam / Bhupali scale)
     */
    const melodyNotes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];

    /**
     * Synthesizes warm, meditative Carnatic notes using the native Web Audio API
     * without requiring heavy external audio file assets or network requests.
     */
    function startSynthesizedMelody() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AudioContext();
        }

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        isPlaying = true;
        audioBtn.classList.add('playing');
        showToast("Playing ambient festive wedding melody 🎶");

        let step = 0;
        function playNote() {
            if (!isPlaying) return;

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            // Warm sine/triangle wave blend reminiscent of flute / shehnai tone
            osc.type = 'triangle';
            const noteFreq = melodyNotes[step % melodyNotes.length];
            osc.frequency.setValueAtTime(noteFreq, audioCtx.currentTime);

            // Smooth envelope attack, sustain and decay to prevent audio clicks
            gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.1);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.9);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start();
            osc.stop(audioCtx.currentTime + 1.0);

            step = (step + 1) % melodyNotes.length;
            timerId = setTimeout(playNote, 800);
        }

        playNote();
    }

    /**
     * Pauses the synthesized ambient melody and resets UI audio button state.
     */
    function stopSynthesizedMelody() {
        isPlaying = false;
        if (timerId) clearTimeout(timerId);
        if (audioBtn) audioBtn.classList.remove('playing');
        showToast("Audio paused");
    }

    if (audioBtn) {
        audioBtn.addEventListener('click', () => {
            if (isPlaying) {
                stopSynthesizedMelody();
            } else {
                startSynthesizedMelody();
            }
        });
    }

    /* ==========================================================================
       9. SOCIAL SHARING LINKS & TOAST NOTIFICATION UTILITY
       ========================================================================== */
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');

    /**
     * Displays a temporary toast notification message at the bottom of the screen.
     * @param {string} message - Message text to display.
     */
    function showToast(message) {
        if (!toast || !toastMsg) return;
        toastMsg.innerText = message;
        toast.classList.add('active');
        setTimeout(() => {
            toast.classList.remove('active');
        }, 3000);
    }

    const shareWhatsapp = document.getElementById('share-whatsapp');
    const shareCopy = document.getElementById('share-copy');
    const shareEmail = document.getElementById('share-email');

    // WhatsApp Share Link
    if (shareWhatsapp) {
        shareWhatsapp.addEventListener('click', () => {
            const text = encodeURIComponent("You are cordially invited to Aslesha & Vivek's South Indian Wedding! View details & RSVP: " + window.location.href);
            window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
        });
    }

    // Copy Website URL to Clipboard
    if (shareCopy) {
        shareCopy.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showToast("Wedding website link copied to clipboard!");
            });
        });
    }

    // Share via Email
    if (shareEmail) {
        shareEmail.addEventListener('click', () => {
            const subject = encodeURIComponent("Wedding Invitation: Aslesha & Vivek");
            const body = encodeURIComponent("We invite you to join our South Indian Wedding Celebration!\n\nDetails & RSVP: " + window.location.href);
            window.location.href = `mailto:?subject=${subject}&body=${body}`;
        });
    }

    /* ==========================================================================
       10. VENUE ADDRESS ONE-CLICK CLIPBOARD COPY WITH FEEDBACK
       ========================================================================== */
    const copyVenueBtn = document.getElementById('copy-venue-address');
    if (copyVenueBtn) {
        copyVenueBtn.addEventListener('click', () => {
            const venueAddress = "The Leela Palace Chennai, Adyar Seaface, M.R.C. Nagar, Raja Annamalaipuram, Chennai, Tamil Nadu 600028, India";
            navigator.clipboard.writeText(venueAddress).then(() => {
                const copyText = copyVenueBtn.querySelector('.copy-text');
                const copyIcon = copyVenueBtn.querySelector('i');
                if (copyText) copyText.textContent = "Copied!";
                if (copyIcon) copyIcon.className = "fa-solid fa-check";
                copyVenueBtn.classList.add('copied');
                showToast("Venue address copied to clipboard!");
                setTimeout(() => {
                    if (copyText) copyText.textContent = "Copy";
                    if (copyIcon) copyIcon.className = "fa-regular fa-copy";
                    copyVenueBtn.classList.remove('copied');
                }, 2500);
            }).catch(() => {
                showToast("The Leela Palace Chennai, MRC Nagar, Chennai 600028");
            });
        });
    }

    /* ==========================================================================
       11. HERO FALLING FLOWER PETALS & GOLD SPARKLES CANVAS
       ========================================================================== */
    const petalsCanvas = document.getElementById('hero-petals-canvas');
    if (petalsCanvas && petalsCanvas.parentElement) {
        const ctx = petalsCanvas.getContext('2d');
        let width = (petalsCanvas.width = petalsCanvas.parentElement.offsetWidth);
        let height = (petalsCanvas.height = petalsCanvas.parentElement.offsetHeight);

        /**
         * Dynamically adjusts canvas internal buffer resolution to match parent bounds.
         */
        const handleResize = () => {
            if (!petalsCanvas || !petalsCanvas.parentElement) return;
            width = petalsCanvas.width = petalsCanvas.parentElement.offsetWidth;
            height = petalsCanvas.height = petalsCanvas.parentElement.offsetHeight;
        };

        window.addEventListener('resize', handleResize);

        // Petal & Sparkle particles array
        const particles = [];
        const particleCount = window.innerWidth < 768 ? 18 : 34;

        // Traditional South Indian floral palette (Marigold, Saffron, Rose, Gold bokeh)
        const colors = [
            'rgba(255, 179, 0, ',    // Marigold golden yellow
            'rgba(245, 127, 23, ',   // Warm saffron orange
            'rgba(229, 115, 115, ',  // Soft Rose petal
            'rgba(184, 134, 11, ',   // Royal gold dust
            'rgba(255, 215, 0, '     // Sparkling gold bokeh
        ];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height - height,
                size: Math.random() * 8 + 6,
                speedY: Math.random() * 1.1 + 0.5,
                speedX: Math.random() * 0.6 - 0.3,
                rotation: Math.random() * 360,
                rotationSpeed: Math.random() * 1.8 - 0.9,
                opacity: Math.random() * 0.55 + 0.35,
                colorBase: colors[Math.floor(Math.random() * colors.length)],
                type: Math.random() > 0.38 ? 'petal' : 'sparkle'
            });
        }

        // Pause animation when hero section scrolls out of view to save battery & CPU
        let isHeroVisible = true;
        const heroSection = document.getElementById('hero');
        if ('IntersectionObserver' in window && heroSection) {
            const heroObserver = new IntersectionObserver((entries) => {
                isHeroVisible = entries[0].isIntersecting;
            }, { threshold: 0.05 });
            heroObserver.observe(heroSection);
        }

        let angle = 0;

        /**
         * Animation loop: Simulates gentle breeze drifting flower petals and golden bokeh.
         */
        function animatePetals() {
            if (isHeroVisible && ctx) {
                ctx.clearRect(0, 0, width, height);
                angle += 0.012;

                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i];
                    p.y += p.speedY;
                    p.x += Math.sin(angle + i) * 0.65 + p.speedX; // Harmonic wind drift
                    p.rotation += p.rotationSpeed;

                    // Wrap boundaries when particle reaches bottom or side edges
                    if (p.y > height + 20) {
                        p.y = -20;
                        p.x = Math.random() * width;
                    }
                    if (p.x > width + 20) p.x = -10;
                    if (p.x < -20) p.x = width + 10;

                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.rotate((p.rotation * Math.PI) / 180);

                    if (p.type === 'petal') {
                        // Render soft organic flower petal ellipse
                        ctx.beginPath();
                        ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
                        ctx.fillStyle = p.colorBase + p.opacity + ')';
                        ctx.shadowColor = 'rgba(212, 175, 55, 0.25)';
                        ctx.shadowBlur = 4;
                        ctx.fill();
                    } else {
                        // Render glowing golden sparkle circular bokeh
                        ctx.beginPath();
                        ctx.arc(0, 0, p.size * 0.32, 0, Math.PI * 2);
                        ctx.fillStyle = p.colorBase + (p.opacity * 0.85) + ')';
                        ctx.shadowColor = 'rgba(255, 215, 0, 0.6)';
                        ctx.shadowBlur = 6;
                        ctx.fill();
                    }

                    ctx.restore();
                }
            }
            requestAnimationFrame(animatePetals);
        }

        animatePetals();
    }

    /* ==========================================================================
       12. SAVE THE DATE (GOOGLE CALENDAR URL & APPLE/OUTLOOK .ICS EXPORT)
       ========================================================================== */
    const calendarToggle = document.getElementById('calendar-dropdown-toggle');
    const calendarGroup = document.getElementById('calendar-btn-group');
    const calGoogle = document.getElementById('cal-google');
    const calIcs = document.getElementById('cal-ics');

    // Toggle hero section calendar dropdown
    if (calendarToggle && calendarGroup) {
        calendarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = calendarGroup.classList.toggle('active');
            calendarToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close dropdown when clicking anywhere outside
        document.addEventListener('click', (e) => {
            if (!calendarGroup.contains(e.target)) {
                calendarGroup.classList.remove('active');
                calendarToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Configure Google Calendar deep link
    if (calGoogle) {
        const title = encodeURIComponent("Aslesha & Vivek's Wedding (Kalyana Mahotsavam)");
        const details = encodeURIComponent("You are cordially invited to celebrate the sacred Muhurtham and traditional South Indian Wedding Ceremony of Aslesha and Vivek.\n\nSubha Muhurtham: 8:45 AM – 10:15 AM (IST)\nVenue: The Grand Ballroom, The Leela Palace, Chennai.");
        const location = encodeURIComponent("The Leela Palace Chennai, Adyar Seaface, MRC Nagar, Chennai, Tamil Nadu 600028");
        // Sunday Nov 22, 2026: 08:30 IST to 14:00 IST -> UTC is 03:00 to 08:30
        const dates = "20261122T030000Z/20261122T083000Z";
        calGoogle.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    }

    // Dynamic Apple / Outlook iCalendar (.ics) RFC-5545 format export
    if (calIcs) {
        calIcs.addEventListener('click', (e) => {
            e.preventDefault();
            const icsData = [
                'BEGIN:VCALENDAR',
                'VERSION:2.0',
                'PRODID:-//Aslesha & Vivek Wedding//EN',
                'CALSCALE:GREGORIAN',
                'METHOD:PUBLISH',
                'BEGIN:VEVENT',
                'UID:aslesha-vivek-wedding-20261122@wedding.local',
                'DTSTAMP:20261122T000000Z',
                'DTSTART:20261122T031500Z',
                'DTEND:20261122T083000Z',
                'SUMMARY:Aslesha & Vivek Wedding (Kalyana Mahotsavam)',
                'DESCRIPTION:Join us for the traditional South Indian wedding ceremony and Muhurtham of Aslesha & Vivek at The Leela Palace, Chennai.',
                'LOCATION:The Leela Palace Chennai, MRC Nagar, Chennai, Tamil Nadu',
                'STATUS:CONFIRMED',
                'END:VEVENT',
                'END:VCALENDAR'
            ].join('\r\n');

            const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.setAttribute('download', 'Aslesha_and_Vivek_Wedding.ics');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            if (calendarGroup) calendarGroup.classList.remove('active');
            showToast("Wedding event added! (.ics downloaded) 📅");
        });
    }

    // Countdown Section Calendar Reminder Dropdown & Actions
    const countdownCalToggle = document.getElementById('countdown-cal-toggle');
    const countdownCalDropdown = document.getElementById('countdown-cal-dropdown');
    const countdownCalGoogle = document.getElementById('countdown-cal-google');
    const countdownCalIcs = document.getElementById('countdown-cal-ics');

    if (countdownCalToggle && countdownCalDropdown) {
        countdownCalToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = countdownCalDropdown.classList.toggle('active');
            countdownCalToggle.setAttribute('aria-expanded', String(isOpen));
        });

        document.addEventListener('click', (e) => {
            if (!countdownCalDropdown.contains(e.target)) {
                countdownCalDropdown.classList.remove('active');
                countdownCalToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    if (countdownCalGoogle && calGoogle) {
        countdownCalGoogle.href = calGoogle.href;
    }

    if (countdownCalIcs) {
        countdownCalIcs.addEventListener('click', (e) => {
            e.preventDefault();
            if (calIcs) {
                calIcs.click();
            }
            if (countdownCalDropdown) countdownCalDropdown.classList.remove('active');
        });
    }

    /* ==========================================================================
       13. HERO CARD SUBTLE 3D PERSPECTIVE TILT ON DESKTOP
       ========================================================================== */
    const heroCard = document.getElementById('hero-card');
    if (heroCard && window.matchMedia('(min-width: 992px)').matches) {
        heroCard.addEventListener('mousemove', (e) => {
            const rect = heroCard.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            // Subtle 2.5 degree max tilt angle for refined elegance
            const tiltX = (y / (rect.height / 2)) * -2.5;
            const tiltY = (x / (rect.width / 2)) * 2.5;
            heroCard.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });

        heroCard.addEventListener('mouseleave', () => {
            heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    }

    /* ==========================================================================
       14. FLOATING BACK TO TOP ARROW (VISIBLE AFTER 2 SECTIONS)
       ========================================================================== */
    const backToTopBtn = document.getElementById('back-to-top');

    const updateBackToTopVisibility = () => {
        if (!backToTopBtn) return;

        // "after 2 sections": user has scrolled past Section 1 (Hero) and Section 2 (Countdown)
        const mainSections = document.querySelectorAll('main > section');
        let threshold = 600;

        if (mainSections.length >= 3) {
            // Threshold is the start of Section 3 (Story) with a slight offset
            threshold = mainSections[2].offsetTop - 120;
        } else if (mainSections.length >= 2) {
            threshold = mainSections[1].offsetTop + mainSections[1].offsetHeight - 120;
        }

        if (window.scrollY >= threshold) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    };

    if (backToTopBtn) {
        // Smooth scroll back to top of the page
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Attach listeners for scroll and window resize
        window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
        window.addEventListener('resize', updateBackToTopVisibility, { passive: true });

        // Initial check on load
        updateBackToTopVisibility();
    }

});
