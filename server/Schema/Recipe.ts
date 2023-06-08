import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  unit: String,
});

const stepSchema = new mongoose.Schema({
  stepNumber: Number,
  instruction: String,
  imageUrl: String,
});

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
});

const recipeSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  ingredients: [ingredientSchema],
  steps: [stepSchema],
  servings: Number,
  cookTime: Number,
  author: userSchema,
  postedAt: Date,
});

const RecipeModel = mongoose.model('Recipe', recipeSchema);

export default RecipeModel;
