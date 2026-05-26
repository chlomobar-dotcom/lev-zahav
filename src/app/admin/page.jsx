"use client";
import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Lock, User } from "lucide-react";

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(params.get("error") ? "Identifiants incorrects." : "");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      setError("Identifiants incorrects.");
      return;
    }
    router.push("/admin/dashboard");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-cream via-sand to-cream px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center gap-3">
          <Image src="/images/logo.png" alt="LEV ZAHAV" width={80} height={80} priority />
          <h1 className="font-serif text-2xl font-semibold text-ink">Espace administrateur</h1>
          <p className="text-sm text-ink/60">LEV ZAHAV — La Banque du Cœur</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-ink/10 bg-white/80 p-8 shadow-card backdrop-blur"
        >
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-ink/70" htmlFor="username">
              Identifiant
            </label>
            <div className="relative">
              <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
              <input
                id="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border border-ink/15 bg-cream/50 py-2.5 pl-10 pr-3 text-sm text-ink outline-none transition focus:border-gold focus:bg-white"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-ink/70" htmlFor="password">
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-ink/15 bg-cream/50 py-2.5 pl-10 pr-3 text-sm text-ink outline-none transition focus:border-gold focus:bg-white"
              />
            </div>
          </div>

          {error && (
            <p role="alert" className="rounded-md bg-bordeaux/10 px-3 py-2 text-sm text-bordeaux">
              {error}
            </p>
          )}

          <button type="submit" disabled={loading} className="btn-gold w-full disabled:opacity-60">
            {loading ? "Connexion…" : "Se connecter"}
          </button>

          <p className="text-center text-xs text-ink/50">
            Accès réservé. Toute tentative est journalisée.
          </p>
        </form>
      </div>
    </div>
  );
}
