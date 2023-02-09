import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const ComunsRooter = createTRPCRouter({
    GetAnos: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.ano.findMany({select:{ ano:true, id:true }})
    })
})