import { component$ } from "@builder.io/qwik";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

interface RecipeGridProps {
  recipes: Recipe[];
}

/**
 * PUBLIC_INTERFACE
 * RecipeGrid
 * Responsive CSS grid displaying recipe cards.
 */
export default component$<RecipeGridProps>(({ recipes }) => {
  return (
    <section aria-label="Recipes" class="grid" style={{ marginTop: "1rem" }}>
      {recipes.map((r) => (
        <div
          key={r.id}
          style={{
            gridColumn: "span 12",
          }}
        >
          <RecipeCard recipe={r} />
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
