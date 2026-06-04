"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Course {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string | null;
  price_usd: number;
  duration: string | null;
  location: string | null;
}

const defaultFormState = {
  id: "",
  slug: "",
  title: "",
  category: "",
  description: "",
  price_usd: 0,
  duration: "",
  location: "",
};

export default function AdminCoursesPage() {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(defaultFormState);
  const [formMode, setFormMode] = useState<"create" | "edit">("create");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

      await loadCourses();
    };

    initialize();
  }, [router]);

  const loadCourses = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/courses");
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "Unable to load courses.");
      }
      setCourses(payload || []);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unable to load courses.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.title || !form.slug || !form.category || !form.price_usd) {
      setError("Title, slug, category and price are required.");
      return;
    }

    const dataToSend = {
      slug: form.slug,
      title: form.title,
      category: form.category,
      description: form.description || null,
      price_usd: form.price_usd,
      duration: form.duration || null,
      location: form.location || null,
    };

    const method = formMode === "create" ? "POST" : "PATCH";
    const body = formMode === "create" ? dataToSend : { id: form.id, ...dataToSend };

    try {
      const response = await fetch("/api/courses", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "Unable to save course.");
      }
      setSuccess(`Course ${formMode === "create" ? "created" : "updated"} successfully.`);
      setForm(defaultFormState);
      setFormMode("create");
      await loadCourses();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unable to save course.");
    }
  };

  const handleEdit = (course: Course) => {
    setForm({
      id: course.id,
      slug: course.slug,
      title: course.title,
      category: course.category,
      description: course.description || "",
      price_usd: course.price_usd,
      duration: course.duration || "",
      location: course.location || "",
    });
    setFormMode("edit");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (courseId: string) => {
    if (!window.confirm("Delete this course?")) {
      return;
    }
    setError("");
    setSuccess("");
    try {
      const response = await fetch(`/api/courses?id=${encodeURIComponent(courseId)}`, {
        method: "DELETE",
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "Unable to delete course.");
      }
      setSuccess("Course deleted successfully.");
      await loadCourses();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unable to delete course.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="border-b border-border py-4">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-display text-2xl text-foreground">Course Management</h1>
            <p className="font-body text-sm text-muted-foreground">Create, update, and delete courses stored in the database.</p>
          </div>
          <button
            type="button"
            onClick={() => router.push("/admin")}
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted transition"
          >
            Back to Dashboard
          </button>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="rounded-3xl border border-border bg-card p-8 mb-10">
            <h2 className="font-display text-xl text-foreground mb-4">{formMode === "create" ? "Add a course" : "Edit course"}</h2>
            {error && <div className="mb-4 rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</div>}
            {success && <div className="mb-4 rounded-md bg-emerald-100 px-4 py-3 text-sm text-emerald-900">{success}</div>}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">Title</label>
                  <input
                    value={form.title}
                    onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
                    required
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">Slug</label>
                  <input
                    value={form.slug}
                    onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
                    required
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">Category</label>
                  <input
                    value={form.category}
                    onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                    required
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">Price (USD)</label>
                  <input
                    type="number"
                    value={form.price_usd}
                    onChange={(e) => setForm((prev) => ({ ...prev, price_usd: Number(e.target.value) }))}
                    required
                    step="0.01"
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">Duration</label>
                  <input
                    value={form.duration}
                    onChange={(e) => setForm((prev) => ({ ...prev, duration: e.target.value }))}
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">Location</label>
                  <input
                    value={form.location}
                    onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))}
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
                  rows={4}
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20 resize-none"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-ocean px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-background hover:bg-ocean/90 transition"
                >
                  {formMode === "create" ? "Create Course" : "Save Changes"}
                </button>
                {formMode === "edit" && (
                  <button
                    type="button"
                    onClick={() => {
                      setForm(defaultFormState);
                      setFormMode("create");
                      setError("");
                      setSuccess("");
                    }}
                    className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-foreground hover:bg-muted transition"
                  >
                    Cancel Edit
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="space-y-4">
            {loading ? (
              <div className="rounded-3xl border border-border bg-card p-12 text-center">
                <p className="font-body text-sm text-muted-foreground">Loading courses…</p>
              </div>
            ) : courses.length === 0 ? (
              <div className="rounded-3xl border border-border bg-card p-12 text-center">
                <p className="font-body text-sm text-muted-foreground">No courses found.</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {courses.map((course) => (
                  <div key={course.id} className="rounded-3xl border border-border bg-card p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="font-display text-lg text-foreground">{course.title}</p>
                        <p className="font-body text-sm text-muted-foreground">{course.category} · ${course.price_usd.toFixed(2)}</p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => handleEdit(course)}
                          className="rounded-md border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted transition"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(course.id)}
                          className="rounded-md bg-destructive px-4 py-2 text-sm font-semibold text-background hover:bg-destructive/90 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    {course.description ? (
                      <p className="mt-4 font-body text-sm text-foreground leading-relaxed">{course.description}</p>
                    ) : null}
                    <div className="mt-4 grid gap-3 sm:grid-cols-3 text-sm text-muted-foreground">
                      <div>
                        <span className="font-semibold text-foreground">Slug:</span> {course.slug}
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Duration:</span> {course.duration || "—"}
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Location:</span> {course.location || "—"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
