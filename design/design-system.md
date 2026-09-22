# Design System — Tiệm hoa Cỏ Lạ

> Source of truth: approved `index.html`.
> Every value below is extracted from it. Changing value here without changing approved design is defect.

Last updated: 2026-09-22

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#171411` | Page background, form fields, sticky nav background |
| `--color-surface` | `#211C18` | Alternating section band and surface field background |
| `--color-text` | `#F3EBDD` | Body text, headings, ghost button text |
| `--color-text-muted` | `#979187` | Secondary text, captions, nav links, notes |
| `--color-primary` | `#D08A9A` | Primary button, accent rule, icons, FAQ marker, small labels |
| `--color-primary-text` | `#171411` | Text on primary button and solid CTA |
| `--color-border` | `#3D3431` | Default border, divider, form border |
| `--color-border-strong` | `#55504A` | Card top rule and menu group divider |
| `--color-accent-surface` | `#2D2221` | Open FAQ background and outline CTA surface |

#### Contrast audit

Every text-on-background pair actually used. Body text ≥ 4.5:1, large text (≥ 18.66px bold or ≥ 24px) ≥ 3:1, UI borders ≥ 3:1.

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text` | `--color-bg` | `15.0:1` | AA |
| `--color-text` | `--color-surface` | `13.3:1` | AA |
| `--color-text-muted` | `--color-bg` | `5.6:1` | AA |
| `--color-text-muted` | `--color-surface` | `5.0:1` | AA |
| `--color-primary` | `--color-bg` | `6.9:1` | AA |
| `--color-primary` | `--color-surface` | `6.1:1` | AA |
| `--color-primary-text` | `--color-primary` | `6.9:1` | AA |
| `--color-bg` | `--color-primary` | `6.9:1` | AA |
| `--color-border` | `--color-bg` | `1.6:1` | FAIL for UI border |
| `--color-border` | `--color-surface` | `1.4:1` | FAIL for UI border |
| `--color-border-strong` | `--color-bg` | `2.5:1` | FAIL for UI border |
| `--color-border-strong` | `--color-surface` | `2.2:1` | FAIL for UI border |

### 1.2 Spacing

Base unit: `4px`. Every margin, padding, and gap uses one of these values, except listed deviations.

| Token | Value |
|---|---|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `24px` |
| `--space-6` | `32px` |
| `--space-7` | `48px` |
| `--space-8` | `64px` |
| `--space-9` | `96px` |
| `--space-section-gap` | `112px` |
| `--space-gutter` | `clamp(20px,5.5vw,72px)` |
| `--space-page-max` | `1160px` |
| `--space-measure` | `64ch` |

### 1.3 Typography

Font families:

- Body: `'Inter', system-ui, sans-serif`, loaded from Google Fonts with Vietnamese and Latin subsets.
- Headings: `'Playfair Display', Georgia, serif`, loaded from Google Fonts with Vietnamese and Latin subsets.

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-label` | `12.5px` | browser normal | `700` | Eyebrow, form labels, menu group name |
| `--text-caption` | `13px` | browser normal | `400` | Copyright |
| `--text-small` | `14px` | browser normal | `400` | Captions, cite, missing text, small nav |
| `--text-button-small` | `14px` | browser normal | `600` | Small button |
| `--text-button` | `15px` | browser normal | `600` | Button, nav links |
| `--text-body` | `17px` | `1.7` | `400` | Body text and menu names |
| `--text-body-mobile` | `16px` | `1.7` | `400` | Body text below `560px` |
| `--text-note` | `15px` | `1.55` | `400` | Card note |
| `--text-lead` | `19px` | `1.6` | `400` | Hero subcopy |
| `--text-card-title` | `18px` | browser normal | inherited | Card title |
| `--text-h3` | `19px` | `1.3` | `500` | h3 |
| `--text-quote` | `21px` | `1.45` | `500` | Story quote |
| `--text-h2` | `clamp(27px,3.4vw,42px)` | `1.12` | `500` | h2 in one-column sections |
| `--text-h2-grid` | `clamp(24px,2.1vw,30px)` | `1.2` | `500` | h2 in desktop editorial grid |
| `--text-cta` | `clamp(22px,2.8vw,32px)` | `1.2` | `500` | CTA headline |
| `--text-hero` | `clamp(38px,5.2vw,84px)` | `1.04` | `500` | Hero headline |
| `--text-hero-mobile` | `36px` | `1.04` | `500` | Hero headline below `560px` |

