import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: { signIn: "/admin" },
  callbacks: {
    authorized({ token }) {
      return token?.role === "admin";
    },
  },
});

export const config = {
  // Protège tout /admin/* SAUF la page de login /admin elle-même.
  // Protège aussi les opérations d'écriture des photos.
  matcher: ["/admin/dashboard/:path*", "/api/photos/admin/:path*"],
};
