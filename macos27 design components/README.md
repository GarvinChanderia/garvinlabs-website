# macOS 27 Design System Component Library

Welcome to the **macOS 27 Design System Component Library** documentation! This directory contains processed design assets and comprehensive specifications for macOS UI components. Each component category has been cross-referenced with Apple's official **Human Interface Guidelines (HIG)** to compile accurate design rules, constraints, sizing structures, and responsive layouts.

---

## Component Index

Below is the directory map of the design library. Each link points to the specific component's `README.md` file, which includes detailed guidelines, rules, local design assets, and high-resolution rendered screenshots:

| Directory | Component Title | Key Included Specs | Official Apple HIG |
| :--- | :--- | :--- | :--- |
| [00_Liquid_Glass_and_Materials](file:///Users/garvin/Documents/projects/garvinlabs-website/macos27 design components/00_Liquid_Glass_and_Materials/README.md) | **Liquid Glass & Materials** | Ultra thin to Ultra thick glass, dark/light materials, scroll edge effects | [Materials HIG](https://developer.apple.com/design/human-interface-guidelines/materials) |
| [01_Typography_and_Text_Styles](file:///Users/garvin/Documents/projects/garvinlabs-website/macos27 design components/01_Typography_and_Text_Styles/README.md) | **Typography & Text Styles** | Large title, headlines, body, callouts, alignment configurations | [Typography HIG](https://developer.apple.com/design/human-interface-guidelines/typography) |
| [02_Toggles_Checkboxes_and_Radios](file:///Users/garvin/Documents/projects/garvinlabs-website/macos27 design components/02_Toggles_Checkboxes_and_Radios/README.md) | **Toggles, Checkboxes & Radios** | Binary toggles, switch widgets, checkbox buttons, radio selectors | [Toggles HIG](https://developer.apple.com/design/human-interface-guidelines/toggles) |
| [03_Toolbars](file:///Users/garvin/Documents/projects/garvinlabs-website/macos27 design components/03_Toolbars/README.md) | **Toolbars** | Window-top action bars, navigation buttons, flex spacers | [Toolbars HIG](https://developer.apple.com/design/human-interface-guidelines/toolbars) |
| [04_Sidebars](file:///Users/garvin/Documents/projects/garvinlabs-website/macos27 design components/04_Sidebars/README.md) | **Sidebars** | Collapsible navigation menus, side list items, glass sidebars | [Sidebars HIG](https://developer.apple.com/design/human-interface-guidelines/sidebars) |
| [05_Pop_Up_and_Pull_Down_Buttons](file:///Users/garvin/Documents/projects/garvinlabs-website/macos27 design components/05_Pop_Up_and_Pull_Down_Buttons/README.md) | **Pop-Up & Pull-Down Buttons** | Parameter selectors, action menu buttons, dropdown indicators | [Pop-Up Buttons](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons) / [Pull-Down](https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons) |
| [06_Notifications](file:///Users/garvin/Documents/projects/garvinlabs-website/macos27 design components/06_Notifications/README.md) | **Notifications** | Banners, alert alerts, action-embedded toasts | [Notifications HIG](https://developer.apple.com/design/human-interface-guidelines/notifications) |
| [07_Menus](file:///Users/garvin/Documents/projects/garvinlabs-website/macos27 design components/07_Menus/README.md) | **Menus** | Context menus, app-dropdowns, submenu layers, keyboard labels | [Menus HIG](https://developer.apple.com/design/human-interface-guidelines/menus) |
| [08_Desktop_Templates_and_Menu_Bar](file:///Users/garvin/Documents/projects/garvinlabs-website/macos27 design components/08_Desktop_Templates_and_Menu_Bar/README.md) | **Desktop Templates & Menu Bar** | Status items, screen menu bar templates, desktop frames | [Menu Bar HIG](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar) |
| [09_Forms_and_Inputs](file:///Users/garvin/Documents/projects/garvinlabs-website/macos27 design components/09_Forms_and_Inputs/README.md) | **Forms & Inputs** | Text fields, form sections, label alignments, state validation | [Selection & Input](https://developer.apple.com/design/human-interface-guidelines/selection-and-input) |
| [10_Buttons](file:///Users/garvin/Documents/projects/garvinlabs-website/macos27 design components/10_Buttons/README.md) | **Buttons** | Rounded push buttons, arrow controls, borderless, toggle buttons | [Buttons HIG](https://developer.apple.com/design/human-interface-guidelines/buttons) |
| [11_Alerts](file:///Users/garvin/Documents/projects/garvinlabs-website/macos27 design components/11_Alerts/README.md) | **Alerts** | Modal warning alerts, confirm/cancel, destructive states | [Alerts HIG](https://developer.apple.com/design/human-interface-guidelines/alerts) |
| [12_Windows_Sheets_and_Dialogs](file:///Users/garvin/Documents/projects/garvinlabs-website/macos27 design components/12_Windows_Sheets_and_Dialogs/README.md) | **Windows, Sheets & Dialogs** | Window titlebars, sheets, save/export sheets, panels, utility views | [Windows HIG](https://developer.apple.com/design/human-interface-guidelines/windows) / [Dialogs HIG](https://developer.apple.com/design/human-interface-guidelines/modality) |
| [13_Animations_and_Bento_Cards](file:///Users/garvin/Documents/projects/garvinlabs-website/macos27 design components/13_Animations_and_Bento_Cards/README.md) | **Animations & Bento Cards** | Scroll-driven reveals, bento box grid structures, Apple-style interactions | [Extracted from Apple.com](https://www.apple.com/in/os/ios/) |

---

## Core macOS 27 Design Tenets

When designing or implementing these components in your application, adhere to the following core guidelines derived from Apple's design specifications:

### 1. Translucency & Glassmorphism (Materials)
*   **Layering**: Use translucent materials to hint at content behind current views. Always pair glass layers with high contrast, vibrant text colors.
*   **Theme Adaptation**: Ensure materials automatically shift contrast between light and dark modes, reacting naturally to changing wallpaper styles underneath.

### 2. Typographic Scaling & Legibility
*   **System Fonts**: Use SF Pro for main UI elements and New York for editorial contexts. 
*   **Dynamic Scaling**: Align type sizing to standard styles (e.g., Large Title = 26pt, Body = 13pt) to preserve system proportions and layout balance.

### 3. Clear Intent in Interactions (Toggles vs. Buttons)
*   **Switches**: A switch should perform an action immediately (e.g., toggling Bluetooth).
*   **Checkboxes/Radios**: Use these inside forms that require a confirmation (e.g., clicking 'Apply' or 'Submit').
*   **Buttons**: The primary action button should always carry a full accent color fill, while secondary actions should use light outlines or borderless styling to establish visual precedence.

### 4. Sheets vs. Alerts
*   **Sheets**: Use for document-scoping task modals (like save or settings configs) where users stay focused within a single window.
*   **Alerts**: Reserve for high-priority errors or destructive warnings (like discarding unsaved edits) that require immediate action.
