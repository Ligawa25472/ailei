import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";

const AdminLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md border border-border rounded-sm">
        <div className="bg-muted px-6 py-4">
          <h1 className="font-display text-lg font-semibold text-foreground">Admin Login</h1>
          <p className="font-body text-xs text-muted-foreground mt-1">Ahlei</p>
        </div>
        <form onSubmit={handleLogin} className="p-6 space-y-4">
          {error && (
            <p className="font-body text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-sm">{error}</p>
          )}
          <div>
            <label className="font-body text-sm text-foreground block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean"
            />
          </div>
          <div>
            <label className="font-body text-sm text-foreground block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-ocean text-background font-body font-semibold text-sm rounded-sm hover:bg-ocean/90 transition-colors disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
