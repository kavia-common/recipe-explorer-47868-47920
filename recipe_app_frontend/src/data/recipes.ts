export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  timeMinutes: number;
  rating: number; // 0-5
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  ingredients: string[];
  steps: string[];
  cuisine?: string;
  category?: string;
}

const sampleImg = (seed: string) =>
  `https://images.unsplash.com/photo-155${seed}?auto=format&fit=crop&w=1200&q=60`;

export const RECIPES: Recipe[] = [
  {
    id: "1",
    title: "Lemon Herb Roasted Chicken",
    description: "Juicy chicken roasted with lemon, garlic, and fragrant herbs.",
    image: sampleImg("1214654-6d3f7"),
    tags: ["Chicken", "Roast", "Dinner"],
    timeMinutes: 70,
    rating: 4.6,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "1 whole chicken",
      "2 lemons",
      "4 cloves garlic",
      "2 tbsp olive oil",
      "Fresh rosemary & thyme",
      "Salt & pepper",
    ],
    steps: [
      "Preheat oven to 200°C (400°F).",
      "Stuff chicken with lemon halves and herbs.",
      "Rub with olive oil, minced garlic, salt, and pepper.",
      "Roast for 60–70 minutes until juices run clear.",
      "Rest for 10 minutes and carve.",
    ],
    cuisine: "American",
    category: "Main",
  },
  {
    id: "2",
    title: "Creamy Mushroom Pasta",
    description: "Silky pasta tossed in a garlic mushroom cream sauce.",
    image: sampleImg("2074120-1b3f3"),
    tags: ["Pasta", "Vegetarian", "Comfort"],
    timeMinutes: 30,
    rating: 4.8,
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "200g pasta",
      "250g mushrooms",
      "2 cloves garlic",
      "200ml cream",
      "Parmesan",
      "Parsley",
      "Salt & pepper",
    ],
    steps: [
      "Cook pasta until al dente.",
      "Sauté mushrooms and garlic in butter.",
      "Add cream and simmer.",
      "Toss with pasta and parmesan; season to taste.",
    ],
    cuisine: "Italian",
    category: "Main",
  },
  {
    id: "3",
    title: "Avocado Quinoa Salad",
    description: "Refreshing salad with quinoa, avocado, and citrus vinaigrette.",
    image: sampleImg("2330162-2aef5"),
    tags: ["Salad", "Healthy", "Vegan", "Gluten-Free"],
    timeMinutes: 20,
    rating: 4.4,
    servings: 3,
    difficulty: "Easy",
    ingredients: [
      "1 cup cooked quinoa",
      "1 avocado",
      "Cherry tomatoes",
      "Cucumber",
      "Red onion",
      "Lime juice",
      "Olive oil, salt & pepper",
    ],
    steps: [
      "Combine chopped veggies with cooked quinoa.",
      "Whisk lime juice, olive oil, salt, and pepper.",
      "Toss and serve chilled.",
    ],
    cuisine: "Fusion",
    category: "Salad",
  },
  {
    id: "4",
    title: "Spicy Shrimp Tacos",
    description: "Zesty shrimp with slaw and chili-lime crema.",
    image: sampleImg("674994-5c112"),
    tags: ["Seafood", "Tacos", "Quick"],
    timeMinutes: 25,
    rating: 4.7,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "500g shrimp",
      "Taco shells",
      "Cabbage slaw",
      "Lime",
      "Chili powder",
      "Yogurt or sour cream",
    ],
    steps: [
      "Season and sauté shrimp until pink.",
      "Mix crema with lime and chili powder.",
      "Assemble tacos with slaw and shrimp.",
    ],
    cuisine: "Mexican",
    category: "Main",
  },
  {
    id: "5",
    title: "Blueberry Oat Pancakes",
    description: "Fluffy wholegrain pancakes loaded with blueberries.",
    image: sampleImg("028165-19f06"),
    tags: ["Breakfast", "Sweet"],
    timeMinutes: 20,
    rating: 4.3,
    servings: 3,
    difficulty: "Easy",
    ingredients: [
      "1 cup oats flour",
      "1 egg",
      "1 cup milk",
      "1 tsp baking powder",
      "Blueberries",
      "Maple syrup",
    ],
    steps: [
      "Mix dry ingredients; whisk in milk and egg.",
      "Fold in blueberries.",
      "Cook on greased skillet until golden.",
    ],
    cuisine: "American",
    category: "Breakfast",
  },
  {
    id: "6",
    title: "Sushi Bowl",
    description: "Deconstructed sushi with rice, salmon, avocado, and seaweed.",
    image: sampleImg("1423088-7b1f2"),
    tags: ["Seafood", "Bowl", "Japanese"],
    timeMinutes: 35,
    rating: 4.5,
    servings: 2,
    difficulty: "Medium",
    ingredients: [
      "Sushi rice",
      "Salmon or tofu",
      "Avocado",
      "Cucumber",
      "Nori",
      "Soy sauce",
      "Sesame seeds",
    ],
    steps: [
      "Cook rice and season with vinegar.",
      "Prepare toppings.",
      "Assemble bowls and drizzle soy sauce.",
    ],
    cuisine: "Japanese",
    category: "Main",
  },
  {
    id: "7",
    title: "Tomato Basil Soup",
    description: "Comforting soup blending tomatoes and fresh basil.",
    image: sampleImg("151968-4a7c1"),
    tags: ["Soup", "Vegetarian"],
    timeMinutes: 40,
    rating: 4.2,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "Tomatoes",
      "Onion & garlic",
      "Vegetable broth",
      "Basil",
      "Cream (optional)",
      "Salt & pepper",
    ],
    steps: [
      "Sauté onion and garlic.",
      "Add tomatoes and broth; simmer.",
      "Blend until smooth; add basil.",
    ],
    cuisine: "Italian",
    category: "Soup",
  },
  {
    id: "8",
    title: "Teriyaki Chicken Bowl",
    description: "Savory-sweet teriyaki chicken with steamed veggies over rice.",
    image: sampleImg("148498-8e2f9"),
    tags: ["Chicken", "Bowl", "Asian"],
    timeMinutes: 35,
    rating: 4.6,
    servings: 3,
    difficulty: "Medium",
    ingredients: [
      "Chicken thighs",
      "Teriyaki sauce",
      "Broccoli & carrots",
      "Rice",
      "Sesame seeds",
    ],
    steps: [
      "Cook rice and steam veggies.",
      "Pan-cook chicken; glaze with teriyaki sauce.",
      "Serve over rice with veggies.",
    ],
    cuisine: "Japanese",
    category: "Main",
  },
  {
    id: "9",
    title: "Caprese Sandwich",
    description: "Fresh mozzarella, tomatoes, and basil on ciabatta.",
    image: sampleImg("990119-12ef2"),
    tags: ["Sandwich", "Vegetarian", "Quick"],
    timeMinutes: 10,
    rating: 4.1,
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "Ciabatta",
      "Tomatoes",
      "Fresh mozzarella",
      "Basil",
      "Olive oil & balsamic",
      "Salt & pepper",
    ],
    steps: [
      "Layer tomatoes, mozzarella, and basil.",
      "Drizzle with oil and balsamic.",
      "Season and enjoy.",
    ],
    cuisine: "Italian",
    category: "Snack",
  },
  {
    id: "10",
    title: "Chocolate Mousse",
    description: "Decadent, airy chocolate mousse dessert.",
    image: sampleImg("1533772-34ce0"),
    tags: ["Dessert", "Sweet", "Gluten-Free"],
    timeMinutes: 45,
    rating: 4.9,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "Dark chocolate",
      "Eggs",
      "Sugar",
      "Cream",
      "Vanilla",
      "Salt",
    ],
    steps: [
      "Melt chocolate and cool slightly.",
      "Whip cream and beat eggs with sugar.",
      "Fold mixtures gently and chill.",
    ],
    cuisine: "French",
    category: "Dessert",
  },
  {
    id: "11",
    title: "Grilled Veggie Skewers",
    description: "Colorful skewers with peppers, zucchini, and onions.",
    image: sampleImg("159851-61b21"),
    tags: ["Grill", "Vegan", "Gluten-Free"],
    timeMinutes: 25,
    rating: 4.0,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "Bell peppers",
      "Zucchini",
      "Red onion",
      "Olive oil",
      "Herbs",
      "Salt & pepper",
    ],
    steps: [
      "Skewer chopped veggies.",
      "Brush with oil and herbs.",
      "Grill until tender.",
    ],
    cuisine: "Mediterranean",
    category: "Side",
  },
  {
    id: "12",
    title: "Butter Garlic Naan",
    description: "Soft, pillowy naan bread brushed with garlic butter.",
    image: sampleImg("157392-9b4a7"),
    tags: ["Bread", "Indian", "Vegetarian"],
    timeMinutes: 90,
    rating: 4.5,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      "Flour",
      "Yeast",
      "Yogurt",
      "Milk",
      "Sugar & salt",
      "Garlic & butter",
    ],
    steps: [
      "Make dough and rise until doubled.",
      "Roll portions and cook on hot skillet.",
      "Brush with garlic butter.",
    ],
    cuisine: "Indian",
    category: "Bread",
  },
];

