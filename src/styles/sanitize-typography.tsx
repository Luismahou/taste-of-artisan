export const sanitizeTypography = `
html {
  font-family:
    system-ui,
    /* macOS 10.11-10.12 */ -apple-system,
    /* Windows 6+ */ "Segoe UI",
    /* Android 4+ */ "Roboto",
    /* Ubuntu 10.10+ */ "Ubuntu",
    /* Gnome 3+ */ "Cantarell",
    /* KDE Plasma 5+ */ "Noto Sans",
    /* fallback */ sans-serif,
    /* macOS emoji */ "Apple Color Emoji",
    /* Windows emoji */ "Segoe UI Emoji",
    /* Windows emoji */ "Segoe UI Symbol",
    /* Linux emoji */ "Noto Color Emoji";
}

code,
kbd,
samp,
pre {
  font-family:
    /* macOS 10.10+ */ "Menlo",
    /* Windows 6+ */ "Consolas",
    /* Android 4+ */ "Roboto Mono",
    /* Ubuntu 10.10+ */ "Ubuntu Monospace",
    /* KDE Plasma 5+ */ "Noto Mono",
    /* KDE Plasma 4+ */ "Oxygen Mono",
    /* Linux/OpenOffice fallback */ "Liberation Mono",
    /* fallback */ monospace,
    /* macOS emoji */ "Apple Color Emoji",
    /* Windows emoji */ "Segoe UI Emoji",
    /* Windows emoji */ "Segoe UI Symbol",
    /* Linux emoji */ "Noto Color Emoji";
}`;
