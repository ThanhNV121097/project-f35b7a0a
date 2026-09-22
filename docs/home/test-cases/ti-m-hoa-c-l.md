# Test cases — Tiệm hoa Cỏ Lạ

Module: `home`
Function: Tiệm hoa Cỏ Lạ
Story: `docs/home/stories/ti-m-hoa-c-l.md`
Risk level: Medium. Static public page has no data writes or permissions, but many approved-copy, link, responsive, accessibility, and visual-order requirements can regress.

## Cases

**Scenario**: Sections render in approved order at mobile width
**Given**: Guest uses viewport width 320px and opens `/`.
**When**: Page finishes rendering.
**Then**: Visible page sections appear in this order: nav, hero, feature_grid, gallery, faq, map_hours, footer.
Traces: SC-1 (HOME-001 AC-1)
Check: render_url

**Scenario**: Sections render in approved order at desktop width
**Given**: Guest uses desktop viewport width and opens `/`.
**When**: Page finishes rendering.
**Then**: Visible page sections appear in this order: nav, hero, feature_grid, gallery, faq, map_hours, footer.
Traces: SC-1 (HOME-001 AC-1)
Check: render_url

**Scenario**: Navigation shows approved brand and actions
**Given**: Guest opens `/`.
**When**: Page renders navigation.
**Then**: Navigation shows brand `Tiệm hoa Cỏ Lạ`, links `Mẫu hoa` and `Giờ mở cửa`, and primary small button `Đặt hoa trước`.
Traces: SC-2 (HOME-001 AC-2)
Check: render_url

**Scenario**: Navigation Mẫu hoa link targets sample-flower route
**Given**: Guest opens `/`.
**When**: Guest activates navigation link `Mẫu hoa`.
**Then**: Browser targets `/mau-hoa`.
Traces: SC-3 (HOME-001 AC-3)
Check: interact_page

**Scenario**: Navigation Giờ mở cửa link targets contact route
**Given**: Guest opens `/`.
**When**: Guest activates navigation link `Giờ mở cửa`.
**Then**: Browser targets `/lien-he`.
Traces: SC-4 (HOME-001 AC-4)
Check: interact_page

**Scenario**: Navigation Đặt hoa trước button targets booking route
**Given**: Guest opens `/`.
**When**: Guest activates navigation button `Đặt hoa trước`.
**Then**: Browser targets `/dat-hoa`.
Traces: SC-5 (HOME-001 AC-5)
Check: interact_page

**Scenario**: Hero image has approved alt text
**Given**: Guest opens `/`.
**When**: Page renders hero.
**Then**: Hero image is present with alt text `Hoa tươi đi chợ mỗi sáng, bó theo dịp của bạn`.
Traces: SC-6 (HOME-001 AC-6)
Check: render_url

**Scenario**: Hero copy matches approved Vietnamese text
**Given**: Guest opens `/`.
**When**: Page renders hero.
**Then**: Hero shows eyebrow `Phan Đình Phùng, Hà Nội`, heading `Hoa tươi đi chợ mỗi sáng, bó theo dịp của bạn`, and subcopy `Tiệm nhỏ mở từ 2019. Hoa theo mùa, bó sinh nhật, hoa cưới, hoa để bàn văn phòng. Đặt trước qua điện thoại, giao nội thành trong hai tiếng.`
Traces: SC-7 (HOME-001 AC-7)
Check: render_url

**Scenario**: Hero Đặt hoa trước action targets booking route
**Given**: Guest opens `/`.
**When**: Guest activates hero action `Đặt hoa trước`.
**Then**: Browser targets `/dat-hoa`.
Traces: SC-8 (HOME-001 AC-8)
Check: interact_page

**Scenario**: Hero Xem mẫu hoa action targets sample-flower route
**Given**: Guest opens `/`.
**When**: Guest activates hero action `Xem mẫu hoa`.
**Then**: Browser targets `/mau-hoa`.
Traces: SC-9 (HOME-001 AC-9)
Check: interact_page

**Scenario**: Highlights heading is visible
**Given**: Guest opens `/`.
**When**: Page renders Highlights section.
**Then**: Heading `Mẫu hoa và giá tham khảo` is visible.
Traces: SC-10 (HOME-001 AC-10)
Check: render_url

**Scenario**: Highlights show four approved card titles
**Given**: Approved Mẫu hoa data has four rows.
**When**: Page renders Highlights section.
**Then**: Four cards are visible with titles `Bó hoa sinh nhật theo mùa`, `Bó hồng và cúc tana`, `Hoa cưới cầm tay`, and `Hoa để bàn văn phòng`.
Traces: SC-11 (HOME-001 AC-11)
Check: render_url

**Scenario**: Highlights show four approved card notes
**Given**: Approved Mẫu hoa data has four rows.
**When**: Page renders Highlights section.
**Then**: Card notes are visible: `Chọn màu theo yêu cầu`, `Mẫu tham khảo, hoa thay theo chợ sáng`, `Cần đặt trước`, and `Gọn, dễ đặt trên bàn làm việc`.
Traces: SC-12 (HOME-001 AC-12)
Check: render_url

**Scenario**: Gallery heading is visible
**Given**: Guest opens `/`.
**When**: Page renders Gallery section.
**Then**: Heading `Ảnh bó hoa đã cắm` is visible.
Traces: SC-13 (HOME-001 AC-13)
Check: render_url

