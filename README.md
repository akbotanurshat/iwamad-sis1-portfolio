# iwamad-sis1-portfolio

**Live URL:** https://akbotanurshat.github.io/iwamad-sis1-portfolio/

## About the Site

This is my personal portfolio website. It contains a short introduction about me, three projects I built during the course, and a contact form. The site is built with HTML5, CSS3, and vanilla JavaScript — no external libraries or frameworks.

## Design Decisions

1. **Layout**: I used CSS Grid for the projects section — one column on mobile, three columns on desktop. This is a real responsive change, not just stretching. I chose Grid because it makes adapting to different screen sizes much easier.

2. **Colors**: I picked a blue accent (`--accent`) with neutral gray tones. Contrast is maintained in both modes (light/dark) through CSS variables. It's easy on the eyes and comfortable to read.

3. **After testing on a phone**: I switched the navigation to a burger menu because three links were wrapping awkwardly on small screens. I also made the theme toggle more compact and moved it to the right corner.

## Technologies

- **HTML5** — semantic tags (header, nav, main, section, footer)
- **CSS3** — CSS variables, Grid, Flexbox, media queries
- **Vanilla JavaScript** — theme toggle (with localStorage), form validation, mobile nav

## Features

- 🌙 **Dark/Light mode** — switches the whole page; the choice is saved in localStorage
- 📱 **Responsive design** — works between 375px (phone) and 1200px (desktop)
- ✉️ **Contact form** — JavaScript validation (empty fields and email format)
- ♿ **Accessibility** — semantic HTML, labels, focus styles, ARIA attributes
