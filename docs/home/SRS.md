# SRS — Home

Module: `home`
Design: [View the approved design](http://localhost:8080/design/f35b7a0a-d705-4f0c-8c7a-64d8a754d7c6)
Design system: `design/design-system.md`

> One file per module, at `docs/home/SRS.md`. It covers only functions that belong to this module. Never write `docs/SRS.md`.

## 1. Purpose

Home module presents Tiệm hoa Cỏ Lạ at `/` for visitors who need to understand shop offer, sample flowers, past bouquet work, common answers, and location. If missing, visitors lose primary route to booking, sample-flower browsing, and contact information.

## 2. Actors

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Guest | Visitor not signed in | View home page content and follow navigation links |
| Shop owner | Tiệm hoa Cỏ Lạ operator | Provide approved copy, images, and sample-flower content before build |

## 3. Scope

**In scope** — functions specified below, by plan title:

- Tiệm hoa Cỏ Lạ

**Out of scope** — expected work that belongs elsewhere:

- Booking form submission — belongs to `dat-hoa` module.
- Full sample flower list page — belongs to `mau-hoa` module.
- Standalone contact page — belongs to `lien-he` module.
- Admin content editing — deliberately not built; approved plan is public pages only.

## 4. Functional requirements

### 4.1 Tiệm hoa Cỏ Lạ

**Requirement HOME-001 — Render approved home page**

*As a* Guest, *I want to* view Tiệm hoa Cỏ Lạ home page, *so that* I can understand shop offer and choose next action.

Behaviour:

1. Guest opens `/`.
2. Page renders these sections in order: Navigation, Hero, Highlights, Gallery, FAQ, Map & hours, Footer.
3. Page uses approved dark editorial visual style, typography, colors, spacing, section bands, sticky navigation, buttons, card grid, gallery, FAQ accordion, address row, and footer defined in approved design and design system.

**Acceptance criteria** — each is proved by at least one test case in `docs/home/test-cases/tiem-hoa-co-la.md`, through story plan criteria.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Guest is on any supported viewport width from 320px upward | Guest opens `/` | Sections appear in order: nav, hero, feature_grid, gallery, faq, map_hours, footer |
| AC-2 | Guest opens `/` | Page renders navigation | Navigation shows brand `Tiệm hoa Cỏ Lạ`, links `Mẫu hoa`, `Giờ mở cửa`, and primary small button `Đặt hoa trước` |
| AC-3 | Guest uses navigation | Guest activates `Mẫu hoa` | Link targets `mau-hoa/` |
| AC-4 | Guest uses navigation | Guest activates `Giờ mở cửa` | Link targets `lien-he/` |
| AC-5 | Guest uses navigation | Guest activates `Đặt hoa trước` | Link targets `dat-hoa/` |
| AC-6 | Guest opens `/` | Page renders hero | Hero image appears with alt text `Hoa tươi đi chợ mỗi sáng, bó theo dịp của bạn` |
| AC-7 | Guest opens `/` | Page renders hero | Eyebrow `Phan Đình Phùng, Hà Nội`, heading `Hoa tươi đi chợ mỗi sáng, bó theo dịp của bạn`, and subcopy about opening from 2019, seasonal flowers, birthday bouquets, wedding flowers, office flowers, phone preorder, and two-hour Hanoi delivery are visible |
| AC-8 | Guest uses hero actions | Guest activates `Đặt hoa trước` | Link targets `dat-hoa/` |
| AC-9 | Guest uses hero actions | Guest activates `Xem mẫu hoa` | Link targets `mau-hoa/` |
| AC-10 | Guest opens `/` | Page renders Highlights | Heading `Mẫu hoa và giá tham khảo` is visible |
| AC-11 | Approved Mẫu hoa data has four rows | Page renders Highlights | Four cards are visible with titles `Bó hoa sinh nhật theo mùa`, `Bó hồng và cúc tana`, `Hoa cưới cầm tay`, `Hoa để bàn văn phòng` |
| AC-12 | Approved Mẫu hoa data has four rows | Page renders Highlights | Card notes are visible: `Chọn màu theo yêu cầu`, `Mẫu tham khảo, hoa thay theo chợ sáng`, `Cần đặt trước`, `Gọn, dễ đặt trên bàn làm việc` |
| AC-13 | Guest opens `/` | Page renders Gallery | Heading `Ảnh bó hoa đã cắm` is visible |
| AC-14 | Guest opens `/` | Page renders Gallery | Three gallery images and captions are visible: `Bó hoa theo mùa`, `Bó sinh nhật màu nhẹ`, `Hoa để bàn văn phòng` |
| AC-15 | Guest opens `/` | Page renders FAQ | Heading `Khách hay hỏi` is visible |
| AC-16 | FAQ section appears | Guest views FAQ | Four questions are visible: `Bó hoa tặng sinh nhật giá khoảng bao nhiêu?`, `Tiệm có cắm theo yêu cầu không?`, `Có cần đặt trước không?`, `Có giao trong nội thành không?` |
| AC-17 | FAQ question is closed | Guest opens each question | Matching approved answer text becomes visible, and native details control changes marker from `+` to `–` |
| AC-18 | Guest opens `/` | Page renders Map & hours | Heading `Giờ mở cửa và đường tới tiệm` and address `Phố Phan Đình Phùng, Hà Nội` with decorative location icon are visible |
| AC-19 | Guest opens `/` | Page renders Footer | Footer text about small shop on Phan Đình Phùng, morning Quảng Bá flower market, seasonal flowers, birthday, wedding, office, and gifting bouquets is visible |
| AC-20 | Guest opens `/` | Page renders Footer | Footer contact address `Phố Phan Đình Phùng, Hà Nội` and copyright `© Tiệm hoa Cỏ Lạ` are visible |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Missing route | Guest opens `/` | Not applicable: `/` is required route for this function, and approved design has no not-found state |
| Empty data | Mẫu hoa, gallery, FAQ, or contact content absent | Not applicable: approved design supplies fixed content and no empty state |
| Invalid input | Guest enters data | Not applicable: home page has no input fields |
| Not permitted | Guest not signed in | Not applicable: page is public and has no signed-in role |
| Upstream failure | Content dependency unavailable | Not applicable: approved design has no loading or error state; static content must render as approved |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| Shop name | text | yes | Exact text `Tiệm hoa Cỏ Lạ` |
| Navigation links | link list | yes | Targets: `mau-hoa/`, `lien-he/`, `dat-hoa/` |
| Hero image | image | yes | Alt text matches approved design |
| Hero copy | text | yes | Vietnamese copy matches approved design |
| Sample flower rows | list of 4 records | yes | Title and note match approved design |
| Gallery items | list of 3 records | yes | Image alt text and caption match approved design |
| FAQ items | list of 4 records | yes | Summary and answer match approved design |
| Address | text | yes | Exact text `Phố Phan Đình Phùng, Hà Nội` |
| Footer copy | text | yes | Vietnamese copy and copyright match approved design |

## 5. Screens

| Screen | Section in design | Functions it serves | States that must exist |
|---|---|---|---|
| Home page | `data-page="home"`: nav, hero, feature_grid, gallery, faq, map_hours, footer | HOME-001 | default |
| FAQ item | `faq` native details item | HOME-001 | closed, open |

## 6. Non-functional requirements

| Area | Requirement |
|---|---|
| Accessibility | Images have meaningful alt text where content-bearing; decorative SVG icons are `aria-hidden`; navigation uses semantic links; FAQ uses native `details` and `summary` |
| Responsive | Page works from 320px viewport width upward with no horizontal page scroll |
| Localisation | Customer-facing copy is Vietnamese; address and copyright appear exactly as approved |
| Motion | Page respects `prefers-reduced-motion: reduce`; motion elements remain visible without transform |

## 7. Dependencies and assumptions

- **Depends on:** `mau-hoa` module content, for the four sample flower rows reused in Highlights.
- **Depends on:** `dat-hoa` module route, for booking links.
- **Depends on:** `lien-he` module route, for contact link.
- **Assumption:** Approved image assets remain available at their design asset paths or equivalent project-hosted paths; if false, matching images must be supplied before UI verification.

| Open question | Proposed default | Who decides |
|---|---|---|
| None | Use approved design exactly | Stakeholder |

## 8. Traceability

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Tiệm hoa Cỏ Lạ | HOME-001 | `test-cases/tiem-hoa-co-la.md` |
