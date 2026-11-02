/* ==========================================================================
   SOUTH INDIAN WEDDING LANDING PAGE JAVASCRIPT — ASLESHA & VIVEK
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------------------------
    // 1. COUNTDOWN TIMER
    // ----------------------------------------------------------------------
    const weddingDate = new Date("November 22, 2026 08:45:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = weddingDate - now;

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            if (daysEl) daysEl.innerText = String(days).padStart(3, '0');
            if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
            if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, '0');
            if (secondsEl) secondsEl.innerText = String(seconds).padStart(2, '0');
        } else {
            if (daysEl) daysEl.innerText = '000';
            if (hoursEl) hoursEl.innerText = '00';
            if (minutesEl) minutesEl.innerText = '00';
            if (secondsEl) secondsEl.innerText = '00';
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ----------------------------------------------------------------------
    // 2. SCROLL REVEAL (INTERSECTION OBSERVER)
    // ----------------------------------------------------------------------
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ----------------------------------------------------------------------
    // 3. HEADER STICKY & NAVBAR NAV HIGHLIGHTING
    // ----------------------------------------------------------------------
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleHeaderScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    // Run on page load
    handleHeaderScroll();

    // ----------------------------------------------------------------------
    // 4. MOBILE MENU OVERLAY
    // ----------------------------------------------------------------------
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuToggle && mobileOverlay) {
        menuToggle.addEventListener('click', () => {
            mobileOverlay.classList.add('active');
        });
    }

    if (closeMenu && mobileOverlay) {
        closeMenu.addEventListener('click', () => {
            mobileOverlay.classList.remove('active');
        });
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileOverlay.classList.remove('active');
        });
    });

    // ----------------------------------------------------------------------
    // 5. PHOTO GALLERY FILTERING & LIGHTBOX
    // ----------------------------------------------------------------------
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

    // Filter Buttons
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

    // Open Lightbox
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

    galleryItems.forEach((item) => {
        item.addEventListener('click', () => {
            const index = visibleGalleryItems.indexOf(item);
            if (index !== -1) openLightbox(index);
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + visibleGalleryItems.length) % visibleGalleryItems.length;
            openLightbox(currentIndex);
        });
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % visibleGalleryItems.length;
            openLightbox(currentIndex);
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') lightbox.classList.remove('active');
        if (e.key === 'ArrowLeft' && lightboxPrev) lightboxPrev.click();
        if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
    });

    // ----------------------------------------------------------------------
    // 6. RSVP FORM SUBMISSION & CONFETTI BURST
    // ----------------------------------------------------------------------
    const rsvpForm = document.getElementById('wedding-rsvp-form');
    const rsvpThankYou = document.getElementById('rsvp-thankyou');
    const rsvpSummary = document.getElementById('submitted-details-summary');

    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('emailAddress').value;
            const attendance = rsvpForm.querySelector('input[name="attendance"]:checked').value;
            const guestCount = document.getElementById('guestCount').value;
            const dietary = document.getElementById('dietary').value;

            // Form Summary Output
            if (rsvpSummary) {
                rsvpSummary.innerHTML = `
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Status:</strong> ${attendance === 'Yes' ? 'Attending with joy! 🎉' : 'Regretfully unable to attend'}</p>
                    <p><strong>Guests:</strong> ${guestCount}</p>
                    <p><strong>Dietary Choice:</strong> ${dietary}</p>
                `;
            }

            // Hide form and show thank you card
            rsvpForm.style.display = 'none';
            rsvpThankYou.classList.add('active');

            // Save RSVP to LocalStorage
            const savedRSVPs = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
            savedRSVPs.push({ fullName, email, attendance, guestCount, dietary, date: new Date().toISOString() });
            localStorage.setItem('wedding_rsvps', JSON.stringify(savedRSVPs));

            // Launch Festive Confetti
            triggerConfetti();
        });
    }

    // Festive Confetti Generator
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

    // ----------------------------------------------------------------------
    // 7. BLESSINGS & WISHES WALL
    // ----------------------------------------------------------------------
    const wishForm = document.getElementById('wish-form');
    const wishesContainer = document.getElementById('wishes-container');

    const defaultBlessings = [
        { author: "Karthik & Family (Uncle)", text: "May your traditional bond be blessed with eternal love, prosperity, and happiness!", time: "Recently" },
        { author: "Ananya Ramesh (Friend)", text: "Can't wait to dance at the Sangeet and relish the banana leaf Sadhya! Congratulations Aslesha & Vivek!", time: "1 day ago" },
        { author: "Sundaram (Grandfather)", text: "Deepest blessings of Lord Venkateswara for a long, joyous married life.", time: "2 days ago" }
    ];

    function loadWishes() {
        if (!wishesContainer) return;
        wishesContainer.innerHTML = '';

        const localWishes = JSON.parse(localStorage.getItem('wedding_wishes') || '[]');
        const allWishes = [...localWishes, ...defaultBlessings];

        allWishes.forEach(wish => {
            const wishCard = document.createElement('div');
            wishCard.className = 'wish-item';
            wishCard.innerHTML = `
                <p class="wish-text">"${wish.text}"</p>
                <div class="wish-author">${wish.author}</div>
                <div class="wish-time">${wish.time}</div>
            `;
            wishesContainer.appendChild(wishCard);
        });
    }

    loadWishes();

    if (wishForm) {
        wishForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const authorInput = document.getElementById('wishAuthor');
            const textInput = document.getElementById('wishText');

            if (!authorInput.value || !textInput.value) return;

            const newWish = {
                author: authorInput.value,
                text: textInput.value,
                time: "Just now"
            };

            const localWishes = JSON.parse(localStorage.getItem('wedding_wishes') || '[]');
            localWishes.unshift(newWish);
            localStorage.setItem('wedding_wishes', JSON.stringify(localWishes));

            authorInput.value = '';
            textInput.value = '';

            loadWishes();
            showToast("Your blessing has been posted on the wall! ❤️");
        });
    }

    // ----------------------------------------------------------------------
    // 8. WEB AUDIO API SYNTHESIZED TRADITIONAL AMBIENT MELODY
    // ----------------------------------------------------------------------
    const audioBtn = document.getElementById('audio-toggle');
    let audioCtx = null;
    let isPlaying = false;
    let timerId = null;

    // Traditional Carnatic / Shehnai style scale notes (frequencies in Hz)
    const melodyNotes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25]; // C, D, E, G, A, C5

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

            // Warm sine/triangle wave blend
            osc.type = 'triangle';
            const noteFreq = melodyNotes[step % melodyNotes.length];
            osc.frequency.setValueAtTime(noteFreq, audioCtx.currentTime);

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

    // ----------------------------------------------------------------------
    // 9. SOCIAL SHARING & TOAST NOTIFICATION
    // ----------------------------------------------------------------------
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');

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

    if (shareWhatsapp) {
        shareWhatsapp.addEventListener('click', () => {
            const text = encodeURIComponent("You are cordially invited to Aslesha & Vivek's South Indian Wedding! View details & RSVP: " + window.location.href);
            window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
        });
    }

    if (shareCopy) {
        shareCopy.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showToast("Wedding website link copied to clipboard!");
            });
        });
    }

    if (shareEmail) {
        shareEmail.addEventListener('click', () => {
            const subject = encodeURIComponent("Wedding Invitation: Aslesha & Vivek");
            const body = encodeURIComponent("We invite you to join our South Indian Wedding Celebration!\n\nDetails & RSVP: " + window.location.href);
            window.location.href = `mailto:?subject=${subject}&body=${body}`;
        });
    }

    // ----------------------------------------------------------------------
    // 10. HERO FALLING FLOWER PETALS & GOLD SPARKLES CANVAS
    // ----------------------------------------------------------------------
    const petalsCanvas = document.getElementById('hero-petals-canvas');
    if (petalsCanvas && petalsCanvas.parentElement) {
        const ctx = petalsCanvas.getContext('2d');
        let width = (petalsCanvas.width = petalsCanvas.parentElement.offsetWidth);
        let height = (petalsCanvas.height = petalsCanvas.parentElement.offsetHeight);

        const handleResize = () => {
            if (!petalsCanvas || !petalsCanvas.parentElement) return;
            width = petalsCanvas.width = petalsCanvas.parentElement.offsetWidth;
            height = petalsCanvas.height = petalsCanvas.parentElement.offsetHeight;
        };

        window.addEventListener('resize', handleResize);

        // Petal & Sparkle particles
        const particles = [];
        const particleCount = window.innerWidth < 768 ? 18 : 34;

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

        let isHeroVisible = true;
        const heroSection = document.getElementById('hero');
        if ('IntersectionObserver' in window && heroSection) {
            const heroObserver = new IntersectionObserver((entries) => {
                isHeroVisible = entries[0].isIntersecting;
            }, { threshold: 0.05 });
            heroObserver.observe(heroSection);
        }

        let angle = 0;

        function animatePetals() {
            if (isHeroVisible && ctx) {
                ctx.clearRect(0, 0, width, height);
                angle += 0.012;

                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i];
                    p.y += p.speedY;
                    p.x += Math.sin(angle + i) * 0.65 + p.speedX;
                    p.rotation += p.rotationSpeed;

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
                        ctx.beginPath();
                        ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
                        ctx.fillStyle = p.colorBase + p.opacity + ')';
                        ctx.shadowColor = 'rgba(212, 175, 55, 0.25)';
                        ctx.shadowBlur = 4;
                        ctx.fill();
                    } else {
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

    // ----------------------------------------------------------------------
    // 11. SAVE THE DATE (GOOGLE CALENDAR & .ICS EXPORT)
    // ----------------------------------------------------------------------
    const calendarToggle = document.getElementById('calendar-dropdown-toggle');
    const calendarGroup = document.getElementById('calendar-btn-group');
    const calGoogle = document.getElementById('cal-google');
    const calIcs = document.getElementById('cal-ics');

    if (calendarToggle && calendarGroup) {
        calendarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = calendarGroup.classList.toggle('active');
            calendarToggle.setAttribute('aria-expanded', String(isOpen));
        });

        document.addEventListener('click', (e) => {
            if (!calendarGroup.contains(e.target)) {
                calendarGroup.classList.remove('active');
                calendarToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Google Calendar URL
    if (calGoogle) {
        const title = encodeURIComponent("Aslesha & Vivek's Wedding (Kalyana Mahotsavam)");
        const details = encodeURIComponent("You are cordially invited to celebrate the sacred Muhurtham and traditional South Indian Wedding Ceremony of Aslesha and Vivek.\n\nSubha Muhurtham: 8:45 AM – 10:15 AM (IST)\nVenue: The Grand Ballroom, The Leela Palace, Chennai.");
        const location = encodeURIComponent("The Leela Palace Chennai, Adyar Seaface, MRC Nagar, Chennai, Tamil Nadu 600028");
        // Sunday Nov 22, 2026, 08:30 IST to 14:00 IST -> UTC is 03:00 to 08:30
        const dates = "20261122T030000Z/20261122T083000Z";
        calGoogle.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    }

    // iCal (.ics) Download
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

    // ----------------------------------------------------------------------
    // 12. HERO CARD SUBTLE 3D TILT ON DESKTOP
    // ----------------------------------------------------------------------
    const heroCard = document.getElementById('hero-card');
    if (heroCard && window.matchMedia('(min-width: 992px)').matches) {
        heroCard.addEventListener('mousemove', (e) => {
            const rect = heroCard.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const tiltX = (y / (rect.height / 2)) * -2.5;
            const tiltY = (x / (rect.width / 2)) * 2.5;
            heroCard.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });

        heroCard.addEventListener('mouseleave', () => {
            heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    }

});
