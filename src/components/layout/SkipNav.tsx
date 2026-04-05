export function SkipNav() {
  return (
    <a
      href="#main"
      className="pointer-events-none fixed left-4 top-4 z-[60] -translate-y-24 rounded-md bg-accent px-4 py-3 text-sm font-medium text-bg opacity-0 transition-transform focus:pointer-events-auto focus:translate-y-0 focus:opacity-100"
    >
      Skip to main content
    </a>
  );
}
