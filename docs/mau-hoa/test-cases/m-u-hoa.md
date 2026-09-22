# Test cases — Mẫu hoa

Module: `mau-hoa`
Function: Mẫu hoa
Story: `docs/mau-hoa/stories/m-u-hoa.md`
Risk level: Low. Static public page, no inputs, no backend, no permissions, no mutable data; main risks are copy drift, missing rows, bad routes, responsive clipping, and visual mismatch.

## Cases

**Scenario**: Sections render in approved order at minimum supported width
**Given**: Guest uses a 320px-wide supported viewport.
**When**: Guest opens `/mau-hoa`.
**Then**: Visible page sections appear in this order from top to bottom: navigation, hero, item list (`menu_list`), footer.
Traces: SC-1 (MAU-HOA-001 AC-1)
Check: render_url

**Scenario**: Navigation shows approved brand, links, and booking button
**Given**: Guest opens `/mau-hoa`.
**When**: Page renders navigation.
**Then**: Navigation visibly shows brand `Tiệm hoa Cỏ Lạ`, links `Mẫu hoa` and `Giờ mở cửa`, and primary small button `Đặt hoa trước`.
Traces: SC-2 (MAU-HOA-001 AC-2)
Check: render_url

**Scenario**: Navigation links use approved public routes
**Given**: Guest is not signed in and opens `/mau-hoa`.
**When**: Page renders navigation.
**Then**: Brand or home navigation targets home, `Mẫu hoa` targets `mau-hoa/`, contact/open-hours navigation targets `lien-he/`, and `Đặt hoa trước` targets `dat-hoa/`; no sign-in screen appears before navigation.
Traces: SC-3 (MAU-HOA-001 AC-2)
Check: render_url

**Scenario**: Hero heading is visible h1 text
**Given**: Guest opens `/mau-hoa`.
**When**: Page renders hero.
**Then**: Hero contains one visible `h1` with exact text `Mẫu hoa và giá tham khảo`.
Traces: SC-4 (MAU-HOA-001 AC-3)
Check: render_url

**Scenario**: Hero lead explains seasonal morning-market dependency
**Given**: Guest opens `/mau-hoa`.
**When**: Page renders hero.
**Then**: Hero lead text is visible and says samples depend on seasonal flowers from the morning market.
Traces: SC-5 (MAU-HOA-001 AC-3)
Check: render_url

**Scenario**: Item list has exactly four visible rows
**Given**: Approved Mẫu hoa data has four rows.
**When**: Guest opens `/mau-hoa` and page renders item list.
**Then**: Item list shows exactly four visible flower rows.
Traces: SC-6 (MAU-HOA-001 AC-4)
Check: render_url

**Scenario**: Item list shows all approved flower names
**Given**: Approved Mẫu hoa data has four rows.
**When**: Guest opens `/mau-hoa` and page renders item list.
**Then**: Item list visibly includes exact names `Bó hoa sinh nhật theo mùa`, `Bó hồng và cúc tana`, `Hoa cưới cầm tay`, and `Hoa để bàn văn phòng`.
Traces: SC-7 (MAU-HOA-001 AC-5)
Check: render_url

**Scenario**: Item list shows all approved notes
**Given**: Approved Mẫu hoa data has four rows.
**When**: Guest opens `/mau-hoa` and page renders item list.
**Then**: Item list visibly includes exact notes `Chọn màu theo yêu cầu`, `Mẫu tham khảo, hoa thay theo chợ sáng`, `Cần đặt trước`, and `Gọn, dễ đặt trên bàn làm việc`.
Traces: SC-8 (MAU-HOA-001 AC-6)
Check: render_url

**Scenario**: Item list omits prices
**Given**: Guest opens `/mau-hoa`.
**When**: Page renders item list.
**Then**: Item list contains no visible price text, including no Vietnamese đồng symbol `đ`, no `VND`, and no numeric amount formatted as a price.
Traces: SC-9 (MAU-HOA-001 AC-7)
Check: render_url

**Scenario**: Page omits price placeholders
**Given**: Guest opens `/mau-hoa`.
**When**: Page renders item list and surrounding content.
**Then**: Page shows none of these placeholder or invented-price strings: `Liên hệ`, `0đ`, `0 đ`, `Từ`, `Từ ...`, `Từ 0đ`, `Giá liên hệ`, `Đang cập nhật`.
Traces: SC-10 (MAU-HOA-001 AC-8)
Check: render_url

**Scenario**: Footer matches approved shared footer content
**Given**: Guest opens `/mau-hoa`.
**When**: Page renders footer.
**Then**: Footer visibly contains approved Tiệm hoa Cỏ Lạ footer copy, contact/address text for Phan Đình Phùng, Hà Nội, and copyright text matching approved design.
Traces: SC-11 (MAU-HOA-001 AC-9)
Check: render_url

**Scenario**: Minimum-width layout has no horizontal scroll or clipped row text
**Given**: Guest uses a 320px-wide supported viewport.
**When**: Guest opens `/mau-hoa`.
**Then**: Document width does not exceed viewport width, horizontal page scroll is absent, and each visible item name and note fits without clipping within its row.
Traces: SC-12 (MAU-HOA-001 AC-1)
Check: measure_styles

**Scenario**: Desktop layout keeps item content readable without clipping
**Given**: Guest uses a 1280px-wide supported viewport.
**When**: Guest opens `/mau-hoa`.
**Then**: Item list rows remain readable, names and notes are not clipped, and page has no horizontal scroll.
Traces: SC-12 (MAU-HOA-001 AC-1)
Check: measure_styles

**Scenario**: Page uses approved dark editorial visual tokens
**Given**: Guest opens `/mau-hoa`.
**When**: Browser computes styles for `body`, `nav`, `main`, item-list rows, primary button `a[href*="dat-hoa"]`, and `footer`.
**Then**: Computed styles use approved dark background and surface colors, readable main and muted text colors, primary accent for the booking button, approved border treatment, typography scale, spacing, sticky header behavior, and footer styling from design system.
Traces: SC-13 (MAU-HOA-001 AC-1)
Check: measure_styles

**Scenario**: Reduced motion keeps content visible without meaningful animation
**Given**: Guest has `prefers-reduced-motion: reduce` enabled.
**When**: Guest opens `/mau-hoa`.
**Then**: Navigation, hero, item list, and footer remain visible; computed animation and transition durations for main content are zero or effectively disabled, and no visible content depends on transform-based motion.
Traces: SC-14 (MAU-HOA-001 AC-1)
Check: measure_styles
