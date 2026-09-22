# SRS — Mẫu hoa

Module: `mau-hoa`
Design: [View the approved design](http://localhost:8080/design/f35b7a0a-d705-4f0c-8c7a-64d8a754d7c6)
Design system: `design/design-system.md`

> One file per module, at `docs/mau-hoa/SRS.md`. It covers only functions that belong to this module. Never write `docs/SRS.md`.

## 1. Purpose

Mẫu hoa module gives visitors a dedicated `/mau-hoa` page for sample bouquet types and reference information. It helps customers choose what to ask about before contacting or booking.

## 2. Actors

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Guest | Visitor not signed in | View sample flower list and follow navigation links |
| Shop owner | Tiệm hoa Cỏ Lạ operator | Provide approved sample flower names, notes, and prices if shown by design |

## 3. Scope

**In scope** — functions specified below, by plan title:

- Mẫu hoa

**Out of scope** — expected work that belongs elsewhere:

- Home page highlight cards — belongs to `home` module and reuses this content.
- Booking form — belongs to `dat-hoa` module.
- Contact and location page — belongs to `lien-he` module.
- Filtering, search, cart, checkout, inventory, and custom quote workflow — deliberately not built; approved design shows a static menu list only.

## 4. Functional requirements

### 4.1 Mẫu hoa

**Requirement MAU-HOA-001 — Render approved sample flower page**

*As a* Guest, *I want to* view the Mẫu hoa page, *so that* I can compare available bouquet samples before booking.

Behaviour:

1. Guest opens `/mau-hoa`.
2. Page renders these sections in order: Navigation, Hero, Item list, Footer.
3. Item list reads the approved Mẫu hoa data with four rows.
4. Page uses approved dark editorial visual style, typography, colors, spacing, sticky navigation, hero, menu list rows, price formatting if prices are shown, and footer defined in approved design and design system.

**Acceptance criteria** — each is proved by at least one test case in `docs/mau-hoa/test-cases/mau-hoa.md`, through story plan criteria.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Guest is on any supported viewport width from 320px upward | Guest opens `/mau-hoa` | Sections appear in order: nav, hero, menu_list, footer |
| AC-2 | Guest opens `/mau-hoa` | Page renders navigation | Navigation shows brand `Tiệm hoa Cỏ Lạ`, links `Mẫu hoa`, `Giờ mở cửa`, and primary small button `Đặt hoa trước` |
| AC-3 | Guest opens `/mau-hoa` | Page renders hero | Hero heading `Mẫu hoa và giá tham khảo` is visible, and lead text explains samples depend on seasonal flowers from the morning market |
| AC-4 | Approved Mẫu hoa data has four rows | Page renders item list | Exactly four rows are visible |
| AC-5 | Approved Mẫu hoa data has four rows | Page renders item list | Rows include names `Bó hoa sinh nhật theo mùa`, `Bó hồng và cúc tana`, `Hoa cưới cầm tay`, `Hoa để bàn văn phòng` |
| AC-6 | Approved Mẫu hoa data has four rows | Page renders item list | Rows include notes `Chọn màu theo yêu cầu`, `Mẫu tham khảo, hoa thay theo chợ sáng`, `Cần đặt trước`, `Gọn, dễ đặt trên bàn làm việc` where approved design shows notes |
| AC-7 | Approved design shows prices for Mẫu hoa rows | Page renders item list | Each visible price appears beside its row, uses tabular numeric styling, and matches approved design text |
| AC-8 | Approved design omits prices for a row | Page renders item list | Row does not invent a price; if approved design shows missing-price text, that exact text appears |
| AC-9 | Guest opens `/mau-hoa` | Page renders Footer | Footer copy, contact address, and copyright match approved design |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Empty data | Mẫu hoa data has zero rows | Not applicable: approved design requires four rows and has no empty state |
| Missing field | A row lacks a name or note | Not applicable: approved design supplies complete displayed row content |
| Invalid input | Guest enters data | Not applicable: page has no input fields |
| Not permitted | Guest not signed in | Not applicable: page is public and has no signed-in role |
| Upstream failure | Content dependency unavailable | Not applicable: approved design has no loading or error state; static content must render as approved |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| Shop name | text | yes | Exact text `Tiệm hoa Cỏ Lạ` |
| Navigation links | link list | yes | Targets: home, `mau-hoa/`, `lien-he/`, `dat-hoa/` as approved |
| Page hero copy | text | yes | Matches approved sample flower page design |
| Flower name | text | yes | Four approved names listed in AC-5 |
| Flower note | text | yes | Four approved notes listed in AC-6 |
| Flower price | text | no | Appears only when approved design shows price text |
| Footer copy | text | yes | Matches approved design |

## 5. Screens

| Screen | Section in design | Functions it serves | States that must exist |
|---|---|---|---|
| Sample flower page | `/mau-hoa`: nav, hero, menu_list, footer | MAU-HOA-001 | default |
| Item list | `menu_list` | MAU-HOA-001 | default |

## 6. Non-functional requirements

| Area | Requirement |
|---|---|
| Accessibility | Item list content is readable as text; row images, if approved design shows them, have product-specific alt text |
| Responsive | Page works from 320px viewport width upward with no horizontal page scroll; menu rows do not clip names or prices |
| Localisation | Customer-facing copy is Vietnamese; prices, if shown, use Vietnamese formatting as approved |
| Motion | Page respects `prefers-reduced-motion: reduce`; motion elements remain visible without transform |

## 7. Dependencies and assumptions

- **Depends on:** `dat-hoa` route, for booking navigation.
- **Depends on:** `lien-he` route, for contact navigation.
- **Assumption:** Four Mẫu hoa rows are shared with `home` Highlights; if changed later, both modules need same content update.
- **Assumption:** Sample page exists in approved multi-page design even though saved `index.html` excerpt available to PM shows home page only; story implementation must use approved design preview for `/mau-hoa`.

| Open question | Proposed default | Who decides |
|---|---|---|
| None | Render approved design exactly; do not invent filtering, empty, loading, or error states | Stakeholder |

## 8. Traceability

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Mẫu hoa | MAU-HOA-001 | `test-cases/mau-hoa.md` |
