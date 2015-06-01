# Changelog

## 2.0.0
- **Fix** Bottom spacing of `.form--tight`
- **Fix** Adjust grid rules based on baseline context.
- **Breaking change** Grid gutters adjust according to the responsive baseline
  context.
  **Warning:** the grid gutter must now be a name of a space unit instead
  of a number (or a function returning a number). E.g `base` instead
  of `space(base)`
  **Affected settings:** `grid-gutter`, `grid-gutter-l`, `grid-gutter-t`,
  `grid-gutter-xt`, `grid-gutter-xxt`
- **Fix** ability to generate a bottom aligned grid
- **Fix** Make root baseline responsive
- **Fix** Buttons' padding now adjusts to fit changes in baseline.
  difference between `.btn`, `.btn--tight` and `.btn--loose` are now
  hard coded, and are calculated based on the `btn-padding, base` setting.
  `btn-padding, tight` and `btn-padding, loose` can be deprecated.
- **Fix:** Make icon buttons transparent.
- **Feature** Alt text styling.
- **Change** more types of images are allowed to scale up.
- **Breaking change** Remove a hack fixing open-sans-hebrew's rendering issues in IE.
  **Warning:** Breaks open-sans in IE. Projects the use open-sans-hebrew must
  implement the hack inside the project.
- **Breaking change:** Allow greater modularity by dynamically setting the background
  color of the html element from the `settings` map.
  **warnign:** Breaks background color of `html` element. A `page-bg`
  key must be set in the `settings` map (in `_s.config`).
- **New:** Define a media object that is a table vertically aligned to the top.
- **New:** Option to generate x-tiny type class using the t-nano mixin.
  Small type can optionally have its own font-family if the `type, nano-style`
  setting is turned on.
- **New**  Add ability to set headline's font-weight through settings.
  Defaults to 700
- **Fix:** Add html5's text-like input fields to the text input reset so that
  interaction with them is similar.
- **Fix:** Normalize letter-spacing of `button` elements.
- **Fix:** Clearer handling of modals' z-index:
  - `.modal-wrapper` gets `z(above)`
  - `.modal-wrapper--fixed` gets `z(modal)`
- **New:** Make the `border`, `border-radius` and `box-shadow` properties of
  modals optional.
- **New:** `.nav--fit`: Make a horizontal list fit in empty space.
- **New:** `.nav--keywords`: Make a horizontal list comma delimited.
- **Fix:** Always unquote strings sent to bidi-sass
- **New:** Define a typographic scale for a given breakpoint using
  `@include define-font-sizes($breakpoint, $args...)`
- **Breaking change:** Make card respect responsive baseline
  Pass named spacing units from the settings object so that size is
  calculated on runtime instead of on definition of setting.
  Breaks card spacing, requires a change in `s-card` settings object.
- **New:** create a project baseline
  - Provide a base directory structure
  - Add settings modules to kickstart project configuration off of.
  - Add a base `screen.scss` to work off of.


## 1.0.1
- Fix typo in `README.md`
