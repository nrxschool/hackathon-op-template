import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { env } from "~~/env";

const scopes = ["identify", "email", "guilds", "gdm.join", "guilds.join", "connections"].join(" ");

const authOptions = {
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
      authorization: { params: { scope: scopes } },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };
