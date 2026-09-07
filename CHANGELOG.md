# Changelog

<!-- <START NEW CHANGELOG ENTRY> -->

<!-- <END NEW CHANGELOG ENTRY> -->

## [1.0.17] - 2026-09-07

### Changed

- Colourful-tab accents retuned from 70 to 85 percent of the tab extension's stock chroma. The previous cap sat too far below the palette that extension draws for a white canvas, and against this theme's tab bar at CIELAB L\* 72 - 22 points lower - the hue stopped reading and the tabs rendered as pale grey patches. Hue angle and lightness are unchanged; only chroma moves
- Alpha was evaluated as an alternative and rejected: the dock tab bar computes to `rgba(0, 0, 0, 0)`, so a translucent tab composites over whatever sits behind it rather than over a fixed surface

## [1.0.16] - 2026-09-06

### Changed

- Renamed from Concrete to Titanium throughout: the GitHub repository, the npm package, the PyPI distribution, the Python module and the theme menu entry, which is now `Galaxa Light Theme - Titanium`. The previous distribution `galaxalabs_jupyterlab_concrete_light_theme` is frozen at 1.0.14 and receives no further releases; installations of it must be replaced rather than upgraded
- Colourful-tab accents no longer inherit the tab extension's pastels, which were drawn for a white canvas. The six hues are kept and the chroma capped at CIELAB C\* 15, the ceiling this theme already uses for a large tinted surface, leaving the six separable at a minimum pairwise dE76 of 10.9 and every tab label above 6.9:1

## [1.0.14] - 2026-09-05

### Changed

- Theme menu entry renamed to `Galaxa Light Theme - Concrete`, which groups the four sibling themes into one contiguous block in the theme picker. Only the display name registered with `IThemeManager` changes - the repository, the npm package and the PyPI distribution keep their identifiers
- Package and plugin descriptions now name the dark sibling by its new menu entry, `Galaxa Dark Theme - Concrete`

## [1.0.13] - 2026-09-05

### Added

- First release to npm and PyPI. Light neutral-gray theme in the Win95 light-gray convention, the light counterpart of the Concrete dark theme, built to reduce eye strain
- Galata UI tests covering the launcher and a notebook rendering

### Changed

- Theme menu entry is `Concrete Light Theme`; the vendor prefix was dropped from the display name and the package description

### Fixed

- ANSI traceback output is legible on a light canvas. Class-based foregrounds are redrawn from the theme palette, and 256-colour and 24-bit spans, which core emits as inline styles reachable by no colour class, are repainted through an attribute selector scoped to stderr
- Alert panels are separable without colour discrimination. Panels and borders are spread by lightness rather than hue, verified against a deuteranopia simulation
- Markdown links inside alert panels reach at least 4.94:1; core does not repaint them, so the contrast is set at the token
- Destructive buttons draw from the muted error scale, and Settings, Restore to Defaults no longer renders at 1.37:1
