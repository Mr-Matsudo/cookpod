// types.ts
import { z } from 'zod';

// Ingredientスキーマを定義
export const IngredientSchema = z.object({
  name: z.string(),
  amount: z.number(),
  unit: z.string(),
});

// Stepスキーマを定義
export const StepSchema = z.object({
  stepNumber: z.number(),
  instruction: z.string(),
  imageUrl: z.string().optional(),
});

// Userスキーマを定義
export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
});

// Recipeスキーマを定義
export const RecipeSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  ingredients: z.array(IngredientSchema),
  steps: z.array(StepSchema),
  servings: z.number(),
  cookTime: z.number(),
  author: UserSchema,
  postedAt: z.date(),
});
