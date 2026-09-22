# SRS — Đặt hoa

Module: `dat-hoa`
Design: [View the approved design](http://localhost:8080/design/f35b7a0a-d705-4f0c-8c7a-64d8a754d7c6)
Design system: `design/design-system.md`

> One file per module, at `docs/dat-hoa/SRS.md`. It covers only functions that belong to this module. Never write `docs/SRS.md`.

## 1. Purpose

Đặt hoa module gives visitors a dedicated `/dat-hoa` page for preorder intent. Because approved `index.html` contains only navigation links to this page and no booking form markup, this module must not invent submission, validation, success, or storage behaviour. It may only render a static preorder page using approved shared navigation and footer content until a booking-page design is approved.

## 2. Actors

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Guest | Visitor not signed in | View booking page, fill displayed fields, use booking call to action |
| Shop owner | Tiệm hoa Cỏ Lạ operator | Receive booking information through channel defined by implementation and approved copy |

## 3. Scope

**In scope** — functions specified below, by plan title:

- Đặt hoa trước

**Out of scope** — expected work that belongs elsewhere:

- Home page marketing sections — belongs to `home` module.
- Sample flower listing — belongs to `mau-hoa` module.
- Standalone contact page — belongs to `lien-he` module.
- Online payment, account sign-in, order tracking, inventory reservation, and admin order management — deliberately not built; approved plan is public pages only.

## 4. Functional requirements

### 4.1 Đặt hoa trước

**Requirement DAT-HOA-001 — Render approved booking page**

*As a* Guest, *I want to* open the Đặt hoa trước page, *so that* I can see preorder guidance without unapproved submission behaviour.

Behaviour:

1. Guest opens `/dat-hoa`.
2. Page renders these sections in order: Navigation, Hero, Booking form area, Footer.
3. Page uses approved dark editorial visual style, typography, colors, spacing, sticky navigation, hero, form-area styling, primary button styling, note text, and footer defined in approved design and design system.
4. Booking action is informational only: it must not send data, show validation, show success, show error, or persist an order unless a later approved service contract adds that behaviour.

**Acceptance criteria** — each is proved by at least one test case in `docs/dat-hoa/test-cases/dat-hoa-truoc.md`, through story plan criteria.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Guest is on any supported viewport width from 320px upward | Guest opens `/dat-hoa` | Sections appear in order: nav, hero, booking_form, footer |
| AC-2 | Guest opens `/dat-hoa` | Page renders navigation | Navigation shows brand `Tiệm hoa Cỏ Lạ`, links `Mẫu hoa`, `Giờ mở cửa`, and primary small button `Đặt hoa trước` |
| AC-3 | Guest opens `/dat-hoa` | Page renders hero | Hero heading states preorder intent for `Đặt hoa trước`, and lead text tells customers to prepare occasion, budget, preferred colors, recipient, and delivery timing |
| AC-4 | Guest opens `/dat-hoa` | Page renders booking form area | Visible guidance fields or prompts cover name, phone, occasion, budget or flower style, message, delivery address, and delivery time |
| AC-5 | Guest opens `/dat-hoa` | Page renders booking form area | Form-area controls or prompt cards use approved dark rectangular styling, muted uppercase labels, accent border focus state when interactive, and responsive grid layout |
| AC-6 | Guest fills any editable field shown | Guest types valid text into text inputs and textarea | Typed text remains visible in field |
| AC-7 | Guest uses selection field if shown | Guest chooses an available option | Selected option remains visible in field |
| AC-8 | Guest opens `/dat-hoa` | Page renders booking form area | Primary booking button text communicates calling or contacting the shop to finish preorder, not online submission |
| AC-9 | Guest opens `/dat-hoa` | Page renders booking form area | Booking note says tiệm confirms flower availability and delivery fee/time by phone before preparing bouquet |
| AC-10 | Guest opens `/dat-hoa` | Page renders Footer | Footer copy, contact address, and copyright match approved design |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Invalid input | Guest leaves a displayed required field empty and activates booking action | No validation or submission occurs; booking action remains informational unless a later approved service contract adds submission handling |
| Boundary | Guest enters very long text | Field accepts browser-managed text entry; approved design has no character limit message |
| Not permitted | Guest not signed in | Not applicable: page is public and has no signed-in role |
| Conflict | Multiple guests activate booking action at same time | Not applicable: approved design has no persisted order state |
| Upstream failure | External messaging or storage fails | Not applicable: approved design has no external messaging or storage call |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| Shop name | text | yes | Exact text `Tiệm hoa Cỏ Lạ` |
| Navigation links | link list | yes | Targets: home, `mau-hoa/`, `lien-he/`, `dat-hoa/` as approved |
| Booking hero copy | text | yes | Matches approved booking page design |
| Booking labels | label list | yes | Every visible label in approved design appears exactly once |
| Booking field values | text/select/textarea | no | Guest-entered values remain editable in browser |
| Booking button label | text | yes | Matches approved design |
| Booking note | text | yes when shown | Matches approved design |
| Footer copy | text | yes | Matches approved design |

## 5. Screens

| Screen | Section in design | Functions it serves | States that must exist |
|---|---|---|---|
| Booking page | `/dat-hoa`: nav, hero, booking_form, footer | DAT-HOA-001 | default |
| Booking form | `booking_form` | DAT-HOA-001 | default, focus |

## 6. Non-functional requirements

| Area | Requirement |
|---|---|
| Accessibility | Every form input, select, and textarea has a visible label; controls are keyboard reachable; button uses native link or button semantics according to action |
| Responsive | Page works from 320px viewport width upward with no horizontal page scroll; form grid stacks without clipping |
| Localisation | Customer-facing copy is Vietnamese and matches approved design |
| Privacy | No personal data is stored by this module unless a later service contract explicitly adds submission handling |
| Motion | Page respects `prefers-reduced-motion: reduce`; motion elements remain visible without transform |

## 7. Dependencies and assumptions

- **Depends on:** `home`, `mau-hoa`, and `lien-he` routes, for navigation links.
- **Assumption:** Booking page exists in approved multi-page design even though saved `index.html` excerpt available to PM shows home page only; story implementation must use approved design preview for `/dat-hoa`.
- **Assumption:** Form submission destination is not specified in approved design; if implementation adds backend submission, TL service contract defines service errors without adding unapproved UI states.

| Open question | Proposed default | Who decides |
|---|---|---|
| None | Render approved design exactly; do not invent success or error screens | Stakeholder |

## 8. Traceability

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Đặt hoa trước | DAT-HOA-001 | `test-cases/dat-hoa-truoc.md` |
