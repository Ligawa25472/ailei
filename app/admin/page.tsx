"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LogOut, ChevronDown, ChevronUp } from "lucide-react";

interface Booking {
  id: string;
  booker_email: string;
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  email: string;
  phone: string;
  dob: string;
  photo_id: string;
  company: string;
  height: string;
  shoe_size: string;
  swimming: string;
  weight: string;
  hear_about: string;
  uscg_credential: string;
  text_messages: string;
  cancellation_agreed: boolean;
  courses: any[];
  total_cost: number;
  confirm_amount: string;
  status: string;
  created_at: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const initialize = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        router.push("/admin-login");
        return;
      }

      const profileResponse: any = await supabase
        .from("profiles" as any)
        .select("role")
        .eq("id", session.user.id)
        .single();
      const profile = profileResponse.data;
      const profileError = profileResponse.error;

      if (profileError || profile?.role !== "admin") {
        await supabase.auth.signOut();
        router.push("/admin-login");
        return;
      }

      await fetchBookings();
    };

    initialize();
  }, [router]);

  const fetchBookings = async () => {
    const { data, error: fetchError } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (fetchError) {
      setError(fetchError.message);
    } else if (data) {
      setBookings(data as Booking[]);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin-login");
  };

  const updateBookingStatus = async (id: string, status: string) => {
    setLoading(true);
    const { error: updateError } = await supabase
      .from("bookings")
      .update({ status })
      .eq("id", id);

    if (updateError) {
      setError(updateError.message);
    }
    await fetchBookings();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-body text-sm text-muted-foreground">Loading admin dashboard…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border py-4">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-display text-2xl text-foreground">Admin Dashboard</h1>
            <p className="font-body text-sm text-muted-foreground">Manage bookings, confirm registrations, and monitor course requests.</p>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted transition"
          >
            <LogOut className="h-4 w-4" /> Sign Out
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-8">
        {error && (
          <div className="mb-6 rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {bookings.length === 0 ? (
          <div className="rounded-3xl border border-border bg-card p-12 text-center">
            <p className="font-body text-sm text-muted-foreground">No bookings found yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="rounded-3xl border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setExpandedId(expandedId === booking.id ? null : booking.id)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-muted transition"
                >
                  <div className="space-y-2">
                    <p className="font-display text-base text-foreground">{booking.first_name} {booking.last_name}</p>
                    <p className="font-body text-sm text-muted-foreground">{booking.email} · {booking.phone || "No phone"}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${booking.status === "pending" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"}`}>
                      {booking.status}
                    </span>
                    {expandedId === booking.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>
                {expandedId === booking.id && (
                  <div className="border-t border-border px-6 py-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-3">
                        <Detail label="Booker Email" value={booking.booker_email} />
                        <Detail label="Address" value={booking.address} />
                        <Detail label="City" value={booking.city} />
                        <Detail label="Date of Birth" value={booking.dob} />
                        <Detail label="Photo ID" value={booking.photo_id} />
                        <Detail label="Company" value={booking.company} />
                        <Detail label="Height" value={booking.height} />
                        <Detail label="Shoe Size" value={booking.shoe_size} />
                        <Detail label="Weight" value={booking.weight} />
                      </div>
                      <div className="space-y-3">
                        <Detail label="Swimming" value={booking.swimming} />
                        <Detail label="USCG Credential" value={booking.uscg_credential} />
                        <Detail label="Hear About" value={booking.hear_about} />
                        <Detail label="Text Messages" value={booking.text_messages} />
                        <Detail label="Cancellation Agreed" value={booking.cancellation_agreed ? "Yes" : "No"} />
                        <Detail label="Total Cost" value={`$${Number(booking.total_cost).toLocaleString()}`} />
                        <Detail label="Confirmed Amount" value={booking.confirm_amount ? `$${booking.confirm_amount}` : "—"} />
                      </div>
                    </div>

                    {Array.isArray(booking.courses) && booking.courses.length > 0 && (
                      <div className="mt-6 rounded-2xl border border-border bg-muted p-4">
                        <h3 className="font-display text-sm text-foreground mb-4">Selected Courses</h3>
                        <div className="space-y-3">
                          {booking.courses.map((courseItem, index) => (
                            <div key={index} className="rounded-lg bg-background p-3">
                              <p className="font-body text-sm text-foreground font-semibold">{courseItem.title}</p>
                              <p className="font-body text-xs text-muted-foreground">{courseItem.date} · {courseItem.duration}</p>
                              <p className="font-body text-sm text-ocean font-semibold">${courseItem.price} × {courseItem.quantity || 1}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-6 flex flex-col gap-3 md:flex-row">
                      <button
                        type="button"
                        onClick={() => updateBookingStatus(booking.id, "confirmed")}
                        className="rounded-md bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition"
                      >
                        Mark Confirmed
                      </button>
                      <button
                        type="button"
                        onClick={() => updateBookingStatus(booking.id, "cancelled")}
                        className="rounded-md bg-amber-600 px-4 py-3 text-sm font-semibold text-white hover:bg-amber-700 transition"
                      >
                        Mark Cancelled
                      </button>
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

const Detail = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-3">
    <span className="font-body text-xs text-muted-foreground w-36 flex-shrink-0">{label}</span>
    <span className="font-body text-sm text-foreground">{value || "—"}</span>
  </div>
);
