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
        }),
    GetByDay: publicProcedure
        .input(z.object({ id: z.string(), day: z.string() }))
        .query(({ ctx, input }) => {
            const activate = {
                segunda: input.day == "segunda" ? true : false,
                terca: input.day == "terça" ? true : false,
                quarta: input.day == "quarta" ? true : false,
                quinta: input.day == "quinta" ? true : false,
                sexta: input.day == "sexta" ? true : false,
            }
            return ctx.prisma.tabela.findFirst({
                where:{
                    Ano:{
                        some:{
                            id: input.id
                        }
                    }
                },
                select: activate
            })
        }),
    GetMaterias: publicProcedure
        .input(z.object({id: z.string() }))
        .query(({ ctx, input }) => {
            if(input.id == "") return null
            return ctx.prisma.ano.findUnique({
                where:{id: input.id},
                select:{posibleMaterias:true}
            })
        }),
    GetAllMaterias: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.materia.findMany({
            select:{materias:true, id:true}
        })
    })
})