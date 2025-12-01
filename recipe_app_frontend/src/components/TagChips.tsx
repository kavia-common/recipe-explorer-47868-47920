import { component$, type QRL } from "@builder.io/qwik";

interface TagChipsProps {
  tags: string[];
  active: string[];
  onToggle$?: QRL<(tag: string) => void>;
}

/**
 * PUBLIC_INTERFACE
 * TagChips
 * A set of selectable chips for filtering by tag/category/cuisine.
 */
export default component$<TagChipsProps>(({ tags, active, onToggle$ }) => {
  return (
    <div class="tags" role="listbox" aria-label="Filter by tags">
      {tags.map((t) => {
        const isActive = active.includes(t);
        return (
          <button
            key={t}
            type="button"
            class={`tag ${isActive ? "active" : ""}`}
            aria-pressed={isActive}
            aria-label={`Filter by ${t}`}
            onClick$={async () => {
              if (onToggle$) await onToggle$(t);
            }}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
});