**Scenario**: Gallery shows three approved images and captions
**Given**: Guest opens `/`.
**When**: Page renders Gallery section.
**Then**: Three gallery images are visible with alt text and matching captions `Bó hoa theo mùa`, `Bó sinh nhật màu nhẹ`, and `Hoa để bàn văn phòng`.
Traces: SC-14 (HOME-001 AC-14)
Check: render_url

**Scenario**: FAQ heading is visible
**Given**: Guest opens `/`.
**When**: Page renders FAQ section.
**Then**: Heading `Khách hay hỏi` is visible.
Traces: SC-15 (HOME-001 AC-15)
Check: render_url

**Scenario**: FAQ shows four approved questions
**Given**: FAQ section appears.
**When**: Guest views FAQ.
**Then**: Four questions are visible: `Bó hoa tặng sinh nhật giá khoảng bao nhiêu?`, `Tiệm có cắm theo yêu cầu không?`, `Có cần đặt trước không?`, and `Có giao trong nội thành không?`.
Traces: SC-16 (HOME-001 AC-16)
Check: render_url

**Scenario**: Opening first FAQ reveals answer and marker changes
**Given**: Guest opens `/` and first FAQ item is closed.
**When**: Guest opens `Bó hoa tặng sinh nhật giá khoảng bao nhiêu?`.
**Then**: Answer `Giá tùy mùa hoa và cỡ bó. Bạn nhắn ngân sách, màu thích và người nhận, tiệm bó vừa vặn rồi báo lại trước khi làm.` is visible, and that FAQ marker changes visually from `+` to `–`.
Traces: SC-17 (HOME-001 AC-17)
Check: interact_page

**Scenario**: Opening second FAQ reveals answer and marker changes
**Given**: Guest opens `/` and second FAQ item is closed.
**When**: Guest opens `Tiệm có cắm theo yêu cầu không?`.
**Then**: Answer `Có. Bạn gửi màu, loại hoa thích hoặc ảnh tham khảo. Hoa nào đúng mùa và chợ sáng có đẹp thì tiệm ưu tiên dùng.` is visible, and that FAQ marker changes visually from `+` to `–`.
Traces: SC-17 (HOME-001 AC-17)
Check: interact_page

**Scenario**: Opening third FAQ reveals answer and marker changes
**Given**: Guest opens `/` and third FAQ item is closed.
**When**: Guest opens `Có cần đặt trước không?`.
**Then**: Answer `Nên đặt trước để tiệm giữ hoa đẹp. Hoa cưới và hoa để bàn số lượng nhiều cần báo sớm hơn.` is visible, and that FAQ marker changes visually from `+` to `–`.
Traces: SC-17 (HOME-001 AC-17)
Check: interact_page

**Scenario**: Opening fourth FAQ reveals answer and marker changes
**Given**: Guest opens `/` and fourth FAQ item is closed.
**When**: Guest opens `Có giao trong nội thành không?`.
**Then**: Answer `Có giao trong nội thành trong hai tiếng sau khi chốt mẫu và còn hoa sẵn. Phí giao và giờ nhận tiệm sẽ xác nhận khi bạn đặt.` is visible, and that FAQ marker changes visually from `+` to `–`.
Traces: SC-17 (HOME-001 AC-17)
Check: interact_page

**Scenario**: Map and hours show approved heading, address, and decorative icon
**Given**: Guest opens `/`.
**When**: Page renders Map & hours section.
**Then**: Heading `Giờ mở cửa và đường tới tiệm` and address `Phố Phan Đình Phùng, Hà Nội` are visible, and location icon in `section.map-hours .address svg` has `aria-hidden="true"`.
Traces: SC-18 (HOME-001 AC-18)
Check: render_url

**Scenario**: Footer shows approved shop description
**Given**: Guest opens `/`.
**When**: Page renders Footer.
**Then**: Footer shows `Tiệm hoa nhỏ ở phố Phan Đình Phùng. Mỗi sáng tự đi chợ hoa Quảng Bá, chọn hoa theo mùa rồi bó theo dịp: sinh nhật, cưới, văn phòng, một bó tặng người thương cũng được.`
Traces: SC-19 (HOME-001 AC-19)
Check: render_url

**Scenario**: Footer shows contact address and copyright
**Given**: Guest opens `/`.
**When**: Page renders Footer.
**Then**: Footer shows contact address `Phố Phan Đình Phùng, Hà Nội` and copyright `© Tiệm hoa Cỏ Lạ`.
Traces: SC-20 (HOME-001 AC-20)
Check: render_url

**Scenario**: Page has no horizontal scroll at 320px
**Given**: Guest uses viewport width 320px and opens `/`.
**When**: Page finishes rendering.
**Then**: Document scroll width is not greater than viewport width, and nav, hero, highlights, gallery, FAQ, map_hours, and footer text remain readable without horizontal page scroll.
Traces: SC-21 (HOME-001 AC-1)
Check: measure_styles

**Scenario**: Page remains readable at desktop width
**Given**: Guest uses desktop viewport width and opens `/`.
**When**: Page finishes rendering.
**Then**: Nav, hero, highlights, gallery, FAQ, map_hours, and footer text remain readable in the approved desktop layout with no horizontal page scroll.
Traces: SC-21 (HOME-001 AC-1)
Check: measure_styles

**Scenario**: Reduced motion keeps content visible
**Given**: Guest has `prefers-reduced-motion: reduce` enabled.
**When**: Guest opens `/`.
**Then**: All page content remains visible, and elements named by `[data-motion]` and `[data-stagger-child]` have no transition-dependent transform required to reveal content.
Traces: SC-22 (HOME-001 AC-1)
Check: measure_styles
