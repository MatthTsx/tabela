import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const ComunsRooter = createTRPCRouter({
    GetAnos: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.ano.findMany({select:{ ano:true, id:true }})
    }),
    GetTable: publicProcedure
        .input(z.object({id: z.string()}))
        .query(({ ctx, input }) => {
            if(input.id == "") return {segunda:[""],terca:[""],quarta:[""],quinta:[""],sexta:[""]}
            return ctx.prisma.tabela.findFirst({
                where:{
                    Ano:{
                        every:{
                            id: input.id
                        }
                    }
                },
                select:{ segunda:true, terca:true, quarta:true, quinta:true, sexta:true }
            })
        })
})