Heading levels are used in order: `h1`, then section `h2`, then card `h3`.

| Token | Value | Used for |
|---|---|---|
| `--font-weight-body` | `400` | Running text |
| `--font-weight-semibold` | `600` | Buttons, FAQ summary, hour values |
| `--font-weight-bold` | `700` | Labels, prices |
| `--font-weight-heading` | `500` | h1-h3, display text |
| `--tracking-display` | `-0.02em` | Hero headline and h1 |
| `--tracking-heading-soft` | `calc(-0.02em * .7)` | h2 |
| `--tracking-h3` | `-.005em` | h3 |
| `--tracking-brand` | `-.01em` | Brand text |
| `--tracking-label` | `0.14em` | Labels and menu group names |
| `--tracking-button` | `.005em` | Buttons |
| `--tracking-caption` | `.02em` | Copyright and cite |

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-none` | `0px` | Cards, images, inputs, buttons, sections |
| `--radius-round` | `50%` | Brand mark and social circle |
| `--border-width` | `1px` | Default rule and border |
| `--border-width-strong` | `2px` | Section heading mark, card top rule, accent quote rule |
| `--duration-fast` | `120ms` | Button, link, form, social hover/focus changes |
| `--duration-medium` | `160ms` | Card hover border |
| `--duration-hover-lift` | `.2s` | Optional lift hover motion |
| `--duration-scroll-motion` | `500ms` | Page block fade motion in approved markup |
| `--duration-motion-default` | `600ms` | Generic `[data-motion]` default |
| `--easing-standard` | `ease` | Hover and focus transitions |
| `--easing-entrance` | `cubic-bezier(.2,.7,.3,1)` | Page block entrance motion |
| `--motion-distance-default` | `24px` | Generic motion transform distance |
| `--motion-distance-page` | `0px` | Approved page block fade distance |
| `--icon-stroke` | `2.4` | SVG line icon stroke |

Motion respects `prefers-reduced-motion: reduce`: animations and transitions reduce to `.01ms`, and motion elements render visible with no transform.

### 1.5 Layout and breakpoints

| Name | Min width | Container | Columns | Gutter |
|---|---|---|---|---|
| `base` | `0px` | `max-width:1160px` | 1 column unless component defines grid | `clamp(20px,5.5vw,72px)` |
| `sm` | `560px` max rule | Same | Mobile nav, body, card, newsletter adjustments | Same |
| `md` | `820px` max rule | Same | Hero, intro, story collapse; gallery becomes 2 columns | Same |
| `lg` | `940px` | Same | Editorial grid: `minmax(0,16rem) minmax(0,1fr)` | Same plus `64px` column gap |

Z-index scale:

| Layer | Value |
|---|---|
| Base | `0` |
| Sticky header | `10` |

## 2. Components

### 2.1 Sticky navigation

**Purpose** — Keep brand, key page links, and booking action visible.

**Anatomy** — `[brand text] [nav links] [small primary button]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Sticky dark nav | `--color-bg`, `--color-border`, `--space-5`, `--space-gutter`, `--text-button` | Site header |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | Content height | `24px clamp(20px,5.5vw,72px)` | `--text-button` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Dark sticky bar with bottom rule | `--color-bg`, `--color-border` |
| Hover | Link text changes from muted to text color | `--color-text-muted`, `--color-text`, `--duration-fast` |

**Accessibility** — Use semantic `nav`. Links remain keyboard-focusable. Minimum primary action height is `38px`; header links rely on text area and nav spacing.

### 2.2 Brand wordmark

**Purpose** — Identify shop; do not use for generic headings.

**Anatomy** — `[brand text]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Text brand | `--font-display`, `--font-weight-heading`, `--tracking-brand` | Header brand |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | Text height | `0` | `20px`, display font |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Display wordmark in main text color | `--color-text` |

**Accessibility** — Brand link points home and uses readable shop name text.

### 2.3 Button

**Purpose** — Use for primary booking and secondary navigation actions.

**Anatomy** — `[label]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Primary | `--color-primary`, `--color-primary-text`, `--radius-none` | Main booking action |
| Ghost | `--color-border`, `--color-text`, `--radius-none` | Secondary action |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | `50px` | `0 26px` | `--text-button` |
| Small | `38px` | `0 16px` | `--text-button-small` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Inline-flex rectangle, no radius | `--radius-none`, `--duration-fast` |
| Hover | Moves up `1px`; primary opacity `.9`; ghost border becomes text color | `--color-primary`, `--color-border`, `--color-text` |
| Active | Transform returns to none | `--duration-fast` |

