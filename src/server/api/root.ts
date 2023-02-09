import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { AdminRouter } from "./routers/admin";
import { ComunsRooter } from "./routers/comuns";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  Admin: AdminRouter,
  Commons: ComunsRooter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
