import { component$, useSignal, useVisibleTask$, $, type QRL } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";

interface SearchBarProps {
  initialQuery?: string;
  onInput$?: QRL<(value: string) => void>;
}

/**
 * PUBLIC_INTERFACE
 * SearchBar
 * Debounced search input that updates query param (?q=) and fires onInput$.
 */
export default component$<SearchBarProps>(({ initialQuery = "", onInput$ }) => {
  const loc = useLocation();
  const nav = useNavigate();
  const valueSig = useSignal(initialQuery);
  const timer = useSignal<number | undefined>(undefined);

  useVisibleTask$(() => {
    // On mount, reflect URL query if present
    const urlQ = loc.url.searchParams.get("q") ?? "";
    valueSig.value = urlQ || initialQuery || "";
  });

  const updateUrl = $((val: string) => {
    const url = new URL(loc.url);
    if (val) {
      url.searchParams.set("q", val);
    } else {
      url.searchParams.delete("q");
    }
    return nav(url.pathname + url.search, { replaceState: true });
  });

  const handleInput = $((e: Event) => {
    const target = e.target as HTMLInputElement;
    const newVal = target.value;
    valueSig.value = newVal;

    if (timer.value) window.clearTimeout(timer.value);
    timer.value = window.setTimeout(async () => {
      await updateUrl(newVal);
      if (onInput$) await onInput$(newVal);
    }, 300);
  });

  return (
    <label class="w-full" aria-label="Search recipes">
      <span class="sr-only">Search</span>
      <input
        class="search-input"
        type="search"
        inputMode="search"
        placeholder="Search recipes, ingredients, or tags..."
        value={valueSig.value}
        onInput$={handleInput}
        aria-label="Search recipes"
      />
    </label>
  );
});
