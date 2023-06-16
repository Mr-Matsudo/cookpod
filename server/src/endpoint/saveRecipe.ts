// tRPCライブラリのサーバーサイド部分をインポートします。tRPCは、型が安全で、効率的なAPIエンドポイントを作成するためのライブラリです。
import { initTRPC } from '@trpc/server';

// 作成したレシピの型パーサーをインポートします。このパーサーは、送られてきたデータがレシピとして適切な形式と型を持っているかを確認します。
import { Recipe } from '../../../shareDomain/Recipe';
import { router, publicProcedure } from '../router';

// tRPCのサーバーサイドインスタンスを作成します。
const t = initTRPC.create();

// tRPCのルーターを定義します。ここではレシピを保存するためのエンドポイント 'saveRecipe' を定義しています。
// エンドポイントにはレシピのデータを保存するためのmutationという種類の手続きがあります。
// mutationは、データを変更するための操作を表します。
// また、.input(RecipeSchema)という部分で、このエンドポイントへの入力がRecipeSchemaパーサーによって適切に検証されることを指定しています。
export const saveRecipeRouter = router({
  saveRecipe: publicProcedure.input(Recipe.createZodSchema()).mutation(async ({ input }) => {
    const recipe = new Recipe(input); // レシピモデルの新しいインスタンスを作成します。
    return await recipe.save(); // レシピをデータベースに保存します。
  }),
});

// ルーターの型をエクスポートします。これにより、他のファイルからこのルーターの型を利用できます。
export type SaveRecipeRouter = typeof saveRecipeRouter;
