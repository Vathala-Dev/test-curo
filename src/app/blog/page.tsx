import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/blog/BlogCard";
import { fetchAllBlogs, htmlExcerpt } from "@/lib/api";

const PAGE_SIZE = 6;

interface BlogPageProps {
  searchParams?: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = (await searchParams) ?? {};
  const currentPage = Number(params.page ?? "1");
  const blogs = await fetchAllBlogs();
  const totalPages = Math.max(1, Math.ceil(blogs.length / PAGE_SIZE));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safePage - 1) * PAGE_SIZE;
  const paginatedBlogs = blogs.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <SectionHeading title="Blog" subtitle="Latest articles and updates" />

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

      {totalPages > 1 && (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={safePage === 1 ? "/blog" : `?page=${safePage - 1}`}
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
                href={pageNumber === 1 ? "/blog" : `?page=${pageNumber}`}
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
            href={safePage === totalPages ? `?page=${totalPages}` : `?page=${safePage + 1}`}
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