**Accessibility** — Use links for navigation and buttons for actions. Hit target is at least `50px` for default button; small button is `38px` and must be placed with enough surrounding spacing to reach `44px` practical target. Focus uses browser default because CSS does not remove button outline.

### 2.4 Hero section

**Purpose** — Introduce shop promise and primary tasks.

**Anatomy** — `[image] [eyebrow] [h1] [lead text] [actions]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Split hero | `--text-hero`, `--space-7`, `--space-9`, `--color-text-muted` | Home page hero with image |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | Content height | `clamp(56px,9vw,132px) 0 96px` | `--text-hero` |
| Mobile | Content height | Same section padding after responsive collapse | `--text-hero-mobile` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Two-column layout above `820px`; one column below | `--space-7`, `--text-hero`, `--text-lead` |

**Accessibility** — Hero image has meaningful Vietnamese alt text. H1 appears once and uses readable text over solid background, not image overlay.

### 2.5 Section heading

**Purpose** — Mark each content section with consistent editorial hierarchy.

**Anatomy** — `[accent rule] [h2 text]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Standard h2 | `--font-display`, `--text-h2`, `--color-primary`, `--border-width-strong` | Section titles |
| Editorial grid h2 | `--text-h2-grid` | Desktop sections inside editorial grid |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | Text height plus rule | `0` | `--text-h2` |
| Desktop grid | Text height plus rule | `0` | `--text-h2-grid` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | 28px accent rule above heading | `--color-primary`, `--space-5` |

**Accessibility** — Heading levels follow `h1`, then `h2`, then `h3`; do not skip levels for visual sizing.

### 2.6 Editorial grid section

**Purpose** — Align section headings in narrow left column and content in wide right column on desktop.

**Anatomy** — `[h2] [section content]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Standard grid | `--space-8`, `--space-gutter`, `--space-page-max` | Non-hero, non-gallery content above `940px` |
| Band | `--color-surface` | Alternating background sections |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | Content height | `96px clamp(20px,5.5vw,72px)` | Inherited |
| Below `939px` | Content height | `64px clamp(20px,5.5vw,72px)` | Inherited |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | One column under `940px`, two-column editorial grid above | `--space-8`, `--space-9` |

**Accessibility** — Content order remains heading before content in DOM.

### 2.7 Card grid and flower card

**Purpose** — Show sample flower products and notes; not for full price-list rows.

**Anatomy** — `[optional image] [h3 title] [note] [optional price]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Four-column sample grid | `--space-2`, `--space-5`, `--color-border-strong` | Home sample flower section |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | Content height | `16px 0 0` | `--text-card-title`, `--text-note` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Strong top rule, no surrounding box | `--color-border-strong`, `--border-width-strong` |
| Hover | Top rule changes to accent | `--color-primary`, `--duration-medium` |

**Accessibility** — Each card uses heading text. If image appears, provide product-specific alt text.

### 2.8 Gallery

**Purpose** — Show past bouquet photos and captions.

**Anatomy** — `[figure: image + figcaption]` repeated.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Three-column gallery | `--space-4`, `--radius-none`, `--text-small` | Desktop gallery |
| Two-column gallery | `--space-4` | Below `820px` |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | Square images | `0` | `--text-small` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Square images with caption below | `--radius-none`, `--color-text-muted` |

**Accessibility** — Each image has concrete alt text and visible caption.

### 2.9 FAQ accordion

**Purpose** — Answer common flower-order questions with expandable details.

**Anatomy** — `[summary with +/– marker] [answer]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| FAQ item | `--color-border`, `--color-primary`, `--color-accent-surface` | Customer questions |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | Content height | Summary `24px 0`, answer `0 0 24px calc(14px + 16px)` | `--text-body` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Closed | `+` marker, border divider, answer hidden by native `details` | `--color-border`, `--color-primary` |
| Open | `–` marker, accent-soft background expanded through gutter | `--color-accent-surface` |
| Hover | Summary text changes to accent | `--color-primary`, `--duration-fast` |

**Accessibility** — Use native `details` and `summary` for keyboard and screen-reader behavior. Do not remove summary semantics.

### 2.10 Map and hours contact block

**Purpose** — Show shop location and wayfinding actions.

**Anatomy** — `[h2] [icon + address] [actions]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Address row | `--color-primary`, `--icon-stroke`, `--space-3`, `--text-body` | Location text |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | Content height | `0` | `--text-body` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Accent line icon before address | `--color-primary`, `--icon-stroke` |

