// tRPCライブラリのサーバーサイド部分をインポートします。tRPCは、型が安全で、効率的なAPIエンドポイントを作成するためのライブラリです。
import { initTRPC } from '@trpc/server';

// 作成したレシピの型パーサーをインポートします。このパーサーは、送られてきたデータがレシピとして適切な形式と型を持っているかを確認します。
import { RecipeSchema } from '../Schema/RecipeParser';

// レシピモデルをインポートします。これはmongoose（MongoDBのためのObject Data Modeling (ODM) ライブラリ）で定義されたレシピのデータモデルです。
import RecipeModel from '../Schema/Recipe';

// tRPCのサーバーサイドインスタンスを作成します。
const t = initTRPC.create();

// tRPCのルーターを定義します。ここではレシピを保存するためのエンドポイント 'saveRecipe' を定義しています。
// エンドポイントにはレシピのデータを保存するためのmutationという種類の手続きがあります。
// mutationは、データを変更するための操作を表します。
// また、.input(RecipeSchema)という部分で、このエンドポイントへの入力がRecipeSchemaパーサーによって適切に検証されることを指定しています。
const router = t.router({
  saveRecipe: t.procedure.input(RecipeSchema).mutation(async ({ input }) => {
    const recipe = new RecipeModel(input); // レシピモデルの新しいインスタンスを作成します。
    await recipe.save(); // レシピをデータベースに保存します。
    return null; // レシピの保存が成功したことを示すためにnullを返します。
  }),
});

// ルーターをエクスポートします。これにより、他のファイルからこのルーターを利用できます。
export const appRouter = router;

// ルーターの型をエクスポートします。これにより、他のファイルからこのルーターの型を利用できます。
export type AppRouter = typeof appRouter;
