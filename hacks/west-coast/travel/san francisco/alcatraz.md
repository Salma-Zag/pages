---
layout: post
title: "Alcatraz"
description: 
permalink: /west-coast/travel/sd/alca/
date: 2025-10-21
---

/* === Admin Building on top of the island === */
.admin-building {
    position: absolute;
    bottom: 470px;                 /* sits above main cellhouse/lighthouse ridge */
    left: 52%;
    transform: translateX(-50%);
    width: 280px;
    height: 120px;
    background: linear-gradient(135deg, #d9dbde 0%, #b9bcc0 55%, #a5a8ac 100%);
    border: 3px solid #8d9094;
    box-shadow: -10px 10px 24px rgba(0,0,0,0.35);
    animation: building-rise 3s ease-out 0.6s both;  /* reuse your rise anim */
    z-index: 2;
}
.admin-roof {
    position: absolute;
    top: -26px;
    left: -10px;
    width: calc(100% + 20px);
    height: 32px;
    background: linear-gradient(180deg, #7b7e82 0%, #5f6367 100%);
    clip-path: polygon(50% 0, 100% 100%, 0 100%);   /* gabled */
    border: 2px solid #56595d;
    filter: drop-shadow(0 6px 8px rgba(0,0,0,0.25));
}
.admin-cornice {
    position: absolute;
    top: 6px;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(180deg, #eceff1 0%, #cfd8dc 100%);
    border-top: 1px solid #b0bec5;
    border-bottom: 1px solid #90a4ae;
}

.admin-windows {
    position: absolute;
    top: 36px;
    left: 16px;
    right: 16px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
}
.a-win {
    height: 34px;
    background: linear-gradient(180deg, #0e1113 0%, #1a2024 100%);
    border: 2px solid #2b2f33;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.6);
    position: relative;
}
.a-win::before, .a-win::after {
    content: "";
    position: absolute;
    background: #2b2f33;
}
.a-win::before {           /* vertical mullion */
    top: 0; bottom: 0; width: 2px; left: 50%; transform: translateX(-50%);
}
.a-win::after {            /* horizontal mullion */
    left: 0; right: 0; height: 2px; top: 50%; transform: translateY(-50%);
}

/* sporadic warm window glow */
.a-win.glow {
    animation: adminGlow 4.5s ease-in-out infinite;
}
@keyframes adminGlow {
    0%, 100% { filter: brightness(1); }
    50%      { filter: brightness(1.25); }
}

.admin-door {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 46px;
    height: 64px;
    background: linear-gradient(180deg, #2a2f33, #14181b);
    border: 3px solid #0d0f11;
    border-radius: 6px;
    box-shadow: inset 0 0 8px rgba(255,255,255,0.06);
}
.admin-steps {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90px;
    height: 12px;
    background: linear-gradient(180deg, #c3c8cd, #9aa1a6);
    border-radius: 4px 4px 0 0;
}

/* small chimney with a gentle puff */
.admin-chimney {
    position: absolute;
    top: -38px;
    right: 22px;
    width: 18px;
    height: 26px;
    background: linear-gradient(180deg, #8a8e92, #666a6e);
    border: 2px solid #585c60;
    border-radius: 2px;
}
.admin-smoke {
    position: absolute;
    top: -12px;
    left: 50%;
    width: 10px; height: 10px;
    background: rgba(200, 210, 220, 0.7);
    border-radius: 50%;
    filter: blur(0.5px);
    transform: translateX(-50%);
    animation: puff 1.8s ease-out infinite;
}
@keyframes puff {
    0%   { transform: translate(-50%, 0) scale(0.6); opacity: 0.9; }
    70%  { transform: translate(-50%, -16px) scale(1.25); opacity: 0.25; }
    100% { transform: translate(-50%, -22px) scale(1.4); opacity: 0; }
}


# UI Hierarchy Lesson: Alcatraz Island Theme
## What is UI Hierarchy?

UI hierarchy organizes elements by importance. Think of Alcatraz Island—the main cellhouse dominates, with guard towers and cell blocks arranged to guide visitors naturally through the site.

## The 3 Levels of Hierarchy

### Primary (Main Cellhouse)
Most important content—as dominant as the main prison building.
- Main headlines, key buttons, hero images

### Secondary (Guard Towers)
Supporting information—like D-Block and watchtowers.
- Subheadings, section titles, secondary buttons

### Tertiary (Cell Details)
Additional details—individual inmate stories and daily life.
- Body text, captions, metadata

## 5 Tools to Create Hierarchy

### 1. Size
Like the cellhouse towering over smaller buildings.
- Primary: 32-48px
- Secondary: 24-32px
- Tertiary: 14-16px

### 2. Weight
Thick steel bars vs. thinner mesh.
- Primary: Bold (700)
- Secondary: Semi-bold (600)
- Tertiary: Regular (400)

### 3. Color
Stark gray concrete against blue San Francisco Bay.
- High contrast for primary
- Medium for secondary
- Low for tertiary

### 4. Spacing
Isolation cells created maximum separation—use white space the same way.

### 5. Position
Visitors look up at the main building first—top and center draw attention.

## Exercise: Alcatraz Tour Website

**Primary**: "Experience Alcatraz Island" + "Book Your Tour" button

**Secondary**: "Explore America's Most Notorious Prison" + section titles

**Tertiary**: Tour descriptions, visitor info, footer links

## Common Mistakes

1. Making everything important—nothing stands out
2. Too many font sizes—stick to 3-4 maximum
3. Ignoring spacing—use isolation for impact
4. Inconsistent styling—maintain order like the prison did
5. Poor contrast—you need clarity in San Francisco fog

## Quick Tips

- Limit to 1-2 fonts
- Create dramatic contrast (prison against bay)
- Test by squinting—structure should still be clear
- Use familiar patterns (dock → climb → cellhouse)

## Code Example
```html