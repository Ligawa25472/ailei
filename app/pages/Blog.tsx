import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Top 5 Reasons to Start a Career at Sea",
    excerpt: "Discover why maritime careers are more rewarding than ever, from travel opportunities to competitive salaries.",
    date: "March 15, 2026",
    category: "Career",
  },
  {
    title: "STCW Certification: Everything You Need to Know",
    excerpt: "A comprehensive guide to STCW certification requirements, courses, and how to get started.",
    date: "March 8, 2026",
    category: "Training",
  },
  {
    title: "Life Aboard a Superyacht: What to Expect",
    excerpt: "Former crew members share their experiences and tips for thriving in the superyacht industry.",
    date: "February 28, 2026",
    category: "Yacht",
  },
  {
    title: "How to Obtain Your Captain's License",
    excerpt: "Step-by-step guide to earning your USCG captain's license and launching your career as a vessel operator.",
    date: "February 20, 2026",
    category: "License",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl text-foreground mb-4"
          >
            Academy Blog
          </motion.h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            News, tips, and insights from the maritime industry.
          </p>
        </div>
      </div>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 border border-border hover:shadow-maritime-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-body text-xs tracking-wider uppercase text-ocean font-semibold">
                    {post.category}
                  </span>
                  <span className="font-body text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="font-display text-xl text-foreground mb-2">{post.title}</h2>
                <p className="font-body text-muted-foreground mb-4">{post.excerpt}</p>
                <span className="font-body text-sm font-semibold tracking-wider uppercase text-ocean cursor-pointer hover:text-foreground transition-colors">
                  Read More →
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
