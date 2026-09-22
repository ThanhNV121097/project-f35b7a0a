# Story — Giờ mở cửa và đường tới tiệm

Module: `lien-he`
Plan item: Giờ mở cửa và đường tới tiệm
Requirement: LIEN-HE-001

## User story

As a Guest, I want to view shop hours and directions on `/lien-he`, so that I can decide when and where to reach Tiệm hoa Cỏ Lạ before placing or collecting an order.

## In scope

- Build static `/lien-he` page for Guest visitors.
- Render sections in this order: Navigation, Hero, Map & hours, Footer.
- Match approved design for copy, colors, typography, spacing, sticky navigation, address icon row, and footer.
- Show hours rows only if approved design includes hours rows.
- Show map or direction actions only if approved design includes them.
- Keep page public with no sign-in requirement and no user input.

## Out of scope

- Home page embedded contact block; belongs to `home` module.
- Booking form, submission, validation, and order storage; belongs to `dat-hoa` module.
- Sample flower list and prices; belongs to `mau-hoa` module.
- Live map embed, geolocation, route calculation, delivery-zone calculator, and contact form; not in approved scope.
- Invented hours values, map buttons, external map links, loading states, error states, or empty states; approved static design does not define them.
- Backend, database, API, runtime secrets, and external provider setup; project shape is static frontend only.

## UI scope

- Screen: `/lien-he` contact page.
- Sections: sticky Navigation, Hero, Map & hours, Footer.
- State: default only.
- Responsive range: 320px viewport width upward, with no horizontal page scroll.
- Visual source: approved design and `design/design-system.md`; customer-facing copy remains Vietnamese.
- Accessibility: semantic navigation and headings; decorative location SVG uses `aria-hidden`; address remains visible text; any hours text remains readable.

## Acceptance criteria

- SC-1 [LIEN-HE-001 AC-1]: At any supported viewport width from 320px upward, opening `/lien-he` shows sections in DOM and visual order: nav, hero, map_hours, footer.
- SC-2 [LIEN-HE-001 AC-2]: Navigation shows brand `Tiệm hoa Cỏ Lạ`, links `Mẫu hoa` and `Giờ mở cửa`, and small primary navigation action `Đặt hoa trước`.
- SC-3 [LIEN-HE-001 AC-3]: Hero shows heading `Giờ mở cửa và đường tới tiệm` and lead text mentioning `Phố Phan Đình Phùng, Hà Nội` plus phone confirmation before delivery or pickup.
- SC-4 [LIEN-HE-001 AC-4]: Map & hours section shows heading `Giờ mở cửa và đường tới tiệm`.
- SC-5 [LIEN-HE-001 AC-5]: Map & hours section shows address `Phố Phan Đình Phùng, Hà Nội` with decorative location icon hidden from assistive technology.
- SC-6 [LIEN-HE-001 AC-6]: If approved design shows hours rows, each visible day or day range and time value appears exactly as approved.
- SC-7 [LIEN-HE-001 AC-7]: If approved design omits hours rows, `/lien-he` renders no invented hours values.
- SC-8 [LIEN-HE-001 AC-8]: If approved design shows map or direction actions, each visible action label and link target matches approved design.
- SC-9 [LIEN-HE-001 AC-9]: If approved design omits map or direction actions, `/lien-he` renders no invented map buttons or external map links.
- SC-10 [LIEN-HE-001 AC-10]: Footer copy, contact address, and copyright match approved design.
- SC-11 [LIEN-HE-001 AC-1]: Page remains usable from 320px upward with no horizontal page scroll, clipped address text, or clipped hours text.

## Dependencies

- Depends on `/dat-hoa` route for `Đặt hoa trước` navigation target.
- Depends on `/mau-hoa` route for `Mẫu hoa` navigation target.
- Depends on approved `design/index.html` content as source for exact copy and optional hours or map actions.
- No external accounts, credentials, backend services, database, or map provider are needed.