**Accessibility** — SVG icon is `aria-hidden`; address text remains visible text.

### 2.11 Footer

**Purpose** — Close page with shop description, contact, and copyright.

**Anatomy** — `[about] [contact] [copyright]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Multi-column footer | `--color-border`, `--space-7`, `--space-8`, `--color-text-muted` | Site footer |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | Content height | `64px 0 48px` | `--text-body`, `--text-caption` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Top border, muted contact and copyright text | `--color-border`, `--color-text-muted` |

**Accessibility** — Contact icons are decorative and hidden from assistive tech; contact text remains readable.

### 2.12 Form field

**Purpose** — Style booking and newsletter inputs when forms appear on project pages.

**Anatomy** — `[label] [input/select/textarea]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Dark field | `--color-bg`, `--color-border`, `--color-text`, `--radius-none` | Forms on ground background |
| Surface field | `--color-surface`, `--color-border`, `--color-text`, `--radius-none` | Forms inside banded sections |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | Content height | `13px 14px` | `16px`, inherited line-height |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Dark rectangular field with border | `--color-bg`, `--color-border`, `--color-text` |
| Focus | Native outline removed; border changes to accent | `--color-primary`, `--duration-fast` |

**Accessibility** — Every input needs visible label. Approved CSS removes focus outline and replaces it with border-color only; see Known deviations.

## 3. Content and formatting

- Voice and tone: warm, local, practical, specific to Hanoi flower ordering; Vietnamese customer-facing copy.
- Date, time, number, and currency formats: Vietnamese locale. Prices use `font-variant-numeric: tabular-nums`; approved home page has no visible prices or hours values.
- Capitalization rule: Vietnamese sentence case for headings, labels, nav links, and buttons; small labels render uppercase by CSS.
- Empty-state and error-message wording pattern: approved page does not draw loading, empty, or error states. Do not invent them for static sections.
- Product copy favors concrete operations: seasonal flowers, preorder by phone, delivery within Hanoi in two hours, owner buys flowers at Quảng Bá each morning.

## 4. Known deviations

Places where approved design does not follow its own rules or anti-patterns in `references/ai-defaults.md`. Record, do not silently fix.

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| Borders and dividers | `#3D3431` and `#55504A` are below 3:1 against dark backgrounds for UI boundaries. | Approved design uses subtle editorial hairlines. | If borders must communicate control boundaries, raise contrast in design first. |
| Form fields | CSS removes focus outline and replaces it with border-color only. | Approved CSS draws this state. | For built forms, confirm whether border-only focus is enough or add visible focus token in design. |
| Small nav button | Small button height is `38px`, below 44px hit-target guidance. | Approved header uses compact nav. | Keep surrounding spacing or increase control size in design before implementation. |
| Spacing values | Some component values are outside named scale: button horizontal padding `26px`, input padding `13px 14px`, menu image `52px`, heading mark `28px`, social size `38px`, gallery strip item `300px`, FAQ marker width `14px`. | Approved CSS includes these exact values. | Normalize only through design change. |
| Motion | Blocks use scroll-triggered fade with `500ms`; generic motion utilities also define transform motions and hover lift/shadow not visible on current approved markup. | CSS is part of approved `index.html`; current blocks set distance to `0px`. | Use only drawn fade state unless future approved screens show other motion modes. |
| Component states | Buttons and links have hover/active states, but no explicit disabled states in approved design. | Approved design does not draw disabled controls. | Add disabled state only after approved design shows it. |
| AI default: gradients | No decorative gradients are used except Studio placeholder pattern not rendered as real content. | Approved design avoids gradient decoration. | No action. |
| AI default: maximum rounding | Main UI uses `0px` radius; only circular brand/social elements use `50%`. | Approved design avoids maximum rounding. | No action. |
| AI default: heavy shadows | No resting card shadows; hover shadow utility exists but is not used by approved markup. | Approved design avoids heavy shadows. | No action. |
| AI default: emoji icons | No emoji iconography; SVG line icons use fixed stroke. | Approved design avoids emoji icons. | No action. |
| AI default: filler copy | Copy is specific to Tiệm hoa Cỏ Lạ and Hanoi ordering. | Approved design avoids filler copy. | No action. |
| AI default: text over images | No text is placed over images. | Approved design avoids image contrast risk. | No action. |

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2026-09-22 | Initial design system extracted from approved `index.html`. | This PR |
