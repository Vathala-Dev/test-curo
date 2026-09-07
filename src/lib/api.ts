export type ApiBlog = {
  _id: string;
  title: string;
  imageUrl?: string;
  content?: string; // HTML
  slug?: string;
  date?: string;
  category?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  faqList?: Array<{ question: string; answer: string }>;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
export type ApiBlogResponse = {
  message: string;
  data: ApiBlog[];
};
const BASE = "https://api.vathala.com";

function htmlExcerpt(html: string, max = 200) {
  const stripped = html.replace(/<[^>]+>/g, "").replace(/&nbsp;|\n/g, " ").trim();
  if (stripped.length <= max) return stripped;
  return `${stripped.slice(0, max).trim()}…`;
}

export async function fetchAllBlogs(category?: string): Promise<ApiBlog[]> {
  try {
    const res = await fetch(`${BASE}/users/getAllBlogs`);
    if (!res.ok) return [];

    const data: ApiBlogResponse = await res.json();
    const blogs = data.data ?? [];

    if (!category) return blogs;

    const normalizedCategory = category.trim().toLowerCase();
    return blogs.filter((blog) => {
      const blogCategory = String(blog.category ?? "").trim().toLowerCase();
      return blogCategory === normalizedCategory;
    });
  } catch (e) {
    console.error("Error fetching all blogs:", e);
    return [];
  }
}

export async function fetchBlogBySlug(slug: string): Promise<ApiBlog | null> {
  const all = await fetchAllBlogs();
  const found = all.find((b) => (b.slug ?? b._id) === slug);
  console.log("found", found);
  return found ?? null;
}


export { htmlExcerpt };
