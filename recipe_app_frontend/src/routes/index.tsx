import { component$, useSignal, useVisibleTask$, $, useComputed$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import SearchBar from "../components/SearchBar";
import TagChips from "../components/TagChips";
import RecipeGrid from "../components/RecipeGrid";
import EmptyState from "../components/EmptyState";
import { GridSkeleton } from "../components/LoadingSkeleton";
import { filterRecipes, listRecipes, allUniqueTags } from "../data/recipes";

// PUBLIC_INTERFACE
export default component$(() => {
  const loc = useLocation();
  const qSig = useSignal<string>("");
  const activeTags = useSignal<string[]>([]);
  const loading = useSignal<boolean>(true);
  const allTags = allUniqueTags();

  useVisibleTask$(() => {
    // Initialize from URL
    qSig.value = loc.url.searchParams.get("q") ?? "";
    loading.value = false;
  });

  const toggleTag$ = $((tag: string) => {
    const set = new Set(activeTags.value);
    if (set.has(tag)) set.delete(tag);
    else set.add(tag);
    activeTags.value = Array.from(set);
  });

  const recipes = useComputed$(() => {
    const query = qSig.value;
    const tags = activeTags.value;
    if (loading.value) return [];
    if (!query && tags.length === 0) return listRecipes();
    return filterRecipes({ query, tags });
  });

  return (
    <section aria-labelledby="home-title">
      <h1 id="home-title" style={{ margin: "0 0 1rem 0" }}>Discover Recipes</h1>
      <div class="card" style={{ padding: "1rem", marginBottom: "0.75rem" }}>
        <SearchBar
          initialQuery={qSig.value}
          onInput$={$((val) => {
            qSig.value = val;
          })}
        />
        <div style={{ marginTop: "0.75rem" }}>
          <TagChips tags={allTags} active={activeTags.value} onToggle$={toggleTag$} />
        </div>
      </div>

      {loading.value ? (
        <GridSkeleton />
      ) : recipes.value.length === 0 ? (
        <EmptyState />
      ) : (
        <RecipeGrid recipes={recipes.value} />
      )}
    </section>
  );
});

export const head: DocumentHead = {
  title: "Recipe Explorer",
  meta: [
    {
      name: "description",
      content: "Browse, search, and explore delicious recipes.",
    },
  ],
};
