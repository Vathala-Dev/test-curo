import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/blog/BlogCard";
import { fetchAllBlogs, htmlExcerpt } from "@/lib/api";

const PAGE_SIZE = 15;

interface BlogPageProps {
  searchParams?: Promise<{ page?: string; category?: string }>;
}

function buildBlogHref(page: number, category: string) {
  const params = new URLSearchParams();

  if (category && category !== "all") {
    params.set("category", category);
  }

  if (page > 1) {
    params.set("page", String(page));
  }

  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = (await searchParams) ?? {};
  const currentPage = Number(params.page ?? "1");
  const selectedCategory = params.category ?? "all";
  const blogs = await fetchAllBlogs();
  const normalizedCategories = Array.from(
    new Set(
      blogs
        .map((blog) => blog.category?.trim())
        .filter((value): value is string => Boolean(value && value.length > 0))
    )
  );

  const categories = ["all", ...normalizedCategories];
  const validSelectedCategory = categories.includes(selectedCategory) ? selectedCategory : "all";

  const filteredBlogs =
    validSelectedCategory === "all"
      ? blogs
      : blogs.filter((blog) => (blog.category ?? "General").trim() === validSelectedCategory);

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / PAGE_SIZE));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safePage - 1) * PAGE_SIZE;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <SectionHeading title="Blog" subtitle="Latest articles and updates" />

      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = category === validSelectedCategory;
          const href = buildBlogHref(1, category);

          return (
            <Link
              key={category}
              href={href}
              className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-primary bg-primary text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {category === "all" ? "All" : category}
            </Link>
          );
        })}
      </div>

      {paginatedBlogs.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center text-slate-600">
          No blog articles available in this category yet.
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
            href={safePage === 1 ? buildBlogHref(1, validSelectedCategory) : buildBlogHref(safePage - 1, validSelectedCategory)}
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

            return (
              <Link
                key={pageNumber}
                href={buildBlogHref(pageNumber, validSelectedCategory)}
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
            href={safePage === totalPages ? buildBlogHref(totalPages, validSelectedCategory) : buildBlogHref(safePage + 1, validSelectedCategory)}
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
