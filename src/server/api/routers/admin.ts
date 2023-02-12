import { any, z } from "zod";

import { publicProcedure, createTRPCRouter } from "../trpc";

export const AdminRouter = createTRPCRouter({
    createYear : publicProcedure
        .input(z.object({name: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.ano.create({
                data:{
                    ano: input.name,
                    Tabela:{
                        create:{}
                    }
                }
            })
        }),
    GetMats: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.materia.findMany({
            select:{ materias:true, id:true }
        })
    }),
    CreateMat: publicProcedure
        .input(z.object({ name: z.string() }))
        .mutation(({ ctx,input }) => {
            return ctx.prisma.materia.create({
                data:{
                    materias: input.name
                }
            })
        }),
    AddMat: publicProcedure
        .input(z.object({ AnoId: z.string(), MatId: z.string() }))
        .mutation(({ ctx,input }) => {
            try {
                return ctx.prisma.ano.update({
                    where:{ id: input.AnoId },
                    data:{
                        posibleMaterias:{
                            connect:{ id: input.MatId }
                        }
                    }
                })
            } catch (error) {
                return error
            }
        }),
    RemoveMat: publicProcedure
        .input(z.object({ AnoId: z.string(), MatId: z.string() }))
        .mutation(({ ctx, input }) => {
            try {
                return ctx.prisma.ano.update({
                    where:{id: input.AnoId},
                    data:{
                        posibleMaterias:{
                            disconnect:{
                                id: input.MatId
                            }
                        }
                    }
                })
            } catch (error) {
                return error
            }
        }),
    ChangeMatDay: publicProcedure
        .input(z.object({ id:z.string(), day: any() }))
        .mutation(({ ctx, input }) => {
            try {
                const sla = input.day
                return ctx.prisma.ano.update({
                    where:{id:input.id},
                    data:{
                        Tabela:{
                            update:{...input.day}
                        }
                    }
                })
            } catch (error) {
                return error
            }
        })
})