import { z } from "zod";

const envSchema = z.object({
  DISCORD_CLIENT_ID: z.string(),
  DISCORD_CLIENT_SECRET: z.string(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("Invalid environment variables", parsedEnv.error.flatten().fieldErrors);

  throw new Error("Invalid environment variables");
}

export const env = parsedEnv.data;
