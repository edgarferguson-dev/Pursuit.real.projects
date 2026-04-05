import type { Locale } from "./config";
import { messages as enMessages } from "./en";

export type { Locale };

/** Widen `as const` English string literals so translations can use different copy. */
export type DeepStringValues<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly DeepStringValues<U>[]
    : T extends object
      ? { readonly [K in keyof T]: DeepStringValues<T[K]> }
      : T;

export type AppMessages = DeepStringValues<typeof enMessages>;
