# SRS — Liên hệ

Module: `lien-he`
Design: [View the approved design](http://localhost:8080/design/f35b7a0a-d705-4f0c-8c7a-64d8a754d7c6)
Design system: `design/design-system.md`

> One file per module, at `docs/lien-he/SRS.md`. It covers only functions that belong to this module. Never write `docs/SRS.md`.

## 1. Purpose

Liên hệ module gives visitors a dedicated `/lien-he` page for shop hours and directions. It helps customers decide when and where to reach Tiệm hoa Cỏ Lạ before placing or collecting an order.

## 2. Actors

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Guest | Visitor not signed in | View location, hours, and wayfinding content; follow navigation links |
| Shop owner | Tiệm hoa Cỏ Lạ operator | Provide approved address and hours content before build |

## 3. Scope

**In scope** — functions specified below, by plan title:

- Giờ mở cửa và đường tới tiệm

**Out of scope** — expected work that belongs elsewhere:

- Home page embedded contact block — belongs to `home` module.
- Booking form — belongs to `dat-hoa` module.
- Sample flower list — belongs to `mau-hoa` module.
- Live map embed, geolocation, route calculation, delivery-zone calculator, and contact form — deliberately not built unless approved design shows them.

## 4. Functional requirements

### 4.1 Giờ mở cửa và đường tới tiệm

**Requirement LIEN-HE-001 — Render approved contact page**

*As a* Guest, *I want to* view the Giờ mở cửa và đường tới tiệm page, *so that* I can find shop location and hours.

Behaviour:

1. Guest opens `/lien-he`.
2. Page renders these sections in order: Navigation, Hero, Map & hours, Footer.
3. Page uses approved dark editorial visual style, typography, colors, spacing, sticky navigation, hero, address icon row, hours table if shown, map actions if shown, and footer defined in approved design and design system.

**Acceptance criteria** — each is proved by at least one test case in `docs/lien-he/test-cases/gio-mo-cua-va-duong-toi-tiem.md`, through story plan criteria.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Guest is on any supported viewport width from 320px upward | Guest opens `/lien-he` | Sections appear in order: nav, hero, map_hours, footer |
| AC-2 | Guest opens `/lien-he` | Page renders navigation | Navigation shows brand `Tiệm hoa Cỏ Lạ`, links `Mẫu hoa`, `Giờ mở cửa`, and primary small button `Đặt hoa trước` |
| AC-3 | Guest opens `/lien-he` | Page renders hero | Hero heading `Giờ mở cửa và đường tới tiệm` is visible, and lead text says tiệm is on `Phố Phan Đình Phùng, Hà Nội` and confirms details by phone before delivery or pickup |
| AC-4 | Guest opens `/lien-he` | Page renders Map & hours | Heading `Giờ mở cửa và đường tới tiệm` is visible |
| AC-5 | Guest opens `/lien-he` | Page renders Map & hours | Address `Phố Phan Đình Phùng, Hà Nội` is visible with decorative location icon |
| AC-6 | Approved design shows hours rows | Page renders Map & hours | Each visible day or day range and time value appears exactly as approved |
| AC-7 | Approved design omits hours rows | Page renders Map & hours | Page does not invent hours values |
| AC-8 | Approved design shows map or direction actions | Page renders Map & hours | Each visible action label and target matches approved design |
| AC-9 | Approved design omits map or direction actions | Page renders Map & hours | Page does not invent map buttons or external map links |
| AC-10 | Guest opens `/lien-he` | Page renders Footer | Footer copy, contact address, and copyright match approved design |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Missing hours | Approved design has no hours table | Page shows no invented hours values; approved design in available `index.html` shows heading and address only in home contact block |
| Missing map action | Approved design has empty map actions container | Page shows no invented map or direction button |
| Invalid input | Guest enters data | Not applicable: page has no input fields |
| Not permitted | Guest not signed in | Not applicable: page is public and has no signed-in role |
| Upstream failure | External map provider unavailable | Not applicable: approved design has no external map embed, loading state, or error state |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| Shop name | text | yes | Exact text `Tiệm hoa Cỏ Lạ` |
| Navigation links | link list | yes | Targets: home, `mau-hoa/`, `lien-he/`, `dat-hoa/` as approved |
| Page hero copy | text | yes | Heading `Giờ mở cửa và đường tới tiệm`; lead text mentions `Phố Phan Đình Phùng, Hà Nội` and phone confirmation before delivery or pickup |
| Section heading | text | yes | Exact text `Giờ mở cửa và đường tới tiệm` |
| Address | text | yes | Exact text `Phố Phan Đình Phùng, Hà Nội` |
| Hours rows | list | no | Appears only when approved contact page design shows hours |
| Map action links | link list | no | Appears only when approved contact page design shows actions |
| Footer copy | text | yes | Matches approved design |

## 5. Screens

| Screen | Section in design | Functions it serves | States that must exist |
|---|---|---|---|
| Contact page | `/lien-he`: nav, hero, map_hours, footer | LIEN-HE-001 | default |
| Map & hours block | `map_hours` | LIEN-HE-001 | default |

## 6. Non-functional requirements

| Area | Requirement |
|---|---|
| Accessibility | Decorative location SVG is `aria-hidden`; address and hours are visible text; hours table, if shown, uses readable day/time text |
| Responsive | Page works from 320px viewport width upward with no horizontal page scroll; hours rows and address do not clip |
| Localisation | Customer-facing copy is Vietnamese; address and hours, if shown, match approved Vietnamese formatting |
| Motion | Page respects `prefers-reduced-motion: reduce`; motion elements remain visible without transform |

## 7. Dependencies and assumptions

- **Depends on:** `dat-hoa` route, for booking navigation.
- **Depends on:** `mau-hoa` route, for sample flower navigation.
- **Assumption:** Contact page exists in approved multi-page design even though saved `index.html` excerpt available to PM shows home page only; story implementation must use approved design preview for `/lien-he`.
- **Assumption:** No external map provider is required unless approved contact page design includes an external map action or embed.

| Open question | Proposed default | Who decides |
|---|---|---|
| None | Render approved design exactly; do not invent hours rows, map links, loading, or error states | Stakeholder |

## 8. Traceability

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Giờ mở cửa và đường tới tiệm | LIEN-HE-001 | `test-cases/gio-mo-cua-va-duong-toi-tiem.md` |
