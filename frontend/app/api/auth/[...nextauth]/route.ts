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

      async profile(profile, tokens) {
        const response = await fetch("https://discord.com/api/users/@me/guilds", {
          headers: {
            Authorization: `Bearer ${tokens.access_token}`,
          },
        });

        const guilds = await response.json();

        return {
          id: profile.id,
          name: profile.username,
          email: profile.email,
          image: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`,
          guilds: guilds,
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }: any) {
      // Allow sign-in for other providers
      return true;
    },

    async jwt({ token, user }: any) {
      return { ...token, ...user };
    },
    async session({ session, user, token }: any) {
      session.guilds = token?.guilds;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };
