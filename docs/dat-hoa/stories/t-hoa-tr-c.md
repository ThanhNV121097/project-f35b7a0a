# Story — Đặt hoa trước

Module: `dat-hoa`
Plan item: Đặt hoa trước
Requirement: `DAT-HOA-001`

## User story

As a Guest, I want to open the Đặt hoa trước page, so that I can see preorder guidance and contact the shop without expecting online submission.

## In scope

- Add static `/dat-hoa` page content for preorder intent.
- Render sections in this order: navigation, hero, booking form area, footer.
- Match approved dark editorial design, Vietnamese copy, typography, colors, spacing, sticky navigation, form-area styling, primary action styling, note text, and footer.
- Show visible prompts or controls for name, phone, occasion, budget or flower style, message, delivery address, and delivery time.
- Keep any displayed fields editable in browser only; values do not leave page.
- Present booking action as phone/contact completion, not online order submission.

## Out of scope

- Backend, API, database, order storage, email/SMS/messaging integration, payment, inventory reservation, account sign-in, order tracking, and admin order management.
- Client-side or server-side validation, submission, success state, error state, loading state, empty state, or persisted booking state.
- Home page marketing sections, sample flower listing, gallery, FAQ, standalone contact page, map, and opening-hours content outside shared navigation/footer.
- Changing approved design copy, color, layout, or adding unapproved form behaviour.

## UI scope

Screen touched: `/dat-hoa` booking page.

States touched:

- Default page state from 320px viewport width upward.
- Focus state for interactive form controls when controls are rendered.
- Native typed/selected field value state in browser.

Sections:

1. Navigation (`nav`): sticky dark header with brand `Tiệm hoa Cỏ Lạ`, links `Mẫu hoa`, `Giờ mở cửa`, and small primary `Đặt hoa trước` action.
2. Hero (`hero`): preorder heading and lead text explaining phone-confirmation model and information customers should prepare.
3. Booking form area (`booking_form`): visible prompts/controls, contact-first primary action, and note about phone confirmation of flower availability plus delivery fee/time.
4. Footer (`footer`): approved shop description, contact address, and copyright.

## Acceptance criteria

- SC-1 [DAT-HOA-001 AC-1]: Given Guest opens `/dat-hoa` at any viewport width from 320px upward, page shows navigation, hero, booking form area, and footer in that order with no horizontal page scroll.
- SC-2 [DAT-HOA-001 AC-2]: Given page renders navigation, Guest sees brand text `Tiệm hoa Cỏ Lạ`, links `Mẫu hoa` and `Giờ mở cửa`, and small primary button text `Đặt hoa trước`.
- SC-3 [DAT-HOA-001 AC-3]: Given page renders hero, Guest sees heading that states preorder intent for `Đặt hoa trước` and lead text telling customers to prepare occasion, budget, preferred colors, recipient, and delivery timing.
- SC-4 [DAT-HOA-001 AC-4]: Given page renders booking form area, Guest sees visible labels, prompts, or fields covering name, phone, occasion, budget or flower style, message, delivery address, and delivery time.
- SC-5 [DAT-HOA-001 AC-5]: Given page renders booking form area, form-area controls or prompt cards use approved dark rectangular styling, muted uppercase labels, accent border focus state when interactive, and responsive grid layout.
- SC-6 [DAT-HOA-001 AC-6]: Given Guest types valid text into any editable text input or textarea shown in booking form area, typed text remains visible in that same field.
- SC-7 [DAT-HOA-001 AC-7]: Given Guest chooses an option in any selection field shown in booking form area, selected option remains visible in that same field.
- SC-8 [DAT-HOA-001 AC-8]: Given page renders booking form area, primary booking button text communicates calling or contacting shop to finish preorder and does not promise online submission.
- SC-9 [DAT-HOA-001 AC-9]: Given page renders booking form area, booking note says shop confirms flower availability and delivery fee/time by phone before preparing bouquet.
- SC-10 [DAT-HOA-001 AC-10]: Given page renders footer, Guest sees footer copy, contact address, and copyright matching approved design.
- SC-11 [DAT-HOA-001 AC-4]: Given any input, select, or textarea is rendered, each control has visible label text and is reachable by keyboard.
- SC-12 [DAT-HOA-001 AC-8]: Given Guest activates booking action, no validation, success message, error message, external request, or order persistence occurs from this story.

## Dependencies

- `home`, `mau-hoa`, and `lien-he` routes exist or will exist for navigation targets.
- Approved design and `design/design-system.md` are source of truth for copy and visual styling.
- Static frontend architecture only; no backend, database, API, runtime secrets, or external account.
- No stakeholder answer blocks this story.
