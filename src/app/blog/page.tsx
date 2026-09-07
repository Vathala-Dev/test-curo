import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/blog/BlogCard";
import { fetchAllBlogs, htmlExcerpt } from "@/lib/api";

const PAGE_SIZE = 15;

interface BlogPageProps {
  searchParams?: Promise<{ page?: string; category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = (await searchParams) ?? {};
  const currentPage = Number(params.page ?? "1");
  const selectedCategory = params.category?.trim();
  const allBlogs = await fetchAllBlogs(selectedCategory);
  const allCategories = Array.from(
    new Set(
      (await fetchAllBlogs())
        .map((blog) => blog.category)
        .filter((category): category is string => Boolean(category && category.trim()))
    )
  ).sort((a, b) => a.localeCompare(b));

  const totalPages = Math.max(1, Math.ceil(allBlogs.length / PAGE_SIZE));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safePage - 1) * PAGE_SIZE;
  const paginatedBlogs = allBlogs.slice(startIndex, startIndex + PAGE_SIZE);
  const categoryQuery = selectedCategory ? `&category=${encodeURIComponent(selectedCategory)}` : "";

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading title="Blog" subtitle="Latest articles and updates" />

      {allCategories.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-3">
          <Link
            href="/blog"
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              !selectedCategory
                ? "border-primary bg-primary text-white"
                : "border-slate-200 bg-white text-muted hover:border-primary/40 hover:text-primary"
            }`}
          >
            All
          </Link>

          {allCategories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <Link
                key={category}
                href={`/blog?category=${encodeURIComponent(category)}`}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-primary bg-primary text-white"
                    : "border-slate-200 bg-white text-muted hover:border-primary/40 hover:text-primary"
                }`}
              >
                {category}
              </Link>
            );
          })}
        </div>
      )}

      {paginatedBlogs.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center text-muted">
          No blog posts found for this category.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {paginatedBlogs.map((b) => (
            <BlogCard
              key={b._id}
              slug={b.slug ?? b._id}
              title={b.title}
              imageUrl={b.imageUrl}
              date={b.date ?? b.createdAt}
              excerpt={b.content ? htmlExcerpt(b.content, 120) : b.metaDescription}
            />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={safePage === 1 ? `/blog${selectedCategory ? `?category=${encodeURIComponent(selectedCategory)}` : ""}` : `/blog?page=${safePage - 1}${categoryQuery}`}
            className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition ${
              safePage === 1
                ? "pointer-events-none border-slate-200 bg-slate-100 text-slate-400"
                : "border-primary/30 bg-white text-primary hover:bg-light-blue"
            }`}
          >
            Previous
          </Link>

          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            const isActive = pageNumber === safePage;
            const pageHref = pageNumber === 1
              ? selectedCategory
                ? `/blog?category=${encodeURIComponent(selectedCategory)}`
                : "/blog"
              : `/blog?page=${pageNumber}${categoryQuery}`;

            return (
              <Link
                key={pageNumber}
                href={pageHref}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "border border-slate-200 bg-white text-muted hover:border-primary/30 hover:text-primary"
                }`}
              >
                {pageNumber}
              </Link>
            );
          })}

          <Link
            href={safePage === totalPages ? `/blog?page=${totalPages}${categoryQuery}` : `/blog?page=${safePage + 1}${categoryQuery}`}
            className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition ${
              safePage === totalPages
                ? "pointer-events-none border-slate-200 bg-slate-100 text-slate-400"
                : "border-primary/30 bg-white text-primary hover:bg-light-blue"
            }`}
          >
            Next
          </Link>
        </div>
      )}
    </main>
  );
}
