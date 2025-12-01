import { component$, Slot } from "@builder.io/qwik";

/**
 * PUBLIC_INTERFACE
 * EmptyState
 * A simple empty state wrapper.
 */
export default component$(() => {
  return (
    <div
      class="card"
      style={{
        padding: "2rem",
        textAlign: "center",
        background:
          "linear-gradient(180deg, rgba(37,99,235,0.05), rgba(249,250,251,1))",
      }}
      role="status"
      aria-live="polite"
    >
      <h3 style={{ margin: "0 0 0.5rem 0" }}>No results found</h3>
      <p class="text-muted" style={{ margin: 0 }}>
        Try adjusting your search or filters.
      </p>
      <div style={{ marginTop: "0.75rem" }}>
        <Slot />
      </div>
    </div>
  );
});
