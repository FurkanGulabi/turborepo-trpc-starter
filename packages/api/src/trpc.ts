import { initTRPC } from "@trpc/server";
import { Context, TRPCContext } from "./context";

const t = initTRPC.context<Context | TRPCContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