export interface RecipeFilter {
  query?: string;
  tags?: string[];
}

/**
 * PUBLIC_INTERFACE
 * listRecipes
 * Return complete mock list (future: add pagination & API integration).
 */
export function listRecipes(): Recipe[] {
  return RECIPES;
}

/**
 * PUBLIC_INTERFACE
 * getRecipeById
 * Find a recipe by id from mock data.
 */
export function getRecipeById(id: string): Recipe | undefined {
  return RECIPES.find((r) => r.id === id);
}

/**
 * PUBLIC_INTERFACE
 * filterRecipes
 * Filter recipes by text query (title/description/tags) and by tags (must include all provided).
 */
export function filterRecipes({ query, tags }: RecipeFilter): Recipe[] {
  const q = (query ?? "").trim().toLowerCase();
  const tagSet = new Set((tags ?? []).map((t) => t.toLowerCase()));
  return RECIPES.filter((r) => {
    const matchesQuery =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.tags.some((t) => t.toLowerCase().includes(q)) ||
      (r.cuisine ?? "").toLowerCase().includes(q) ||
      (r.category ?? "").toLowerCase().includes(q);

    const matchesTags =
      tagSet.size === 0 ||
      Array.from(tagSet).every((t) => r.tags.map((x) => x.toLowerCase()).includes(t));

    return matchesQuery && matchesTags;
  });
}

export function allUniqueTags(): string[] {
  const set = new Set<string>();
  RECIPES.forEach((r) => r.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
