import { z } from "zod";
import { prisma } from "../db";
import { router, t } from "./trpc";

export const appRouter = router({
  todos: t.procedure.query(() => {
    return prisma.todo.findMany();
  }),
  addTodo: t.procedure
    .input(z.object({ title: z.string() }))
    .mutation(({ input }) => {
      return prisma.todo.create({
        data: { title: input.title, isCompleted: false },
      });
    }),
});

export type AppRouter = typeof appRouter;
