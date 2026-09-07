import { fetchBlogBySlug } from "@/lib/api";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await fetchBlogBySlug(slug);

  if (!post) return notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm">
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
              <span>{new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}</span>
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
            className="prose prose-lg mt-8 max-w-none text-base leading-8 text-muted prose-headings:text-navy prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
          />
        </div>
      </article>
    </main>
  );
}
