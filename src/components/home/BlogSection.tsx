import BlogCard from "@/components/blog/BlogCard";
import SectionHeading from "@/components/ui/SectionHeading";

const posts = [
  {
    slug: "home-care-tips",
    title: "5 Simple Home Care Tips for Faster Recovery",
    date: "2026-08-10",
    excerpt:
      "Practical advice families can use to support recovery at home, from nutrition to resting routines.",
  },
  {
    slug: "managing-chronic-conditions",
    title: "Managing Chronic Conditions With Home Care",
    date: "2026-07-22",
    excerpt:
      "How regular home visits and monitoring can improve outcomes for chronic disease patients.",
  },
  {
    slug: "physio-exercises",
    title: "Easy Physiotherapy Exercises You Can Do At Home",
    date: "2026-06-15",
    excerpt:
      "Simple, safe exercises prescribed by physiotherapists to help mobility and reduce pain.",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Blogs | Home Healthcare"
          subtitle="Stay informed with practical healthcare tips and expert guidance"
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              date={p.date}
              excerpt={p.excerpt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
