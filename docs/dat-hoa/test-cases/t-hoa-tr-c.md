# Test Cases — Đặt hoa trước

Module: `dat-hoa`
Story: `docs/dat-hoa/stories/t-hoa-tr-c.md`
Requirement: `DAT-HOA-001`
Risk level: Medium. Public static page has no backend or persistence risk, but user guidance, exact copy, accessibility, responsive layout, and absence of unapproved submission behaviour are core story outcomes.

## Cases

**Scenario**: Supported viewport shows page sections in order without horizontal scroll
**Given**: Guest opens `/dat-hoa` at 320px viewport width, and again at a wider supported viewport.
**When**: Page renders.
**Then**: Visible sections appear in this order: navigation, hero, booking form area, footer; document has no horizontal page scroll at either viewport.
Traces: SC-1 (DAT-HOA-001 AC-1)
Check: render_url

**Scenario**: Navigation shows approved brand, links, and preorder action
**Given**: Guest opens `/dat-hoa`.
**When**: Navigation renders.
**Then**: Navigation shows brand text `Tiệm hoa Cỏ Lạ`, link text `Mẫu hoa`, link text `Giờ mở cửa`, and small primary button text `Đặt hoa trước`.
Traces: SC-2 (DAT-HOA-001 AC-2)
Check: render_url

**Scenario**: Hero states preorder intent and preparation details
**Given**: Guest opens `/dat-hoa`.
**When**: Hero renders.
**Then**: Hero heading states preorder intent for `Đặt hoa trước`; lead text tells customers to prepare occasion, budget, preferred colors, recipient, and delivery timing.
Traces: SC-3 (DAT-HOA-001 AC-3)
Check: render_url

**Scenario**: Booking form area covers all required preorder prompts
**Given**: Guest opens `/dat-hoa`.
**When**: Booking form area renders.
**Then**: Visible labels, prompts, or fields cover name, phone, occasion, budget or flower style, message, delivery address, and delivery time.
Traces: SC-4 (DAT-HOA-001 AC-4)
Check: render_url

**Scenario**: Booking controls or prompt cards use approved dark rectangular styling and grid
**Given**: Guest opens `/dat-hoa` at 320px viewport width, and again at a wider supported viewport.
**When**: Booking form area renders.
**Then**: Booking form area controls or prompt cards have dark rectangular backgrounds, muted uppercase labels, approved spacing, and responsive grid layout that stacks without clipping at 320px and uses grid layout at wider width.
Traces: SC-5 (DAT-HOA-001 AC-5)
Check: measure_styles

**Scenario**: Interactive booking control shows accent focus state
**Given**: Guest opens `/dat-hoa` and booking form area includes at least one interactive input, select, textarea, link, or button.
**When**: Guest moves keyboard focus to the first interactive booking form area control.
**Then**: Focused control shows the approved accent border focus state: computed border color changes to the design accent color `#D08A9A`; native-only focus indicator without the accent border does not satisfy this case.
Traces: SC-5 (DAT-HOA-001 AC-5)
Check: interact_page

**Scenario**: Typed text remains visible in editable text field
**Given**: Guest opens `/dat-hoa` and booking form area includes an editable text input or textarea.
**When**: Guest types `Lan, sinh nhật, 1.000.000đ, tông trắng xanh` into that field.
**Then**: Same field displays `Lan, sinh nhật, 1.000.000đ, tông trắng xanh`.
Traces: SC-6 (DAT-HOA-001 AC-6)
Check: interact_page

**Scenario**: Very long typed text remains browser-managed without character-limit message
**Given**: Guest opens `/dat-hoa` and booking form area includes an editable text input or textarea.
**When**: Guest types a 500-character Vietnamese message into that field.
**Then**: Same field displays entered text according to browser-managed field behaviour, and page shows no character-limit message, validation error, success message, or submission state.
Traces: SC-6 (DAT-HOA-001 AC-6)
Check: interact_page

**Scenario**: Selected option remains visible in selection field
**Given**: Guest opens `/dat-hoa` and booking form area includes a selection field with at least one available non-placeholder option.
**When**: Guest chooses one available option.
**Then**: Same selection field displays chosen option.
Traces: SC-7 (DAT-HOA-001 AC-7)
Check: interact_page

**Scenario**: Primary booking button communicates contact completion, not online submission
**Given**: Guest opens `/dat-hoa`.
**When**: Booking form area renders.
**Then**: Primary booking button text communicates calling or contacting the shop to finish preorder, and does not promise online ordering, online submission, payment, stored order, or instant confirmation.
Traces: SC-8 (DAT-HOA-001 AC-8)
Check: render_url

**Scenario**: Booking note explains phone confirmation before bouquet preparation
**Given**: Guest opens `/dat-hoa`.
**When**: Booking form area renders.
**Then**: Booking note says the shop confirms flower availability and delivery fee/time by phone before preparing bouquet.
Traces: SC-9 (DAT-HOA-001 AC-9)
Check: render_url

**Scenario**: Footer matches approved design content
**Given**: Guest opens `/dat-hoa`.
**When**: Footer renders.
**Then**: Footer copy, contact address, and copyright match approved design exactly.
Traces: SC-10 (DAT-HOA-001 AC-10)
Check: render_url

**Scenario**: Rendered form controls have visible labels and keyboard reachability
**Given**: Guest opens `/dat-hoa` and booking form area renders any input, select, or textarea.
**When**: Guest uses Tab to move through booking form area controls.
**Then**: Each input, select, and textarea is reachable by keyboard and has visible label text identifying its purpose.
Traces: SC-11 (DAT-HOA-001 AC-4)
Check: interact_page

**Scenario**: Booking action does not validate, submit, or persist
**Given**: Guest opens `/dat-hoa`, leaves any displayed required-looking field empty, and has network observation enabled.
**When**: Guest activates primary booking action.
**Then**: Page shows no validation message, success message, error message, loading state, or submitted order state; no external request for order submission is made from this story.
Traces: SC-12 (DAT-HOA-001 AC-8)
Check: interact_page

**Scenario**: Booking action preserves entered values when activated
**Given**: Guest opens `/dat-hoa`, booking form area includes editable fields, and Guest has typed `Minh Anh` into a name field and `Giao 9h sáng` into a message or delivery-time field.
**When**: Guest activates primary booking action.
**Then**: Typed values `Minh Anh` and `Giao 9h sáng` remain visible in their same fields, and no validation, success, or error state appears.
Traces: SC-12 (DAT-HOA-001 AC-8)
Check: interact_page
