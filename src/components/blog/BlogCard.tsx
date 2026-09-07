import Link from "next/link";
import Image from "next/image";

interface Props {
  slug: string;
  title: string;
  imageUrl?: string;
  date?: string;
  excerpt?: string;
}

export default function BlogCard({ slug, title, imageUrl, date, excerpt }: Props) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-blue-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
      {imageUrl && (
        <div className="relative h-56 w-full overflow-hidden sm:h-64">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-5 sm:p-6">
        {date && (
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            {new Date(date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        )}

        <h3 className="mt-3 text-xl font-bold leading-snug text-navy transition-colors group-hover:text-primary">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>

        {excerpt && <p className="mt-3 text-sm leading-7 text-muted">{excerpt}</p>}

        <Link
          href={`/blog/${slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          Read more
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
