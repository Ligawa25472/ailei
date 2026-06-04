"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        router.push("/dashboard");
      }
    };
    checkSession();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    const user = data.user;
    if (!user) {
      setError("Unable to authenticate. Please check your credentials.");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Sign In</h1>
          <p className="max-w-3xl mx-auto font-body text-base text-muted-foreground">Access your bookings and course registrations.</p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-md">
          <div className="rounded-3xl border border-border bg-card p-8">
            <form onSubmit={handleLogin} className="space-y-5">
              {error && (
                <p className="rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</p>
              )}

              <div>
                <label className="font-body text-sm text-foreground block mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                />
              </div>

              <div>
                <label className="font-body text-sm text-foreground block mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-ocean px-4 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-background transition hover:bg-ocean/90 disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>

              <p className="text-center font-body text-sm text-muted-foreground">
                Don't have an account? <a href="/signup" className="text-ocean underline">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
