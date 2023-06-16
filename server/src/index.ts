import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { router, appRouter } from './router';

const createContext = ({
    req,
    res,
  }: trpcExpress.CreateExpressContextOptions) => ({});

const app = express();

// add trpc router
app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    }),
  );

// start server
app.listen(3001, () => {
  console.log('Server is listening on port 3000');
});
