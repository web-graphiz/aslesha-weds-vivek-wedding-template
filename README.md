# 🪔 Aslesha & Vivek — South Indian Wedding Celebration Template

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Web Audio API](https://img.shields.io/badge/Web%20Audio%20API-Synthesizer-orange?style=flat&logo=audacity&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero%20(No%20Node%2Fnpm)-brightgreen?style=flat)](https://github.com)
[![Mobile Responsive](https://img.shields.io/badge/Mobile-100%25%20Responsive-blueviolet?style=flat&logo=responsive&logoColor=white)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.txt)

A luxury, culturally authentic, and **100% mobile-responsive** South Indian Wedding Celebration (*Kalyana Mahotsavam*) single-page website template. Inspired by the regal heritage of Kanjeevaram silks, traditional temple architecture, intricate Kolam motifs, sacred Vedic rituals, and classical Carnatic music.

Crafted completely in **pure semantic HTML5, modern CSS3 (Custom Properties & Grid/Flexbox), and vanilla ES6+ JavaScript** without requiring any node packages, external runtime frameworks, build tools, or server-side infrastructure.

---

## 📖 Table of Contents

- [🌺 Project Overview & Cultural Aesthetic](#-project-overview--cultural-aesthetic)
- [⚡ Live Preview & Quick Start](#-live-preview--quick-start)
- [💻 Comprehensive Technology Stack](#-comprehensive-technology-stack)
- [📱 Mobile-First Architecture & Responsiveness](#-mobile-first-architecture--responsiveness)
  - [Breakpoint Hierarchy](#breakpoint-hierarchy)
  - [Mobile Component Breakdown](#mobile-component-breakdown)
  - [Safe Area Insets & Modern Viewport Controls](#safe-area-insets--modern-viewport-controls)
  - [Touch & Accessibility Standards](#touch--accessibility-standards)
- [📁 Project Structure](#-project-structure)
- [✨ Key Features & Technical Implementation](#-key-features--technical-implementation)
  - [1. Hero Section & Falling Petals Canvas](#1-hero-section--falling-petals-canvas)
  - [2. Subha Muhurtham Countdown & Vedic Panchang](#2-subha-muhurtham-countdown--vedic-panchang)
  - [3. Interactive Celebration Timeline & Calendars](#3-celebration-timeline--calendars)
  - [4. Photo Gallery with Fullscreen Lightbox](#4-photo-gallery--fullscreen-lightbox)
  - [5. Interactive RSVP System & Celebration Confetti](#5-interactive-rsvp-system--celebration-confetti)
  - [6. Community Blessings & Wishes Wall](#6-community-blessings--wishes-wall)
  - [7. Zero-Dependency Web Audio Shehnai Synthesizer](#7-zero-dependency-web-audio-shehnai-synthesizer)
  - [8. Venue, Directions & Clipboard Utilities](#8-venue-directions--clipboard-utilities)
  - [9. Social Sharing & Native Toast Notifications](#9-social-sharing--native-toast-notifications)
- [🛠 Customization Guide](#-customization-guide)
  - [1. Couple Names, Dates & Story](#1-couple-names-dates--story)
  - [2. Replacing Images & Media Assets](#2-replacing-images--media-assets)
  - [3. Customizing the Color Palette (CSS Variables)](#3-customizing-the-color-palette-css-variables)
  - [4. Connecting RSVP to a Real Backend](#4-connecting-rsvp-to-a-real-backend)
  - [5. Audio Customization (Synthesizer vs MP3)](#5-audio-customization-synthesizer-vs-mp3)
- [🎨 Design System & Typography](#-design-system--typography)
- [🌐 Browser Compatibility & Performance Audit](#-browser-compatibility--performance-audit)
- [🚀 Deployment Options](#-deployment-options)
- [📜 License & Credits](#-license--credits)

---

## 🌺 Project Overview & Cultural Aesthetic

This template was meticulously crafted to reflect the sacred elegance of a traditional South Indian wedding ceremony (*Kalyana Mahotsavam*):

* **Sacred Invocations & Kolams**: Custom inline SVG Kolam corner adornments that scale flawlessly without pixelation, auspicious Om (`ॐ`) and Lord Ganesha invocations (`॥ श्री गणेशाय नमः ॥`), sacred brass Diya lamps, and Akshatai motifs.
* **Auspicious Color Palette**:
  - Deep Temple Maroon (`#7A1C1C`) — Symbolic of Kanjeevaram silk and auspicious Kumkum.
  - Radiant Temple Gold (`#D4AF37` / `#FFD700`) — Symbolic of temple gopurams and sacred Mangalsutra gold.
  - Royal Emerald Green (`#0F4C3A`) — Symbolic of banana leaf Sadhya feasts and fresh mango leaf Toran garlands.
  - Saffron & Rose Petal Accents (`#F57F17` / `#D98880`) — Celebratory floral blossoms.
  - Ivory Silk Cream (`#FAF6EE` / `#FFFDF9`) — Raw handwoven silk cloth and sandalwood paste.
* **Classical Typography**: Classical serif titles inspired by historic temple inscriptions ([Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)), flowing romantic script accents ([Great Vibes](https://fonts.google.com/specimen/Great+Vibes)), and ultra-clean modern sans-serif UI typography ([Montserrat](https://fonts.google.com/specimen/Montserrat)).

---

## ⚡ Live Preview & Quick Start

Because this project uses vanilla web standards, it has **zero prerequisites**. You do not need Node.js, npm, webpack, or Vite.

### Option 1: Direct Browser Launch
Simply double-click `index.html` or drag it into any modern web browser (Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge, Brave, Samsung Internet).

### Option 2: Local HTTP Server (Recommended)
Running through a local web server ensures seamless loading of local SVG assets and browser storage APIs:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using PHP
php -S localhost:8000
```
Then navigate to `http://localhost:8000` in your browser.

### Option 3: VS Code Live Server
1. Open this directory in **VS Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and choose **"Open with Live Server"**.

---

## 💻 Comprehensive Technology Stack

| Layer | Technology | Version / Spec | Purpose & Implementation Details |
| :--- | :--- | :--- | :--- |
| **Markup & Semantics** | **HTML5** | Living Standard (W3C) | Semantic document architecture (`<header>`, `<main>`, `<section>`, `<nav>`, `<figure>`, `<footer>`). Accessible ARIA roles, microdata meta tags, OpenGraph sharing metadata, and responsive viewport configuration with `viewport-fit=cover`. |
| **Styling & Design System** | **CSS3** | Modern W3C Spec | Complete tokenized design system using **CSS Custom Properties** (`--maroon-primary`, `--gold-primary`, etc.). Layouts engineered with **CSS Grid** and **Flexbox**. Fluid typography using mathematical `clamp()` equations. Glassmorphic overlays with `-webkit-backdrop-filter`. Fluid safe-area insets (`env(safe-area-inset-top)`). Hardware-accelerated CSS animations (`@keyframes soundWave`, `shimmer`, `gemShimmer`). |
| **Scripting & Dynamics** | **JavaScript (ES6+)** | ECMAScript 2020+ | Pure vanilla JS without external runtime libraries. Modular architecture managing countdown time arithmetic, DOM filtering, event delegation, client-side storage, and custom event dispatching. |
| **Audio Synthesis** | **Web Audio API** | W3C Recommendation | Zero-audio-file musical synthesizer using `AudioContext`, `createOscillator()`, and `createGain()`. Synthesizes Carnatic **Raga Mohanam / Bhupali** scale frequencies (C4, D4, E4, G4, A4, C5) on triangle waveforms with exponential gain decay envelopes. |
| **Visual FX & Physics** | **HTML5 Canvas 2D API** | CanvasRenderingContext2D | Hardware-accelerated falling flower petals (marigold, rose petals, and gold bokeh sparkles) simulation with quadratic air drift physics. Separate confetti cannon simulation upon RSVP completion. Optimized with `IntersectionObserver` to pause drawing when out of viewport. |
| **Persistence Layer** | **Web Storage API** | `window.localStorage` | Zero-database client-side persistence for RSVP form submissions (`wedding_rsvps`) and community Ashirwad / Like counters (`wedding_blessing_likes`). |
| **Calendar Generation** | **RFC-5545 iCalendar** | In-Memory Blob | Dynamic client-side generation of Apple / Outlook `.ics` calendar invitation files via `URL.createObjectURL(new Blob(...))` with correct UTC timestamps and reminder alarms. |
| **System Integrations** | **Clipboard & Share APIs**| `navigator.clipboard` & Web Share | One-click venue address copying with instant fallback, alongside deep-linked WhatsApp and email sharing triggers. |
| **Typography & Icons** | **Google Fonts & FontAwesome** | CDN (Preconnected) | *Cormorant Garamond*, *Great Vibes*, *Montserrat*, and FontAwesome 6 Free SVG vector icon sets. |

---

## 📱 Mobile-First Architecture & Responsiveness

This template was engineered with a strict **mobile-first, adaptive viewport architecture**. Every section, card, modal, and button has been tested and styled to fit gracefully across all screen dimensions from 320px feature phones up to 4K ultra-wide monitors.

```
Device Hierarchy & Breakpoints:
┌─────────────────────────┬──────────────────────┬────────────────────────────────────────────────────────┐
│ Screen Size             │ Target Devices       │ Layout Strategy                                        │
├─────────────────────────┼──────────────────────┼────────────────────────────────────────────────────────┤
│ <= 360px                │ Galaxy Fold (Outer), │ 1-column layout, compact timer cards, tight padding,   │
│                         │ iPhone SE (1st gen)  │ stacked CTA buttons, hidden secondary badge text       │
├─────────────────────────┼──────────────────────┼────────────────────────────────────────────────────────┤
│ 361px – 480px           │ iPhone 12/13/14/15,  │ 2-column photo gallery, mobile drawer navigation,       │
│                         │ Galaxy S22/S23/S24   │ full-width cards, stacked venue logistics, 44px targets │
├─────────────────────────┼──────────────────────┼────────────────────────────────────────────────────────┤
│ 481px – 768px           │ Large phones, mini   │ Centered timeline cards, full-width actions,           │
│                         │ tablets, landscape   │ single-column story & wishes grid, tablet header       │
├─────────────────────────┼──────────────────────┼────────────────────────────────────────────────────────┤
│ 769px – 992px           │ iPads, Surface Go,   │ 2-column gallery, 2-column story, full-screen nav menu  │
│                         │ medium tablets       │ switches to hamburger drawer below 992px               │
├─────────────────────────┼──────────────────────┼────────────────────────────────────────────────────────┤
│ 993px – 1440px+         │ Laptops, Desktops,   │ Full desktop header, 3D card perspective tilt,         │
│                         │ 4K Displays          │ multi-column venue showcase, 3-column wishes wall      │
└─────────────────────────┴──────────────────────┴────────────────────────────────────────────────────────┘
```

### Mobile Component Breakdown

1. **Mobile Drawer Navigation (`.mobile-overlay`)**:
   - Slides smoothly over the screen with `backdrop-filter: blur(12px)`.
   - Supports `height: 100dvh` (Dynamic Viewport Height) so modern mobile browser address bars do not obscure links.
   - Includes `overflow-y: auto` to prevent cutting off links in mobile landscape orientation.
   - Closes automatically upon tapping any navigation link, clicking the close button, tapping the backdrop, or pressing the `Escape` key.
   - Locks background body scroll while open (`document.body.style.overflow = 'hidden'`).

2. **Hero Stage on Mobile (`.hero-section`)**:
   - Automatically shifts from fixed viewport height to `height: auto; min-height: 100dvh; overflow: visible;` on screens $\le 768\text{px}$.
   - Prevents the couple's portrait, wedding dates, or CTA buttons from being clipped on small screens.
   - Sacred Kolam SVG corners scale dynamically to $32 \times 32\text{ px}$.
   - CTA buttons format into a 2-column pairing with full-width calendar button below.

3. **Subha Muhurtham Countdown (`.countdown-section`)**:
   - Timer cards use `flex: 1 1 0` with zero min-width constraints, allowing the 4 units (Days, Hours, Minutes, Seconds) to fit cleanly without causing horizontal scrolling even on 320px screens.
   - At $\le 360\text{px}$, colon spacers automatically hide to maximize digit readability.

4. **Celebration Timeline (`.events-section`)**:
   - At $\le 768\text{px}$, the 3-column desktop card collapses into a unified centered card.
   - Date badge takes full card width, event icon centers cleanly, and the "Add to Calendar" button expands to a generous tap target.

5. **2-Column Photo Gallery (`.gallery-section`)**:
   - On screens $\le 480\text{px}$, the gallery switches to an authentic mobile 2-column Instagram-style grid (`height: 160px; border-radius: 10px; gap: 10px;`).
   - Tap opens the full-screen touch-friendly Lightbox modal.

6. **Fullscreen Lightbox (`.lightbox-modal`)**:
   - Navigation arrows reposition close to the screen edges ($8\text{px}$) with touch-friendly dimensions ($38 \times 38\text{ px}$).
   - Image uses `max-height: 60vh; object-fit: contain;` so portrait or landscape photos fit within small screens without overflowing.

7. **Venue & Interactive Map (`.location-section`)**:
   - Transit logistics (Airport, Railway, Valet) switch from 3 columns to clean vertical cards with aligned icons.
   - Google Maps iframe is constrained to $250\text{px}$ height on mobile with touch drag capability.
   - "Copy Address" button expands to $100\%$ width for single-thumb accessibility.

8. **RSVP & Blessings Wall Modals**:
   - Forms use responsive vertical stacking (`flex-direction: column; gap: 16px;`).
   - Modal dialogs use `max-height: 94vh; overflow-y: auto; padding: 22px 14px;` with accessible close buttons.

### Safe Area Insets & Modern Viewport Controls

To support modern borderless smartphones (such as iPhones with notches / Dynamic Island and Android devices with gesture navigation pills), the template incorporates CSS Safe Area Inset variables:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#7A1C1C">
```

```css
@supports (padding-top: env(safe-area-inset-top)) {
    .site-header {
        padding-top: max(10px, env(safe-area-inset-top));
        padding-left: max(12px, env(safe-area-inset-left));
        padding-right: max(12px, env(safe-area-inset-right));
    }
    .mobile-overlay {
        padding-top: max(50px, env(safe-area-inset-top) + 20px);
        padding-bottom: max(30px, env(safe-area-inset-bottom) + 15px);
    }
    .site-footer {
        padding-bottom: max(30px, env(safe-area-inset-bottom) + 20px);
    }
    .back-to-top {
        bottom: max(20px, env(safe-area-inset-bottom) + 10px);
        right: max(20px, env(safe-area-inset-right) + 10px);
    }
    .toast-notification {
        bottom: max(74px, env(safe-area-inset-bottom) + 60px);
    }
}
```

### Touch & Accessibility Standards
- **Minimum Tap Target**: All primary interactive elements (buttons, inputs, share icons, navigation links) adhere to WCAG standards ($\ge 44 \times 44\text{ px}$ clickable area).
- **No Unwanted Horizontal Scroll**: Both `html` and `body` enforce `overflow-x: hidden; width: 100%;` to prevent accidental side-scrolling gestures.
- **Keyboard Navigation**: Complete keyboard support across all modals (Lightbox and Blessing modal respond to `Escape`, and Lightbox supports `ArrowLeft` / `ArrowRight`).

---

## 📁 Project Structure

```text
"Aslesha and Vivek"/
├── index.html                   # Main single-page application entry point
├── README.md                    # Detailed documentation and tech stack guide
├── LICENSE.txt                  # Open source MIT license
│
└── assets/                      # Static resources and styling assets
    ├── css/
    │   └── styles.css           # Design tokens, responsive grid, animations & layout
    │
    ├── js/
    │   └── script.js            # Countdown, Audio Synthesizer, RSVP, Gallery & Canvas physics
    │
    └── images/                  # High-resolution optimized wedding media assets
        ├── favicon.svg          # Traditional gold monogram favicon (A & V)
        ├── hero-bg.jpg          # Wedding Mandapam stage backdrop photo
        ├── hero-couple.jpg      # Couple portrait (Aslesha & Vivek)
        ├── story-first-meet.jpg # "When Paths Crossed" story photo
        ├── story-proposal.jpg   # "A Sacred Beginning" proposal story photo
        ├── gallery-garlands.jpg # Maalai Matruthal / Garlands ritual photo
        ├── gallery-lamp.jpg     # Auspicious Kuthuvillakku brass lamp photo
        └── gallery-sadhya.jpg   # Traditional banana leaf Sadhya feast photo
```

---

## ✨ Key Features & Technical Implementation

### 1. Hero Section & Falling Petals Canvas
- **Sacred Invocations**: Displays the traditional auspicious mantra *॥ श्री गणेशाय नमः ॥* and *Kalyana Mahotsavam* banner.
- **Ornate Kolam Borders**: Pure SVG vectors embedded on the corners of the hero card that scale crisply across 4K displays and mobile screens.
- **Falling Petal Shower**: An HTML5 Canvas (`#hero-petals-canvas`) animates two particle types—organic floral marigold/rose petals and glowing golden bokeh sparkles. The canvas automatically throttles when out of viewport using `IntersectionObserver` to preserve battery life and CPU resources.
- **3D Card Hover Tilt**: Subtle 3D perspective rotation on desktop cursor movement creates depth without causing layout shifts.

### 2. Subha Muhurtham Countdown & Vedic Panchang
- **Precision Countdown**: Computes remaining Days, Hours, Minutes, and Seconds with zero-padded formatting.
- **Vedic Astrological Highlights**: Includes auspicious Nakshatra (*Rohini*), Lagnam (*Dhanus*), and sacred Muhurtham duration (*8:45 AM – 10:15 AM*).
- **Dual Calendar Integration**:
  - Direct **Google Calendar** instant event addition with prefilled timings and venue details.
  - Dynamically generated **Apple / Outlook iCalendar (`.ics`)** RFC-5545 file download built on the client via `URL.createObjectURL(new Blob(...))`.

### 3. Celebration Timeline & Calendars
A chronological 2-day wedding itinerary with individual calendar sync shortcuts:
1. **Nichayathartham & Vrutham** *(Sat, Nov 21, 4:30 PM)* — Formal engagement, ring exchange, and ancestral blessings.
2. **Sangeet & Henna Evening** *(Sat, Nov 21, 7:00 PM)* — Fusion music, live Mehendi counters, and dinner.
3. **Auspicious Kalyana Muhurtham** *(Sun, Nov 22, 8:45 AM – 10:15 AM)* — Golden highlighted card for Kanyadaan, Mangalya Dharanam (tying the Thali), and Saptapadi.
4. **Kalyana Sadhya & Reception Banquet** *(Sun, Nov 22, 12:30 PM)* — Traditional 21-item authentic banana leaf grand feast.

### 4. Photo Gallery & Fullscreen Lightbox
- **Category Filter Tabs**: Smoothly toggles between *All*, *Sacred Rituals*, *Golden Moments*, and *Pre-Wedding*.
- **Fullscreen Lightbox**:
  - Smooth backdrop dimming with zoom transition.
  - Interactive previous/next image cycler buttons.
  - **Full Keyboard Accessibility**: Supports `Escape` to close, `ArrowLeft` for previous image, and `ArrowRight` for next image.

### 5. Interactive RSVP System & Celebration Confetti
- **Guest Capture Form**: Captures guest name, email, attendance confirmation (*Attending with Joy* vs *Regretfully Unable*), guest count (1 to 5+), dietary preferences (*Traditional Sadhya*, *Vegan*, *Jain*, *No Restrictions*), and optional song/message notes.
- **Instant Client-Side Persistence**: Submissions are stored immediately into browser `localStorage['wedding_rsvps']`.
- **Celebration Confetti Cannon**: Upon submission, a custom canvas burst launches 100+ flutter particles in rich wedding colors (Maroon, Gold, Emerald, Rose) that drift down the screen.
- **Confirmation Summary Card**: Replaces the form smoothly with a personalized thank-you confirmation card.

### 6. Community Blessings & Wishes Wall
- **Pre-populated with Authentic Blessings**: Comes loaded with realistic family & friend blessings categorised into badges (*Elder's Ashirwad*, *Family Blessing*, *Friend's Love*, *Well-wisher*).
- **Interactive Ashirwad / Like Button**: Guests can tap the heart icon on any card to shower love; counts update instantly and persist in `localStorage`.
- **"Share Your Blessing" Modal**:
  - **Quick Inspiration Chips**: One-click prompt chips (*Eternal Love & Joy*, *Ayushman Bhava*, *Sweet & Radiant Life*, *Celebration & Cheers*) that pre-fill the message textarea.
  - **Petal Shower Animation**: Submitting a blessing triggers a celebratory cascade of saffron and gold flower petals across the viewport.
  - **Automatic Avatar Generation**: Generates clean initials badges for any name entered.

### 7. Zero-Dependency Web Audio Shehnai Synthesizer
- **No Heavy Audio Assets**: Avoids 5–10MB MP3 downloads and copyright issues by synthesizing music directly via the browser's native **Web Audio API** (`AudioContext`).
- **Authentic Carnatic Raga Scale**: Plays notes in the classical **Raga Mohanam / Bhupali** pentatonic scale:
  $$\text{C4 (261.63 Hz)} \to \text{D4 (293.66 Hz)} \to \text{E4 (329.63 Hz)} \to \text{G4 (392.00 Hz)} \to \text{A4 (440.00 Hz)} \to \text{C5 (523.25 Hz)}$$
- **Shehnai / Flute Timbre**: Triangle wave oscillator modulated through an exponential attack-sustain-decay gain envelope.
- **Visualizer Equalizer**: The navigation bar music button features animated dancing sound-wave equalizer bars when active.

### 8. Venue, Directions & Clipboard Utilities
- **Location Showcase**: Highlights *The Grand Ballroom at The Leela Palace, Chennai* with interactive Google Maps embed.
- **One-Click Address Copy**: A dedicated button copies the full venue address to clipboard via `navigator.clipboard.writeText()` and temporarily switches its icon to a checkmark with a toast notification.
- **Traveler Logistics**: Detailed distances from Chennai International Airport (MAA - 14 km), Chennai Central Railway Station (MAS - 9 km), and valet parking instructions.

### 9. Social Sharing & Native Toast Notifications
- **WhatsApp Share**: Pre-formats an invitation text with the website link.
- **Email Invitation**: Opens guest default mail client with pre-filled subject and body.
- **Copy Link**: Copies current URL to clipboard with fallback.
- **Native Toast Component**: Floating gold-accented notification banner informing the user of all system events (*Link copied*, *Address copied*, *Blessing posted*, *Audio status*).

---

## 🛠 Customization Guide

### 1. Couple Names, Dates & Story
1. Open `index.html`:
   - Search for `Aslesha` and `Vivek` and replace them with your couple's names.
   - Update the date string (`November 22, 2026`) and timings.
   - Edit the paragraphs in the `<section class="story-section" id="story">` section.
2. Open `assets/js/script.js`:
   - Locate line 34 and set your exact Muhurtham date and time for the countdown:
     ```javascript
     const weddingDate = new Date("November 22, 2026 08:45:00").getTime();
     ```
   - Update the calendar event details (title, dates, venue string) around lines 1073 and 1093.

### 2. Replacing Images & Media Assets
You can directly replace the files inside `assets/images/` using the recommended dimensions:

| Filename | Purpose | Recommended Resolution | Aspect Ratio |
| :--- | :--- | :--- | :--- |
| `hero-bg.jpg` | Mandapam backdrop | $1920 \times 1080\text{ px}$ | 16:9 |
| `hero-couple.jpg` | Couple portrait on Hero card | $800 \times 1000\text{ px}$ | 4:5 |
| `story-first-meet.jpg` | First meeting story card | $800 \times 600\text{ px}$ | 4:3 |
| `story-proposal.jpg` | Proposal story card | $800 \times 600\text{ px}$ | 4:3 |
| `gallery-garlands.jpg` | Gallery ritual photo | $800 \times 600\text{ px}$ | 4:3 |
| `gallery-lamp.jpg` | Gallery lamp / decor photo | $800 \times 600\text{ px}$ | 4:3 |
| `gallery-sadhya.jpg` | Gallery feast / food photo | $800 \times 600\text{ px}$ | 4:3 |
| `favicon.svg` | Browser tab icon | Scalable Vector SVG | 1:1 |

> [!TIP]
> Keep image file sizes under 300KB each (using WebP or optimized JPEG) to achieve instant page loads on mobile networks.

### 3. Customizing the Color Palette (CSS Variables)
All global theme colors are defined as CSS Custom Properties in `assets/css/styles.css`:

```css
:root {
    /* Primary Colors */
    --maroon-primary: #7A1C1C;   /* Auspicious Kumkum / Kanjeevaram Silk Maroon */
    --maroon-dark:    #4E0D0D;   /* Dark border & contrast maroon */
    --maroon-light:   #9B2C2C;   /* Hover accents */

    /* Gold Accents */
    --gold-primary:   #D4AF37;   /* Traditional Temple Gold */
    --gold-light:     #F7E7B4;   /* Soft gold tint for cards & badges */
    --gold-metallic:  linear-gradient(135deg, #B8860B 0%, #FFD700 50%, #B8860B 100%);

    /* Backgrounds & Secondary Colors */
    --cream-bg:       #FAF6EE;   /* Ivory silk / raw cotton background */
    --cream-card:     #FFFDF9;   /* Pure card surface */
    --emerald-green:  #0F4C3A;   /* Auspicious Banana leaf green */
    --rose-accent:    #D98880;   /* Fresh rose petal blush */
    --text-main:      #2C1810;   /* Deep charcoal-brown high readability text */
}
```

### 4. Connecting RSVP to a Real Backend
By default, the template stores RSVPs in the visitor's browser `localStorage`. To forward RSVPs directly to Google Sheets, an email inbox, or a database:

#### Option A: Google Sheets via SheetDB / AppScript
In `assets/js/script.js` inside the RSVP form submit handler, add:
```javascript
fetch("https://sheetdb.io/api/v1/YOUR_SHEET_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        data: [{
            Name: fullName,
            Email: email,
            Attending: attendance,
            Guests: guestCount,
            Dietary: dietary,
            SubmittedAt: new Date().toLocaleString()
        }]
    })
});
```

#### Option B: Formspree (No Backend Code)
Update the `<form>` opening tag in `index.html`:
```html
<form class="rsvp-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

#### Option C: EmailJS
Include `<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>` and trigger `emailjs.send(...)` inside the submit handler.

### 5. Audio Customization (Synthesizer vs MP3)
If you prefer playing a real recorded Nadaswaram / Shehnai `.mp3` file instead of the Web Audio synthesizer:
1. Add an `<audio>` tag in `index.html`:
   ```html
   <audio id="wedding-audio" loop preload="none">
       <source src="assets/audio/nadaswaram.mp3" type="audio/mpeg">
   </audio>
   ```
2. Modify the toggle in `assets/js/script.js`:
   ```javascript
   const audioElement = document.getElementById('wedding-audio');
   audioBtn.addEventListener('click', () => {
       if (audioElement.paused) {
           audioElement.play();
           audioBtn.classList.add('playing');
       } else {
           audioElement.pause();
           audioBtn.classList.remove('playing');
       }
   });
   ```

---

## 🎨 Design System & Typography

```text
Typography Hierarchy:
├── Serif Display (Headings)       -> 'Cormorant Garamond' (Weights: 400, 600, 700)
├── Romantic Script (Sub-headings) -> 'Great Vibes' (Weight: 400)
└── Body & UI Controls (Sans)       -> 'Montserrat' (Weights: 300, 400, 500, 600, 700)
```

- **Elevation & Shadows**: Layered shadows with warm golden tints (`rgba(212, 175, 55, 0.3)`) simulate glowing brass oil lamps.
- **Glassmorphism**: Sticky navigation bar uses `backdrop-filter: blur(12px)` on supported browsers with solid ivory fallback.
- **Scrollspy**: Highlights the active section link in real-time as the user scrolls.

---

## 🌐 Browser Compatibility & Performance Audit

- **Compatibility**: Tested across modern desktop and mobile browsers:
  - Google Chrome / Chromium 90+ (Desktop & Android)
  - Apple Safari (iOS 14+ & macOS Big Sur+)
  - Mozilla Firefox 88+
  - Microsoft Edge 90+
  - Samsung Internet 15+
- **Performance Highlights**:
  - **Zero External JS Libraries**: No React, Vue, jQuery, or Lodash overhead.
  - **Smart Canvas Throttling**: `IntersectionObserver` halts petal animation when the hero section scrolls out of view, minimizing CPU and battery consumption on mobile devices.
  - **Fluid 60 FPS Scrolling**: Uses passive event listeners (`{ passive: true }`) for scrolling performance.
  - **Vector Graphics**: Sharp, resolution-independent SVG Kolam and monogram assets.

---

## 🚀 Deployment Options

Deploy your customized wedding website in minutes for free:

### 1. GitHub Pages
1. Push this directory to a GitHub repository.
2. Go to **Settings** > **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save** — your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### 2. Vercel
1. Run `npx vercel` in the project directory, or link your GitHub repo on [vercel.com](https://vercel.com).
2. Accept default settings (Framework: *Other* / No build command).
3. Instant deployment with automatic SSL certificate.

### 3. Netlify
1. Drag and drop this folder directly into [Netlify Drop](https://app.netlify.com/drop).
2. Or connect via GitHub for automated continuous deployment.

---

## 📜 License & Credits

- **Fonts**: [Google Fonts](https://fonts.google.com/) ([Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond), [Great Vibes](https://fonts.google.com/specimen/Great+Vibes), [Montserrat](https://fonts.google.com/specimen/Montserrat)) under Open Font License.
- **Icons**: [FontAwesome 6 Free](https://fontawesome.com/) under CC BY 4.0.
- **Synthesizer**: Native HTML5 Web Audio API algorithm (Mohanam Raga frequencies).
- **Template**: Created for **Aslesha & Vivek Kalyana Mahotsavam**. Free to customize and adapt for your own wedding celebrations under the MIT License!

---

<p align="center">
  <b>ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॐ</b><br>
  <i>May all beings be happy, may all beings be free from suffering.</i>
</p>
