import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { getRecipeById } from "../../../data/recipes";
import RecipeDetail from "../../../components/RecipeDetail";
import { DetailSkeleton } from "../../../components/LoadingSkeleton";

// PUBLIC_INTERFACE
export default component$(() => {
  const loc = useLocation();
  const recipeSig = useSignal(getRecipeById(loc.params.id));
  const loading = useSignal(true);

  useVisibleTask$(() => {
    // For now we just simulate loading; data is immediate from mock.
    recipeSig.value = getRecipeById(loc.params.id);
    loading.value = false;
  });

  if (loading.value) {
    return <DetailSkeleton />;
  }

  if (!recipeSig.value) {
    return (
      <div class="card" style={{ padding: "1rem" }}>
        <h1 style={{ marginTop: 0 }}>Recipe not found</h1>
        <p class="text-muted">We couldn't find this recipe. It may have been removed.</p>
        <a class="btn" href="/" aria-label="Back to home">← Back to home</a>
      </div>
    );
  }

  return <RecipeDetail recipe={recipeSig.value} />;
});

export const head: DocumentHead = {
  title: "Recipe Detail",
  meta: [
    {
      name: "description",
      content: "Detailed recipe view with ingredients and instructions.",
    },
  ],
};
