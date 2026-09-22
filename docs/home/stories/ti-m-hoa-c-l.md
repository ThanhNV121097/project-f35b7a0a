# Story — Tiệm hoa Cỏ Lạ

Module: `home`
Plan item: Tiệm hoa Cỏ Lạ
Requirement: HOME-001

## User story

As a Guest, I want to view the Tiệm hoa Cỏ Lạ home page at `/`, so that I can understand the shop offer, see sample flowers and past work, get common answers, and choose the right next action.

## In scope

- Render the public home page at `/` as a static Next.js page.
- Preserve approved section order: Navigation, Hero, Highlights, Gallery, FAQ, Map & hours, Footer.
- Match approved dark editorial design, Vietnamese copy, colors, typography, spacing, sticky navigation, buttons, card grid, gallery, FAQ accordion, address row, and footer.
- Show four approved sample flower highlight rows reused from Mẫu hoa content.
- Show three approved gallery items.
- Show four FAQ items with native `details` and `summary` open and closed states.
- Link navigation and CTA actions to `/mau-hoa`, `/dat-hoa`, and `/lien-he` routes using project route conventions.
- Use semantic HTML, meaningful image alt text, decorative icons hidden from assistive tech, and responsive layout from 320px upward.

## Out of scope

- Booking form submission or any persisted preorder data; this belongs to `dat-hoa`.
- Full sample flower list page, filtering, or price-list management; this belongs to `mau-hoa`.
- Standalone contact page content beyond links from home; this belongs to `lien-he`.
- Admin content editing, CMS, backend, database, API, loading state, empty state, error state, authentication, or secrets; project shape is static frontend only.
- Changing approved copy, images, colors, spacing, or FAQ wording to improve them; design is specification.

## UI scope

This story owns the approved Home screen at `data-page="home"` and its visible states:

- Navigation: sticky dark header with brand, `Mẫu hoa`, `Giờ mở cửa`, and small `Đặt hoa trước` action.
- Hero: split image and copy layout with primary and secondary CTAs.
- Highlights: editorial grid section with four flower cards.
- Gallery: three figures with square images and captions.
- FAQ: native accordion with four closed items and open state for each item.
- Map & hours: section heading, decorative location icon, address text, and wayfinding actions shown by approved design.
- Footer: shop description, contact address, and copyright.

No backend or non-visual story stages are needed for this static page.

## Acceptance criteria

- SC-1 [HOME-001 AC-1]: When a Guest opens `/` at any supported viewport width from 320px upward, sections appear in order: nav, hero, feature_grid, gallery, faq, map_hours, footer.
- SC-2 [HOME-001 AC-2]: Navigation shows brand `Tiệm hoa Cỏ Lạ`, links `Mẫu hoa` and `Giờ mở cửa`, and primary small button `Đặt hoa trước`.
- SC-3 [HOME-001 AC-3]: Activating navigation link `Mẫu hoa` targets `/mau-hoa`.
- SC-4 [HOME-001 AC-4]: Activating navigation link `Giờ mở cửa` targets `/lien-he`.
- SC-5 [HOME-001 AC-5]: Activating navigation button `Đặt hoa trước` targets `/dat-hoa`.
- SC-6 [HOME-001 AC-6]: Hero image appears with alt text `Hoa tươi đi chợ mỗi sáng, bó theo dịp của bạn`.
- SC-7 [HOME-001 AC-7]: Hero shows eyebrow `Phan Đình Phùng, Hà Nội`, heading `Hoa tươi đi chợ mỗi sáng, bó theo dịp của bạn`, and approved subcopy covering opening from 2019, seasonal flowers, birthday bouquets, wedding flowers, office flowers, phone preorder, and two-hour Hanoi delivery.
- SC-8 [HOME-001 AC-8]: Activating hero action `Đặt hoa trước` targets `/dat-hoa`.
- SC-9 [HOME-001 AC-9]: Activating hero action `Xem mẫu hoa` targets `/mau-hoa`.
- SC-10 [HOME-001 AC-10]: Highlights section shows heading `Mẫu hoa và giá tham khảo`.
- SC-11 [HOME-001 AC-11]: Highlights section shows four cards titled `Bó hoa sinh nhật theo mùa`, `Bó hồng và cúc tana`, `Hoa cưới cầm tay`, and `Hoa để bàn văn phòng`.
- SC-12 [HOME-001 AC-12]: Highlight card notes show `Chọn màu theo yêu cầu`, `Mẫu tham khảo, hoa thay theo chợ sáng`, `Cần đặt trước`, and `Gọn, dễ đặt trên bàn làm việc`.
- SC-13 [HOME-001 AC-13]: Gallery section shows heading `Ảnh bó hoa đã cắm`.
- SC-14 [HOME-001 AC-14]: Gallery section shows three images and captions: `Bó hoa theo mùa`, `Bó sinh nhật màu nhẹ`, and `Hoa để bàn văn phòng`.
- SC-15 [HOME-001 AC-15]: FAQ section shows heading `Khách hay hỏi`.
- SC-16 [HOME-001 AC-16]: FAQ section shows four questions: `Bó hoa tặng sinh nhật giá khoảng bao nhiêu?`, `Tiệm có cắm theo yêu cầu không?`, `Có cần đặt trước không?`, and `Có giao trong nội thành không?`.
- SC-17 [HOME-001 AC-17]: Opening each FAQ item reveals its matching approved answer text, and its native details marker changes visually from `+` to `–`.
- SC-18 [HOME-001 AC-18]: Map & hours section shows heading `Giờ mở cửa và đường tới tiệm` and address `Phố Phan Đình Phùng, Hà Nội` with decorative location icon hidden from assistive tech.
- SC-19 [HOME-001 AC-19]: Footer shows approved text about the small shop on Phan Đình Phùng, morning Quảng Bá flower market, seasonal flowers, birthday, wedding, office, and gifting bouquets.
- SC-20 [HOME-001 AC-20]: Footer shows contact address `Phố Phan Đình Phùng, Hà Nội` and copyright `© Tiệm hoa Cỏ Lạ`.
- SC-21 [HOME-001 AC-1]: Page has no horizontal scroll at 320px viewport width and remains readable through desktop width.
- SC-22 [HOME-001 AC-1]: With `prefers-reduced-motion: reduce`, content remains visible and transitions do not rely on motion to reveal content.

## Dependencies

- Approved design and `design/design-system.md` are source of truth for visuals and copy.
- `docs/architecture/overview.md` static Next.js frontend constraints apply.
- Mẫu hoa module content supplies four sample flower rows, but this story may use the approved static rows until full `/mau-hoa` page lands.
- `/dat-hoa`, `/mau-hoa`, and `/lien-he` routes are separate stories; links must point to those paths even if target pages are not yet merged.
- Approved image assets must be available at design asset paths or equivalent project-hosted paths before UI verification.
- No external accounts, secrets, backend, database, or API required.
