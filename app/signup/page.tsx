"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error: signUpError } = await supabase.auth.signUp({ email, password });
    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    // When signUp returns a user immediately (depending on your Supabase settings)
    const user = data.user;
    if (user) {
      // create profile record
      await supabase.from("profiles" as any).insert({ id: user.id, email, full_name: fullName, role: "user" });
      router.push("/dashboard");
      return;
    }

    // If user requires email confirmation, show message and redirect to home
    setLoading(false);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Create an Account</h1>
          <p className="max-w-3xl mx-auto font-body text-base text-muted-foreground">Sign up to save your bookings and access your dashboard.</p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-md">
          <div className="rounded-3xl border border-border bg-card p-8">
            <form onSubmit={handleSignUp} className="space-y-5">
              {error && (
                <p className="rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</p>
              )}

              <div>
                <label className="font-body text-sm text-foreground block mb-2">Full name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                />
              </div>

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
                {loading ? "Creating account..." : "Create account"}
              </button>

              <p className="text-center font-body text-sm text-muted-foreground">
                Already have an account? <a href="/login" className="text-ocean underline">Sign in</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
