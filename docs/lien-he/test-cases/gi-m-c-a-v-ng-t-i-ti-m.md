# Test cases — Giờ mở cửa và đường tới tiệm

Module: `lien-he`
Function: Giờ mở cửa và đường tới tiệm
Requirement: LIEN-HE-001
Story: `docs/lien-he/stories/gi-m-c-a-v-ng-t-i-ti-m.md`

Risk level: low. Page is static, public, and has no form, backend, permissions, or external map provider. Main risks are wrong approved copy, invented hours or map actions, inaccessible decorative icon, and responsive clipping.

## Cases

**Scenario**: Sections render in approved order
**Given**: Guest uses any supported viewport width from 320px upward.
**When**: Guest opens `/lien-he`.
**Then**: Browser displays sections in DOM and visual order: navigation, hero, map_hours, footer. No unrelated sections appear between hero and map_hours on this page.
Traces: SC-1 (LIEN-HE-001 AC-1)
Check: render_url

**Scenario**: Navigation shows approved brand, links, and booking action
**Given**: Guest opens `/lien-he`.
**When**: Page renders navigation.
**Then**: Navigation shows brand text `Tiệm hoa Cỏ Lạ`, link `Mẫu hoa` with target `/mau-hoa`, link `Giờ mở cửa` with target `/lien-he`, and small primary action `Đặt hoa trước` with target `/dat-hoa`.
Traces: SC-2 (LIEN-HE-001 AC-2)
Check: render_url

**Scenario**: Hero displays approved contact heading and lead content
**Given**: Guest opens `/lien-he`.
**When**: Page renders hero.
**Then**: Hero heading text is exactly `Giờ mở cửa và đường tới tiệm`; hero lead text includes `Phố Phan Đình Phùng, Hà Nội` and communicates phone confirmation before delivery or pickup.
Traces: SC-3 (LIEN-HE-001 AC-3)
Check: render_url

**Scenario**: Map and hours section displays approved heading
**Given**: Guest opens `/lien-he`.
**When**: Page renders map_hours section.
**Then**: Map & hours heading text is exactly `Giờ mở cửa và đường tới tiệm`.
Traces: SC-4 (LIEN-HE-001 AC-4)
Check: render_url

**Scenario**: Address row displays visible address with decorative hidden icon
**Given**: Guest opens `/lien-he`.
**When**: Page renders map_hours section.
**Then**: Address text `Phố Phan Đình Phùng, Hà Nội` is visible in map_hours, and location SVG in same address row has `aria-hidden="true"` so it is decorative for assistive technology.
Traces: SC-5 (LIEN-HE-001 AC-5)
Check: render_url

**Scenario**: Approved design has no hours rows, so page invents none
**Given**: Approved design for map_hours contains heading `Giờ mở cửa và đường tới tiệm`, address `Phố Phan Đình Phùng, Hà Nội`, and no hours table or day/time rows.
**When**: Guest opens `/lien-he`.
**Then**: Page has no hours table and shows no invented hour values such as day names, day ranges, opening times, or closing times.
Traces: SC-7 (LIEN-HE-001 AC-7)
Check: render_url

**Scenario**: Hours rows are absent because approved design omits them
**Given**: Approved design does not show any visible day or day range and time value in map_hours.
**When**: Page renders map_hours section.
**Then**: No day/time row is present to compare; page remains limited to approved heading and address content for this criterion.
Traces: SC-6 (LIEN-HE-001 AC-6)
Check: render_url

**Scenario**: Approved design has no map actions, so page invents none
**Given**: Approved design for map_hours has an empty map actions container and no map button, no directions button, and no external map link.
**When**: Guest opens `/lien-he`.
**Then**: Page shows no invented map action labels and has no external map or directions anchors in map_hours.
Traces: SC-9 (LIEN-HE-001 AC-9)
Check: render_url

**Scenario**: Map action links are absent because approved design omits them
**Given**: Approved design does not show any visible map or direction action label or target in map_hours.
**When**: Page renders map_hours section.
**Then**: No action label or link target is present to compare; page remains limited to approved heading and address content for this criterion.
Traces: SC-8 (LIEN-HE-001 AC-8)
Check: render_url

**Scenario**: Footer matches approved design copy and contact content
**Given**: Guest opens `/lien-he`.
**When**: Page renders footer.
**Then**: Footer contains copy `Tiệm hoa nhỏ ở phố Phan Đình Phùng. Mỗi sáng tự đi chợ hoa Quảng Bá, chọn hoa theo mùa rồi bó theo dịp: sinh nhật, cưới, văn phòng, một bó tặng người thương cũng được.`, contact address `Phố Phan Đình Phùng, Hà Nội`, and copyright `© Tiệm hoa Cỏ Lạ`.
Traces: SC-10 (LIEN-HE-001 AC-10)
Check: render_url

**Scenario**: Page stays usable at 320px viewport without horizontal clipping
**Given**: Guest uses viewport width 320px.
**When**: Guest opens `/lien-he`.
**Then**: Document has no horizontal page scroll; map_hours address text `Phố Phan Đình Phùng, Hà Nội` is not clipped; no hours text is clipped because approved design omits hours rows.
Traces: SC-11 (LIEN-HE-001 AC-1)
Check: measure_styles

**Scenario**: Dark editorial visual style uses approved page colors
**Given**: Guest opens `/lien-he`.
**When**: Browser computes styles for the page.
**Then**: `body` background color is `#171411`, main text color is `#F3EBDD`, nav remains sticky at top, and primary navigation action `Đặt hoa trước` uses accent background `#D08A9A` with dark text `#171411`.
Traces: SC-1 (LIEN-HE-001 AC-1), SC-2 (LIEN-HE-001 AC-2)
Check: measure_styles
