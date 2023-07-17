import { prisma } from "../db";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  todos: publicProcedure.query(() => {
    return prisma.todo.findMany();
  }),
});

export type AppRouter = typeof appRouter;
