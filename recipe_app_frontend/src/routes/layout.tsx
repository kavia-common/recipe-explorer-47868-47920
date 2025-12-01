import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import styles from "./styles.css?inline";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

// PUBLIC_INTERFACE
export default component$(() => {
  // Keep route-level styles for compatibility; main app shell is in root.tsx
  useStyles$(styles);
  return (
    <Slot />
  );
});
