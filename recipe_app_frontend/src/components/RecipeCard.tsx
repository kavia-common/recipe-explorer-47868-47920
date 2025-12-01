import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { Recipe } from "../data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
}

/**
 * PUBLIC_INTERFACE
 * RecipeCard
 * Displays a card with image, title, description, tags, time, and rating.
 */
export default component$<RecipeCardProps>(({ recipe }) => {
  const stars = "★".repeat(Math.round(recipe.rating)) + "☆".repeat(5 - Math.round(recipe.rating));
  return (
    <article class="card" style={{ gridColumn: "span 12", display: "flex", flexDirection: "column" }}>
      <Link href={`/recipe/${recipe.id}`} aria-label={`Open ${recipe.title}`}>
        <img
          src={recipe.image}
          alt={recipe.title}
          width={1200}
          height={675}
          loading="lazy"
          class="recipe-hero"
        />
      </Link>
      <div style={{ padding: "0.9rem 1rem 1.1rem" }}>
        <h3 style={{ margin: "0 0 0.25rem 0" }}>{recipe.title}</h3>
        <p class="text-muted" style={{ margin: "0 0 0.5rem 0" }}>{recipe.description}</p>
        <div class="meta" style={{ margin: "0.4rem 0 0.6rem 0" }}>
          <span class="pill" title="Time">{recipe.timeMinutes} min</span>
          <span class="pill" title="Servings">{recipe.servings} servings</span>
          <span class="pill" title="Difficulty">{recipe.difficulty}</span>
          <span class="pill" title="Rating" aria-label={`Rating ${recipe.rating} out of 5`}>{stars}</span>
        </div>
        <div class="tags" aria-label="Tags">
          {recipe.tags.slice(0, 4).map((t) => (
            <span key={t} class="tag" aria-label={`Tag ${t}`}>{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
});
