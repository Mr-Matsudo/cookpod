import { Recipe } from '../../shareDomain/Recipe'; // レシピの型定義をインポート
import { Router } from '@trpc/server';
import { TRPCResponse } from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import RecipeModel  from '../Schema/Recipe'; // MongooseのRecipeモデルをインポート

export const router = Router()
  .mutation('saveRecipe', {
    input: Recipe,
    resolve: async ({ input }) => {
      const recipe = new RecipeModel(input);
      await recipe.save();
      return null;
    },
  });
