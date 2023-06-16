import { Ingredient } from "./Ingredient";
import { User } from "./User";
import { Step } from "./Step";
import { z } from "zod";
import mongoose from "mongoose";

interface RecipeInfo {
  id?: string;
  title?: string;
  description?: string;
  ingredients?: Ingredient[];
  steps?: Step[];
  servings?: number;
  cookTime?: number;
  author?: User;
  postedAt?: Date;
}

export class Recipe implements RecipeInfo {
  id: string;
  title: string;
  description: string;
  ingredients: Ingredient[];
  steps: Step[];
  servings: number;
  cookTime: number;
  author: User;
  postedAt: Date;

  constructor(recipeData: RecipeInfo = {}) {
    this.id = recipeData.id || "";
    this.title = recipeData.title || "";
    this.description = recipeData.description || "";
    this.ingredients = recipeData.ingredients || [];
    this.steps = recipeData.steps || [];
    this.servings = recipeData.servings || 0;
    this.cookTime = recipeData.cookTime || 0;
    this.author = recipeData.author || new User();
    this.postedAt = recipeData.postedAt || new Date;
  }

  static createZodSchema() {
    return z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      ingredients: z.array(Ingredient.createZodSchema()),
      steps: z.array(Step.createZodSchema()),
      servings: z.number(),
      cookTime: z.number(),
      author: User.createZodSchema(),
      postedAt: z.date(),
    });
  }

  static createMongooseSchema() {
    return new mongoose.Schema({
      id: String,
      title: String,
      description: String,
      ingredients: [Ingredient.createMongooseSchema()],
      steps: [Step.createMongooseSchema()],
      servings: Number,
      cookTime: Number,
      author: User.createMongooseSchema(),
      postedAt: Date,
    });
  }

  save() {
    const model = mongoose.model("Recipe", Recipe.createMongooseSchema())
    new model(this).save(); 
    return true;
  }
}
