import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
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

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/admin-login");
        return;
      }
      fetchBookings();
    };
    checkAuth();
  }, [navigate]);

  const fetchBookings = async () => {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setBookings(data as Booking[]);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin-login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-body text-sm text-muted-foreground">Loading bookings...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border py-4">
        <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between">
          <h1 className="font-display text-xl font-semibold text-foreground">
            Admin Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <span className="font-body text-sm text-muted-foreground">
              {bookings.length} booking{bookings.length !== 1 ? "s" : ""}
            </span>
            <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 border border-border rounded-sm font-body text-sm text-foreground hover:bg-muted transition-colors">
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-8">
        {bookings.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-body text-sm text-muted-foreground">No bookings yet.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {bookings.map((b) => (
              <div key={b.id} className="border border-border rounded-sm">
                <button
                  onClick={() => setExpandedId(expandedId === b.id ? null : b.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-6 text-left">
                    <span className="font-display text-sm font-semibold text-foreground">
                      {b.first_name} {b.last_name}
                    </span>
                    <span className="font-body text-sm text-muted-foreground">{b.email}</span>
                    <span className="font-display text-sm font-semibold text-ocean">
                      ${Number(b.total_cost).toLocaleString()}.00
                    </span>
                    <span className={`px-2 py-0.5 rounded-sm font-body text-xs font-semibold ${
                      b.status === "pending" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                    }`}>
                      {b.status}
                    </span>
                    <span className="font-body text-xs text-muted-foreground">
                      {new Date(b.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  {expandedId === b.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {expandedId === b.id && (
                  <div className="px-6 pb-6 border-t border-border pt-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-display text-sm font-semibold text-foreground mb-3">Attendee Details</h3>
                        <div className="space-y-2">
                          <Detail label="Full Name" value={`${b.first_name} ${b.last_name}`} />
                          <Detail label="Email" value={b.email} />
                          <Detail label="Booker Email" value={b.booker_email} />
                          <Detail label="Phone" value={b.phone} />
                          <Detail label="Address" value={b.address} />
                          <Detail label="City" value={b.city} />
                          <Detail label="Date of Birth" value={b.dob} />
                          <Detail label="Photo ID" value={b.photo_id} />
                          <Detail label="Company" value={b.company} />
                          <Detail label="Height" value={b.height} />
                          <Detail label="Shoe Size" value={b.shoe_size} />
                          <Detail label="Weight" value={b.weight} />
                          <Detail label="Swimming" value={b.swimming} />
                          <Detail label="USCG Credential" value={b.uscg_credential} />
                          <Detail label="Hear About Us" value={b.hear_about} />
                          <Detail label="Text Messages" value={b.text_messages} />
                          <Detail label="Cancellation Agreed" value={b.cancellation_agreed ? "Yes" : "No"} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display text-sm font-semibold text-foreground mb-3">Courses</h3>
                        <div className="space-y-2">
                          {Array.isArray(b.courses) && b.courses.map((c: any, i: number) => (
                            <div key={i} className="bg-muted p-3 rounded-sm">
                              <p className="font-body text-sm font-semibold text-foreground">{c.title}</p>
                              <p className="font-body text-xs text-muted-foreground">{c.date} · {c.duration}</p>
                              <p className="font-body text-sm text-ocean font-semibold">${c.price} × {c.quantity}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-border">
                          <Detail label="Total Cost" value={`$${Number(b.total_cost).toLocaleString()}.00`} />
                          <Detail label="Confirmed Amount" value={b.confirm_amount ? `$${b.confirm_amount}` : "—"} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Detail = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-2">
    <span className="font-body text-xs text-muted-foreground w-32 flex-shrink-0">{label}:</span>
    <span className="font-body text-sm text-foreground">{value || "—"}</span>
  </div>
);

export default AdminDashboard;
