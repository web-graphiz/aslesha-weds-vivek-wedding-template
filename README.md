# Aslesha & Vivek — South Indian Wedding Celebration Template

A premium, responsive, traditional South Indian wedding website template designed for couples, wedding planners, and developers. Built with clean HTML5, CSS3, and modern vanilla JavaScript.

---

## 📁 Project Structure

```text
"Aslesha and Vivek"/
│
├── index.html                   # Main single-page wedding website
├── README.md                    # Project documentation & customization guide
│
└── assets/                      # Static resources and styling
    ├── css/
    │   └── styles.css           # Custom styles, responsive grid & animations
    ├── js/
    │   └── script.js            # Interactivity, countdown, Web Audio synthesizer & RSVP
    └── images/                  # High-resolution optimized wedding media
        ├── favicon.svg          # Traditional gold monogram favicon
        ├── hero-bg.jpg          # Wedding Mandapam stage backdrop
        ├── hero-couple.jpg      # Couple portrait (Aslesha & Vivek)
        ├── story-first-meet.jpg # "When Paths Crossed" photo
        ├── story-proposal.jpg   # "A Sacred Beginning" proposal photo
        ├── gallery-garlands.jpg # Maalai exchange ritual
        ├── gallery-lamp.jpg     # Glowing Kuthuvillakku brass lamp
        └── gallery-sadhya.jpg   # Traditional banana leaf Sadhya feast
```

---

## ✨ Features

- **Traditional South Indian Aesthetic**: Inspired by Kanjeevaram silks, temple gold borders, auspicious deep maroon (`#7A1C1C`), temple gold (`#D4AF37`), and banana leaf green (`#0F4C3A`).
- **Live Countdown Timer**: Automatically calculates and displays remaining days, hours, minutes, and seconds until the auspicious Muhurtham.
- **Web Audio API Melody Synthesizer**: Zero-dependency traditional ambient melody synthesis (Shehnai/Carnatic style frequencies) playable with an animated sound-wave button.
- **Interactive Photo Gallery**: Category filters (`All`, `Rituals`, `Moments`, `Pre-Wedding`) with full-screen Lightbox viewer with keyboard arrow and ESC navigation.
- **Interactive RSVP System**: Complete RSVP form that validates inputs, stores submissions locally (`localStorage`), renders an instant confirmation summary, and launches festive animated confetti.
- **Blessings & Wishes Wall**: Allows guests to post congratulatory wishes and blessings stored persistently across sessions.
- **Social Sharing & Direct Links**: One-click sharing via WhatsApp, Email, or direct link copy with toast notifications.
- **Color Palette Guide**: Attire inspiration guide for guests attending the Muhurtham, Sangeet, and Reception.
- **Venue & Google Maps Integration**: Direct directions link to The Leela Palace, Chennai.
- **Fully Responsive**: Optimized for ultra-wide monitors, laptops, tablets, and smartphones.

---

## 🚀 Getting Started

No build tools, Node modules, or compilation required!

### Option 1: Direct File Opening
Double-click `index.html` or open it with any web browser (Chrome, Safari, Edge, Firefox).

### Option 2: Local HTTP Server (Recommended)
Using Python:
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

Using VS Code:
Right-click `index.html` and select **"Open with Live Server"**.

---

## 🎨 Customization Guide

### 1. Couple Names & Dates
Open `index.html` and search for:
- `Aslesha & Vivek`: Replace with the couple's names.
- `November 22, 2026`: Update the date displayed across badges and sections.

Open `assets/js/script.js` and update the countdown date at line 10:
```javascript
const weddingDate = new Date("November 22, 2026 08:45:00").getTime();
```

### 2. Replacing Images
Simply drop new photos into `assets/images/` using the same names, or update the `src` attributes in `index.html`:
- `assets/images/hero-bg.jpg` — Hero section background
- `assets/images/hero-couple.jpg` — Hero couple frame
- `assets/images/story-first-meet.jpg` — First meeting story
- `assets/images/story-proposal.jpg` — Proposal story
- `assets/images/gallery-*.jpg` — Photo gallery items

### 3. Modifying Color Theme
CSS variables are defined at the top of `assets/css/styles.css`:
```css
:root {
    --primary-maroon: #7A1C1C;
    --gold: #D4AF37;
    --gold-light: #FFDF73;
    --deep-forest: #0F4C3A;
    --bg-cream: #FFFDF9;
    --text-dark: #2A2421;
}
```

---

## 📄 License & Credits

- Fonts: Google Fonts ([Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond), [Great Vibes](https://fonts.google.com/specimen/Great+Vibes), [Montserrat](https://fonts.google.com/specimen/Montserrat))
- Icons: [FontAwesome 6 Free](https://fontawesome.com/)
- Audio: Pure Web Audio API Synthesizer (No external audio file dependencies)

