/** Mirrors CSS custom properties — use for TS-only layout math. */
export const space = (n: number) => `${n * 4}px`;

export const radii = {
  sm: "4px",
  md: "8px",
  lg: "12px",
} as const;

export const z = {
  skip: 50,
  nav: 40,
} as const;
