import { inferAsyncReturnType } from "@trpc/server";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import * as trpcNext from "@trpc/server/adapters/next";

// Context for Next.js API routes
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createContext(opts: trpcNext.CreateNextContextOptions) {
  return {
    // Add your context here
  };
}

// Context for App Router (fetch adapter)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createTRPCContext(opts: FetchCreateContextFnOptions) {
  return {
    // Add your context here
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
export type TRPCContext = inferAsyncReturnType<typeof createTRPCContext>;
