import { z } from "zod";
import { prisma } from "~/server/db";
import { t } from "../trpc";

export const todoRouter = t.router({
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

  updateStatus: t.procedure
    .input(
      z.object({
        id: z.string(),
        isCompleted: z.boolean(),
      })
    )
    .mutation(({ input }) => {
      return prisma.todo.update({
        where: {
          id: input.id,
        },
        data: {
          isCompleted: input.isCompleted,
        },
      });
    }),
  deleteTodo: t.procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ input }) => {
      return prisma.todo.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
