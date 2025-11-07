import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
  session: {},
  callbacks: {
    async signIn({ user, account }) {
      return true;
    },
    async jwt({ token, account, trigger }) {
      return token;
    },
    async session({ session, token }) {
      return session;
    }
  },
  pages: {
    signIn: ""
  }
});
