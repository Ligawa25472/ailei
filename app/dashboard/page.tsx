"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  const router = useRouter();
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        router.push("/login");
        return;
      }

      const userId = session.user.id;
      // Try fetching bookings by user_id first
      const { data, error: fetchError } = await supabase.from("bookings" as any).select("*").eq("user_id", userId).order("created_at", { ascending: false });

      if (fetchError) {
        setError(fetchError.message);
        setLoading(false);
        return;
      }

      if (data && data.length > 0) {
        setBookings(data);
        setLoading(false);
        return;
      }

      // Fallback: fetch by user's email
      const userEmail = session.user.email;
      if (userEmail) {
        const { data: byEmail, error: emailErr } = await supabase.from("bookings").select("*").eq("email", userEmail).order("created_at", { ascending: false });
        if (emailErr) setError(emailErr.message || "");
        if (byEmail) setBookings(byEmail);
      }

      setLoading(false);
    };

    init();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="font-body text-sm text-muted-foreground">Loading dashboard…</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border py-4">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-display text-2xl text-foreground">My Bookings</h1>
            <p className="font-body text-sm text-muted-foreground">View and manage your course registrations and payments.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button onClick={() => router.push("/booking")} className="inline-flex items-center justify-center rounded-md bg-ocean px-4 py-2 text-sm font-semibold text-background hover:bg-ocean/90 transition">
              Reserve a course
            </button>
            <button onClick={handleLogout} className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted transition">
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-8">
        {error && (
          <div className="mb-6 rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</div>
        )}

        {bookings.length === 0 ? (
          <div className="rounded-3xl border border-border bg-card p-12 text-center">
            <p className="font-body text-sm text-muted-foreground">You have no bookings yet.</p>
            <button onClick={() => router.push("/booking")} className="mt-6 inline-flex rounded-md bg-ocean px-5 py-3 text-sm font-semibold text-background hover:bg-ocean/90 transition">
              Reserve a course now
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((b) => (
              <div key={b.id} className="rounded-3xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-base text-foreground font-semibold">{b.first_name} {b.last_name}</p>
                    <p className="font-body text-sm text-muted-foreground">{b.email} · {b.phone || 'No phone'}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-sm font-semibold text-foreground">{b.status}</p>
                    <p className="font-body text-xs text-muted-foreground">{new Date(b.created_at).toLocaleString()}</p>
                  </div>
                </div>

                {Array.isArray(b.courses) && b.courses.length > 0 && (
                  <div className="mt-4">
                    <h3 className="font-display text-sm text-foreground mb-3">Courses</h3>
                    <div className="space-y-2">
                      {b.courses.map((c: any, i: number) => (
                        <div key={i} className="rounded-lg bg-background p-3">
                          <p className="font-body text-sm text-foreground font-semibold">{c.title}</p>
                          <p className="font-body text-xs text-muted-foreground">{c.date} · {c.duration}</p>
                          <p className="font-body text-sm text-ocean font-semibold">${c.price} × {c.quantity || 1}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
