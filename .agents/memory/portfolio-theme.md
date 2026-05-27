---
name: Portfolio black+beige theme
description: Color palette and design decisions for the Haris Farooq portfolio
---

Primary palette:
- Background: `hsl(30 15% 4%)` — warm near-black (#0a0907)
- Foreground: `hsl(35 45% 87%)` — warm cream (#ede0cc)
- Primary accent: `hsl(35 45% 65%)` — mid beige (#c9b08c)
- Muted: `hsl(35 20% 48%)` — dark beige (#8a7a65)
- Border: `hsl(35 20% 13%)` — subtle warm dark

Hero section keeps its deep-navy space theme (`#080c16`) intentionally — it's a Three.js canvas that's visually separate from the sections below.

**Why:** User requested black and beige theme. The beige acts as the accent/primary replacing the original indigo blue.

**How to apply:** All sections below the hero use `style={{ background: BG }}` with `BG = '#0a0907'`. Accents use `BEIGE = '#c9b08c'`, text uses `CREAM = '#ede0cc'`.
