import { fetchBlogBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import FAQSection from "@/components/ui/FAQSection";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await fetchBlogBySlug(slug);

  if (!post) return notFound();

  const faqItems = Array.isArray(post.faqList)
    ? post.faqList.filter(
        (faq) => faq && typeof faq.question === "string" && typeof faq.answer === "string"
      )
    : [];

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <article className="overflow-hidden rounded-[1.5rem] border border-blue-100 bg-white shadow-sm sm:rounded-[2rem]">
        {post.imageUrl && (
          <div className="relative h-64 w-full sm:h-80 lg:h-[420px]">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-muted">
            {post.date && (
              <span>
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            )}
            {post.category && (
              <>
                <span className="h-1 w-1 rounded-full bg-primary" />
                <span>{post.category}</span>
              </>
            )}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div
            className="blog-content mt-8 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
          />
        </div>
      </article>

      {faqItems.length > 0 && (
        <section className="mt-12 rounded-[1.5rem] border border-blue-100 bg-[#f8fcff] p-5 sm:p-8">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              FAQ
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>

          <FAQSection faqs={faqItems} />
        </section>
      )}
    </main>
  );
}
