
import { initTRPC } from '@trpc/server';
import { saveRecipeRouter } from './endpoint/saveRecipe';

const t = initTRPC.create();
export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;
export const appRouter = router({
    saveRecipe: saveRecipeRouter, //
  });

export type AppRouter = typeof appRouter;