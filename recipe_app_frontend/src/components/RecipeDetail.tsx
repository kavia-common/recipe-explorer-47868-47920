import { component$ } from "@builder.io/qwik";
import type { Recipe } from "../data/recipes";
import { Link } from "@builder.io/qwik-city";

interface RecipeDetailProps {
  recipe: Recipe;
}

/**
 * PUBLIC_INTERFACE
 * RecipeDetail
 * Detailed view with hero image, metadata, ingredients checklist, and steps.
 */
export default component$<RecipeDetailProps>(({ recipe }) => {
  const stars = "★".repeat(Math.round(recipe.rating)) + "☆".repeat(5 - Math.round(recipe.rating));
  return (
    <article>
      <Link href="/" class="btn" aria-label="Back to recipes" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
        ← Back
      </Link>
      <img
        class="recipe-hero"
        src={recipe.image}
        alt={recipe.title}
        width={1200}
        height={675}
        loading="lazy"
      />
      <header style={{ marginTop: "1rem" }}>
        <h1 style={{ margin: "0 0 0.5rem 0" }}>{recipe.title}</h1>
        <p class="text-muted" style={{ margin: "0 0 0.75rem 0" }}>{recipe.description}</p>
        <div class="meta">
          <span class="pill">{recipe.timeMinutes} min</span>
          <span class="pill">{recipe.servings} servings</span>
          <span class="pill">{recipe.difficulty}</span>
          <span class="pill" aria-label={`Rating ${recipe.rating} out of 5`}>{stars}</span>
          {recipe.cuisine && <span class="pill">{recipe.cuisine}</span>}
          {recipe.category && <span class="pill">{recipe.category}</span>}
        </div>
      </header>

      <section style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginTop: "1rem" }}>
        <div class="card" style={{ padding: "1rem" }}>
          <h2 style={{ marginTop: 0 }}>Ingredients</h2>
          <ul class="list-check" aria-label="Ingredients list">
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx}>
                <input id={`ing-${idx}`} type="checkbox" aria-label={`Mark ${ing}`} />
                <label for={`ing-${idx}`}>{ing}</label>
              </li>
            ))}
          </ul>
        </div>
        <div class="card" style={{ padding: "1rem" }}>
          <h2 style={{ marginTop: 0 }}>Instructions</h2>
          <ol style={{ paddingLeft: "1.2rem", margin: 0 }}>
            {recipe.steps.map((s, i) => (
              <li key={i} style={{ margin: "0.4rem 0" }}>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <style>
        {`
        @media (min-width: 900px) {
          article > section { grid-template-columns: 1fr 2fr; }
        }
      `}
      </style>
    </article>
  );
});
