import { prisma } from "../db";
import { router, t } from "./trpc";

export const appRouter = router({
  todos: t.procedure.query(() => {
    return prisma.todo.findMany();
  }),
});

export type AppRouter = typeof appRouter;
