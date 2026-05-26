import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

/**
 * Configuration de l'authentification de l'espace administrateur.
 *
 * 🔐 Identifiants stockés dans les variables d'environnement :
 *    ADMIN_USERNAME       : nom d'utilisateur en clair
 *    ADMIN_PASSWORD_HASH  : empreinte bcrypt du mot de passe
 *                           (générée avec : `npm run hash-password`)
 *    NEXTAUTH_SECRET      : chaîne aléatoire pour signer les sessions
 *
 * Aucune base de données : un seul administrateur, identifiants en variables
 * d'environnement Vercel (chiffrés au repos, jamais exposés au navigateur).
 */
export const authOptions = {
  session: { strategy: "jwt", maxAge: 60 * 60 * 8 }, // 8 heures
  pages: {
    signIn: "/admin",
    error: "/admin",
  },
  providers: [
    CredentialsProvider({
      name: "Admin",
      credentials: {
        username: { label: "Identifiant", type: "text" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        const expectedUser = process.env.ADMIN_USERNAME;
        const expectedHash = process.env.ADMIN_PASSWORD_HASH;

        if (!expectedUser || !expectedHash) {
          console.error("[auth] ADMIN_USERNAME / ADMIN_PASSWORD_HASH manquants");
          return null;
        }
        if (!credentials?.username || !credentials?.password) return null;
        if (credentials.username !== expectedUser) return null;

        const ok = await bcrypt.compare(credentials.password, expectedHash);
        if (!ok) return null;

        return { id: "admin", name: expectedUser, role: "admin" };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (token) session.user.role = token.role;
      return session;
    },
  },
};
