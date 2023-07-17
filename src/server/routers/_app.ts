import { todoRouter } from "./todoRouter/todoRouter";
import { t } from "./trpc";

export const appRouter = t.router({
  todo: todoRouter,
});

export type AppRouter = typeof appRouter;
