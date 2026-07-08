# Animations & Bento Cards (Apple-Style)

This specification details the animation patterns, bento-grid layouts, and card structures extracted from Apple's modern product landing pages (specifically iOS). Agents should use these guidelines to implement dynamic, scroll-driven UI components.

## Core UI Components

### 1. The Bento Grid
Apple heavily utilizes "Bento Box" layouts to display features.

![Bento Grid Reference](file:///Users/garvin/Documents/projects/garvinlabs-website/macos27 design components/13_Animations_and_Bento_Cards/images/bento_grid_example.png)

- **Structure**: A CSS Grid layout where items span different rows/columns (e.g., a large hero card spanning 2 columns, surrounded by smaller 1x1 cards).
- **Styling**: Cards use soft rounding (e.g., `border-radius: 24px` or `32px`), light drop shadows, and often incorporate the "Liquid Glass" materials.
- **Content**: Usually consists of a prominent high-quality image/icon, a bold short headline, and a brief description. The image is often positioned absolutely within the card (overflow hidden) to create dynamic cropping.

### 2. Scroll-Triggered Reveal Animations
Elements do not appear instantly on page load. Instead, they animate in as the user scrolls.
- **Translate Up & Fade In**: Cards and text blocks start with `opacity: 0` and `transform: translateY(40px)`. As they enter the viewport, they transition to `opacity: 1` and `translateY(0)`.
- **Easing**: Apple uses a very smooth, spring-like custom cubic-bezier curve. A standard approximation is `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Staggering**: If multiple bento cards appear in the same section, they should stagger their reveal (e.g., Card 1 delays 0ms, Card 2 delays 100ms, Card 3 delays 200ms).

### 3. Parallax and Scale-In Media
- Images inside cards often start at `scale(1.1)` and gently scale down to `scale(1.0)` as they enter the viewport, giving a subtle zoom-out effect.
- Sticky sections: Content often sticks (`position: sticky; top: ...`) while background images change or scroll past.

## Implementation Guidelines for Agents

When implementing these on a website:
1. **Grid CSS**: Use `display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));` or specific column spans (`grid-column: span 2`) for larger highlight cards.
2. **Animation Hook**: Implement an `IntersectionObserver` in React/Next.js (or use framer-motion) to detect when an element is in the viewport to trigger the `is-visible` CSS class.
3. **Responsive**: Bento grids must degrade gracefully. On mobile (`< 768px`), all cards should span 1 column, stacked vertically.
