# StyleMart — Luxury Fashion & Lifestyle E-Commerce

[![CI/CD Pipeline](https://github.com/Chaithanyaprakash/StyleMart/actions/workflows/StyleMart.yml/badge.svg)](https://github.com/Chaithanyaprakash/StyleMart/actions/workflows/StyleMart.yml)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-07261e?style=flat&logo=github&logoColor=d4af37)](https://chaithanyaprakash.github.io/StyleMart/)
[![Vanilla JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](app.js)
[![HTML5 & CSS3](https://img.shields.io/badge/HTML5%20%26%20CSS3-Modern%20Grid-E34F26?logo=html5&logoColor=white)](styles.css)
[![License: MIT](https://img.shields.io/badge/License-MIT-07261e.svg)](LICENSE)

> A high-performance, mobile-first luxury fashion and apparel e-commerce web application inspired by premier haute-couture fashion houses. Styled in an opulent **Imperial Emerald Green (`#07261e`)** and **Champagne Gold (`#d4af37`)** luxury theme with botanical accents.

**Live Storefront Demo:** [https://chaithanyaprakash.github.io/StyleMart/](https://chaithanyaprakash.github.io/StyleMart/)

---

## 🌟 Key Features

* **96-Product Master Catalog:** Comprehensive fashion database across Women's Luxury, Men's Couture, Kids' Wear, Footwear, and Traditional Ethnic collections with high-resolution multi-angle galleries.
* **Calibrated 24-Item "All Fashions" Showcase:** Homepage grid mathematically calibrated to 24 items to guarantee complete rows with zero orphan card gaps across all screen widths (6 cols ultrawide, 4 cols desktop, 3 cols tablet, 2 cols mobile).
* **Mobile-Optimized User Profile ([profile.html](profile.html)):** Compact horizontal user hero banner, swipeable horizontal tab pill bar, and responsive order cards that keep active purchases instantly visible without vertical scrolling.
* **Streamlined 2-Column Mobile Footer:** Clutter-free mobile footer that hides high-overhead decorative content and arranges **SHOP** on the left and **ABOUT** on the right in a balanced, luxury 2-column grid.
* **Interactive Search with Autocomplete:** Real-time client-side search index matching titles, brands, and categories with keyboard navigation.
* **Slide-in Cart & Wishlist Drawers:** Real-time item count badges, quantity controls, free delivery progress bar, and instant coupon code validation.
* **Multi-Step Checkout & Address Management:** Customer profile validation, delivery address auto-filling, simulated UPI/COD payment flows, and celebratory confetti animations.
* **Order Tracking Stepper & Self-Healing Profile:** Complete order history with a 4-stage tracking stepper ("Placed" → "Confirmed" → "Out for Delivery" → "Delivered") and automatic self-healing data recovery.

---

## 🚀 Quick Start Guide

Run StyleMart locally in 3 simple steps:

```bash
# 1. Clone the repository
git clone https://github.com/Chaithanyaprakash/StyleMart.git

# 2. Enter project directory
cd StyleMart

# 3. Check out the active production branch
git checkout StyleMart

# 4. Start a local server (Option A: Node.js)
npx serve -l 3000 .
# Open: http://localhost:3000

# Or (Option B: Python 3)
python -m http.server 8000
# Open: http://localhost:8000
```

---

## 🏗️ Architecture & Technical Scope

* **Stack:** Pure Vanilla HTML5, Modern CSS3 (Grid, Flexbox, Custom Properties), and ES6+ JavaScript — Zero heavy framework bloat.
* **Persistence Layer:** Client-side state engine backed by browser `localStorage` (`stylemart_cart`, `stylemart_wishlist`, `stylemart_orders`, `stylemart_profile`).
* **Simulation Scope:** Authentication, checkout billing, and order tracking operate as a high-fidelity client-side demonstration. See [StyleMart.md](StyleMart.md#3-production-readiness--persistence-architecture) for the enterprise backend migration guide (REST API, PostgreSQL/MongoDB, Razorpay/Stripe).
* **CI/CD Quality Gate:** Strict automated GitHub Actions pipeline ([StyleMart.yml](StyleMart.yml)) executing JavaScript syntax validation (`node -c app.js`), strict HTML/asset verification ([scripts/validate-html.js](scripts/validate-html.js)), local route health checks (HTTP 200), and Puppeteer headless browser tests.

---

## 📖 Comprehensive Engineering Documentation

For deep technical documentation, architecture diagrams, development milestones, git commit history, and a complete engineering log of 10 bug post-mortems, please read:

👉 [**StyleMart.md — Full Engineering Documentation**](StyleMart.md)

---

## 👤 Author & Maintainer

* **Chaithanya Prakash** — [GitHub Profile](https://github.com/Chaithanyaprakash)
* **Repository:** [Chaithanyaprakash/StyleMart](https://github.com/Chaithanyaprakash/StyleMart)

---

*StyleMart is licensed under the MIT License.*
