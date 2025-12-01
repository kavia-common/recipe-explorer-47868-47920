import { component$ } from "@builder.io/qwik";

/**
 * PUBLIC_INTERFACE
 * GridSkeleton
 * Skeleton placeholders for recipe grid.
 */
export const GridSkeleton = component$(() => {
  const card = (
    <div class="card" style={{ overflow: "hidden" }}>
      <div class="skeleton" style={{ width: "100%", height: "180px" }} />
      <div style={{ padding: "1rem" }}>
        <div class="skeleton" style={{ width: "70%", height: "18px", marginBottom: "8px" }} />
        <div class="skeleton" style={{ width: "90%", height: "14px", marginBottom: "6px" }} />
        <div class="skeleton" style={{ width: "40%", height: "14px" }} />
      </div>
    </div>
  );
  return (
    <section class="grid" aria-label="Loading recipes">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} style={{ gridColumn: "span 12" }}>
          {card}
        </div>
      ))}
      <style>
        {`
        @media (min-width: 640px) {
          section.grid > div { grid-column: span 6; }
        }
        @media (min-width: 1024px) {
          section.grid > div { grid-column: span 4; }
        }
      `}
      </style>
    </section>
  );
});

/**
 * PUBLIC_INTERFACE
 * DetailSkeleton
 * Skeleton for recipe detail page.
 */
export const DetailSkeleton = component$(() => {
  return (
    <div>
      <div class="skeleton" style={{ width: "100%", height: "280px", borderRadius: "12px" }} />
      <div style={{ paddingTop: "1rem" }}>
        <div class="skeleton" style={{ width: "50%", height: "22px", marginBottom: "10px" }} />
        <div class="skeleton" style={{ width: "30%", height: "14px", marginBottom: "14px" }} />
        <div class="skeleton" style={{ width: "90%", height: "12px", marginBottom: "6px" }} />
        <div class="skeleton" style={{ width: "85%", height: "12px", marginBottom: "6px" }} />
        <div class="skeleton" style={{ width: "70%", height: "12px" }} />
      </div>
    </div>
  );
});
