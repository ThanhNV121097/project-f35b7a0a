# Story — Mẫu hoa

Module: `mau-hoa`
Requirement: `MAU-HOA-001`
Plan item: Mẫu hoa

## User story

As a Guest, I want to view the Mẫu hoa page, so that I can compare available bouquet samples before booking.

## In scope

- Build static `/mau-hoa` page from approved design.
- Render sections in this order: Navigation, Hero, Item list, Footer.
- Show approved shop navigation copy and routes.
- Show approved Mẫu hoa hero heading and lead text.
- Show exactly four approved sample flower rows with names and notes.
- Omit all prices, missing-price labels, filters, search, cart, checkout, loading, empty, error, and signed-in states.
- Match approved dark editorial visual style, typography, colors, spacing, sticky navigation, menu list rows, and footer.
- Keep page responsive from 320px upward with no horizontal page scroll.

## Out of scope

- Home page highlight cards; handled by `home` module.
- Booking form behavior or submitted states; handled by `dat-hoa` module.
- Contact/location page body content; handled by `lien-he` module.
- Search, filtering, cart, checkout, inventory, and custom quote workflow; not in approved design.
- Admin editing or content management; static frontend only.
- Backend, API, database, secrets, loading, empty, and error states; architecture says static content only.
- Any prices or placeholder amounts; approved design has no visible prices for this page.

## UI scope

- Screen: `/mau-hoa`.
- States: default only.
- Sections: sticky Navigation, Hero, Item list (`menu_list`), Footer.
- Navigation uses brand `Tiệm hoa Cỏ Lạ`, links `Mẫu hoa`, `Giờ mở cửa`, and small primary button `Đặt hoa trước` with approved routes.
- Hero shows heading `Mẫu hoa và giá tham khảo` and lead text explaining samples depend on seasonal flowers from morning market.
- Item list shows four text rows, each with approved flower name and note, using menu-list row styling from approved design.
- Footer copy, address/contact text, and copyright match approved design.
- Customer-facing copy remains Vietnamese.

## Acceptance criteria

- SC-1 [MAU-HOA-001 AC-1]: At any supported viewport width from 320px upward, opening `/mau-hoa` shows sections in DOM and visual order: nav, hero, menu_list, footer.
- SC-2 [MAU-HOA-001 AC-2]: Navigation shows brand `Tiệm hoa Cỏ Lạ`, links `Mẫu hoa` and `Giờ mở cửa`, and primary small button `Đặt hoa trước`.
- SC-3 [MAU-HOA-001 AC-2]: Navigation links target approved routes for home, `mau-hoa/`, `lien-he/`, and `dat-hoa/` without requiring sign-in.
- SC-4 [MAU-HOA-001 AC-3]: Hero shows heading `Mẫu hoa và giá tham khảo` as visible `h1` text.
- SC-5 [MAU-HOA-001 AC-3]: Hero lead text visibly explains samples depend on seasonal flowers from the morning market.
- SC-6 [MAU-HOA-001 AC-4]: Item list renders exactly four visible rows.
- SC-7 [MAU-HOA-001 AC-5]: Item list includes names `Bó hoa sinh nhật theo mùa`, `Bó hồng và cúc tana`, `Hoa cưới cầm tay`, and `Hoa để bàn văn phòng`.
- SC-8 [MAU-HOA-001 AC-6]: Item list includes notes `Chọn màu theo yêu cầu`, `Mẫu tham khảo, hoa thay theo chợ sáng`, `Cần đặt trước`, and `Gọn, dễ đặt trên bàn làm việc`.
- SC-9 [MAU-HOA-001 AC-7]: No price text is visible anywhere in item list.
- SC-10 [MAU-HOA-001 AC-8]: Page shows no missing-price copy, placeholder amount, or invented price such as `Liên hệ`, `0đ`, or `Từ ...`.
- SC-11 [MAU-HOA-001 AC-9]: Footer copy, contact address, and copyright match approved design.
- SC-12 [MAU-HOA-001 AC-1]: Page remains readable and usable from 320px viewport width upward with no horizontal page scroll and without clipping item names or notes.
- SC-13 [MAU-HOA-001 AC-1]: Page uses approved dark editorial tokens for background, surface, text, muted text, primary accent, borders, typography, spacing, sticky header, and footer.
- SC-14 [MAU-HOA-001 AC-1]: If any motion is used, `prefers-reduced-motion: reduce` keeps all content visible and removes meaningful animation or transform.

## Dependencies

- Approved design and `design/design-system.md` are source of truth for visual style and copy.
- `docs/architecture/overview.md` fixes project shape as static frontend only.
- `/dat-hoa` route must exist for booking navigation.
- `/lien-he` route must exist for contact/navigation link target.
- Four Mẫu hoa rows are shared with home highlights; future content changes must update both modules together.
- No external accounts, secrets, backend services, database records, or runtime data dependencies.
