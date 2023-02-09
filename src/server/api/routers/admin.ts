import { z } from "zod";

import { publicProcedure, createTRPCRouter } from "../trpc";

export const AdminRouter = createTRPCRouter({
    createYear : publicProcedure
        .input(z.object({name: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.ano.create({
                data:{
                    ano: input.name,
                    Tabela:{
                        create:{
                            
                        }
                    }
                }
            })
        })
})