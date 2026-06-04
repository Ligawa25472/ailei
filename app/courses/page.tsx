import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { supabase } from "@/integrations/supabase/client";

export default async function CoursesPage() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("id,slug,title,category,description,price_usd,duration,location")
    .order("created_at", { ascending: true });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Courses</h1>
          <p className="max-w-3xl mx-auto font-body text-base text-muted-foreground">
            Browse our current courses and reserve your spot. Each course can be booked and paid for securely.
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          {error ? (
            <div className="rounded-3xl border border-destructive bg-destructive/10 p-8 text-destructive">
              <p>Unable to load courses.</p>
              <p>{error.message || "Please try again later."}</p>
            </div>
          ) : !courses || courses.length === 0 ? (
            <div className="rounded-3xl border border-border bg-card p-12 text-center">
              <p className="font-body text-sm text-muted-foreground">No courses are available right now.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {courses.map((course) => (
                <div key={course.id} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <div className="space-y-4">
                    <div>
                      <p className="font-display text-xl text-foreground">{course.title}</p>
                      <p className="font-body text-sm text-muted-foreground">{course.category}</p>
                    </div>
                    <p className="font-body text-sm text-foreground leading-relaxed min-h-[3rem]">
                      {course.description || "No description available."}
                    </p>
                    <div className="grid gap-3 text-sm text-foreground">
                      {course.location ? (
                        <p><strong>Location:</strong> {course.location}</p>
                      ) : null}
                      {course.duration ? (
                        <p><strong>Duration:</strong> {course.duration}</p>
                      ) : null}
                      <p><strong>Price:</strong> ${course.price_usd.toFixed(2)}</p>
                    </div>
                    <div className="mt-6">
                      <Link
                        href={`/booking?courseSlug=${course.slug}`}
                        className="inline-flex w-full items-center justify-center rounded-md bg-ocean px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-background hover:bg-ocean/90 transition"
                      >
                        Book & Pay
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
